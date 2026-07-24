import { cookies } from "next/headers";
import { verifyToken } from "./auth";
import connectDb from "./db";
import User from "@/model/user.model";

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  if (!token) {
    return null;
  }
  try {
    const decoded = verifyToken(token);
    await connectDb();
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return null;
    }
    return {
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
