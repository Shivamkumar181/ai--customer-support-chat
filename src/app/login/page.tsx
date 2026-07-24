import AuthClient from "@/components/AuthClient";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getSession();
  if (session) {
    redirect("/dashboard");
  }

  return <AuthClient />;
}
