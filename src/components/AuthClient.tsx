// 'use client'
// import React, { useState } from 'react'
// import { motion, AnimatePresence } from "motion/react"
// import axios from 'axios'
// import { useRouter } from 'next/navigation'

// function AuthClient() {
//     const router = useRouter()
//     const [mode, setMode] = useState<"login" | "signup">("login")
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState("")

//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")

//     const resetFields = () => {
//         setName("")
//         setEmail("")
//         setPassword("")
//         setConfirmPassword("")
//         setError("")
//     }

//     const switchMode = (next: "login" | "signup") => {
//         setMode(next)
//         resetFields()
//     }

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault()
//         setError("")

//         if (mode === "signup" && password !== confirmPassword) {
//             setError("Passwords do not match")
//             return
//         }

//         setLoading(true)
//         try {
//             const url = mode === "login" ? "/api/auth/login" : "/api/auth/signup"
//             const payload =
//                 mode === "login"
//                     ? { email, password }
//                     : { name, email, password, confirmPassword }

//             await axios.post(url, payload)
//             router.push("/dashboard")
//             router.refresh()
//         } catch (err: any) {
//             setError(err?.response?.data?.message || "Something went wrong. Please try again.")
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 flex items-center justify-center px-6'>
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className='w-full max-w-md bg-white rounded-2xl shadow-xl border border-zinc-200 p-8'
//             >
//                 <div className='text-center mb-8'>
//                     <div className='text-lg font-semibold tracking-tight'>
//                         Support <span className='text-zinc-400'>AI</span>
//                     </div>
//                     <h1 className='text-2xl font-semibold mt-4'>
//                         {mode === "login" ? "Welcome back" : "Create your account"}
//                     </h1>
//                     <p className='text-zinc-500 mt-1 text-sm'>
//                         {mode === "login"
//                             ? "Log in to manage your chatbot"
//                             : "Sign up to start building your AI chatbot"}
//                     </p>
//                 </div>

//                 <div className='flex bg-zinc-100 rounded-xl p-1 mb-8'>
//                     <button
//                         className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${mode === "login" ? "bg-white shadow text-zinc-900" : "text-zinc-500"
//                             }`}
//                         onClick={() => switchMode("login")}
//                         type="button"
//                     >
//                         Login
//                     </button>
//                     <button
//                         className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${mode === "signup" ? "bg-white shadow text-zinc-900" : "text-zinc-500"
//                             }`}
//                         onClick={() => switchMode("signup")}
//                         type="button"
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 <AnimatePresence mode="wait">
//                     <motion.form
//                         key={mode}
//                         initial={{ opacity: 0, x: mode === "login" ? -12 : 12 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: mode === "login" ? 12 : -12 }}
//                         transition={{ duration: 0.2 }}
//                         onSubmit={handleSubmit}
//                         className='space-y-4'
//                     >
//                         {mode === "signup" && (
//                             <input
//                                 type="text"
//                                 placeholder="Full name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                                 className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
//                             />
//                         )}
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             minLength={6}
//                             className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
//                         />
//                         {mode === "signup" && (
//                             <input
//                                 type="password"
//                                 placeholder="Confirm password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 required
//                                 minLength={6}
//                                 className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
//                             />
//                         )}

//                         {error && (
//                             <p className='text-sm text-red-600'>{error}</p>
//                         )}

//                         <motion.button
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             type="submit"
//                             disabled={loading}
//                             className='w-full px-5 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60'
//                         >
//                             {loading
//                                 ? "Please wait..."
//                                 : mode === "login"
//                                     ? "Login"
//                                     : "Create account"}
//                         </motion.button>
//                     </motion.form>
//                 </AnimatePresence>

//                 <p className='text-center text-sm text-zinc-500 mt-6'>
//                     {mode === "login" ? (
//                         <>
//                             Don&apos;t have an account?{" "}
//                             <button className='text-zinc-900 font-medium hover:underline' onClick={() => switchMode("signup")}>
//                                 Sign up
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             Already have an account?{" "}
//                             <button className='text-zinc-900 font-medium hover:underline' onClick={() => switchMode("login")}>
//                                 Login
//                             </button>
//                         </>
//                     )}
//                 </p>
//             </motion.div>
//         </div>
//     )
// }

// export default AuthClient




'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import axios from 'axios'
import { useRouter } from 'next/navigation'

function AuthClient() {
    const router = useRouter()
    const [mode, setMode] = useState<"login" | "signup">("login")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const resetFields = () => {
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setError("")
    }

    const switchMode = (next: "login" | "signup") => {
        setMode(next)
        resetFields()
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (mode === "signup" && password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        setLoading(true)
        try {
            const url = mode === "login" ? "/api/auth/login" : "/api/auth/signup"
            const payload =
                mode === "login"
                    ? { email, password }
                    : { name, email, password, confirmPassword }

            await axios.post(url, payload)
            router.push("/dashboard")
            router.refresh()
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen bg-slate-950 flex items-center justify-center px-4 sm:px-6'>
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.03) 0%, transparent 60%),
                                     radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.02) 0%, transparent 60%)`,
                }} />
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }} />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8 relative z-10'
            >
                {/* Logo */}
                <div className='text-center mb-8'>
                    <div className='text-lg font-semibold tracking-tight text-white'>
                        Support <span className='text-amber-400'>AI</span>
                    </div>
                    <h1 className='text-2xl font-bold mt-4 text-white'>
                        {mode === "login" ? "Welcome back" : "Create your account"}
                    </h1>
                    <p className='text-gray-400 mt-1 text-sm'>
                        {mode === "login"
                            ? "Log in to manage your chatbot"
                            : "Sign up to start building your AI chatbot"}
                    </p>
                </div>

                {/* Mode Toggle */}
                <div className='flex bg-slate-700/50 rounded-xl p-1 mb-8 border border-white/5'>
                    <button
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
                            mode === "login" 
                                ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black shadow-lg shadow-amber-400/10" 
                                : "text-gray-400 hover:text-white"
                        }`}
                        onClick={() => switchMode("login")}
                        type="button"
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
                            mode === "signup" 
                                ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black shadow-lg shadow-amber-400/10" 
                                : "text-gray-400 hover:text-white"
                        }`}
                        onClick={() => switchMode("signup")}
                        type="button"
                    >
                        Sign Up
                    </button>
                </div>

                {/* Form */}
                <AnimatePresence mode="wait">
                    <motion.form
                        key={mode}
                        initial={{ opacity: 0, x: mode === "login" ? -12 : 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: mode === "login" ? 12 : -12 }}
                        transition={{ duration: 0.2 }}
                        onSubmit={handleSubmit}
                        className='space-y-4'
                    >
                        {mode === "signup" && (
                            <input
                                type="text"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='w-full rounded-xl bg-slate-700/50 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition'
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full rounded-xl bg-slate-700/50 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition'
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                            className='w-full rounded-xl bg-slate-700/50 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition'
                        />
                        {mode === "signup" && (
                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength={6}
                                className='w-full rounded-xl bg-slate-700/50 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition'
                            />
                        )}

                        {error && (
                            <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2'
                            >
                                {error}
                            </motion.p>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className='w-full px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-semibold text-sm hover:shadow-lg hover:shadow-amber-400/25 transition disabled:opacity-60'
                        >
                            {loading
                                ? "Please wait..."
                                : mode === "login"
                                    ? "Login"
                                    : "Create account"}
                        </motion.button>
                    </motion.form>
                </AnimatePresence>

                {/* Footer Link */}
                <p className='text-center text-sm text-gray-400 mt-6'>
                    {mode === "login" ? (
                        <>
                            Don&apos;t have an account?{" "}
                            <button 
                                className='text-amber-400 font-medium hover:text-amber-300 transition' 
                                onClick={() => switchMode("signup")}
                            >
                                Sign up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button 
                                className='text-amber-400 font-medium hover:text-amber-300 transition' 
                                onClick={() => switchMode("login")}
                            >
                                Login
                            </button>
                        </>
                    )}
                </p>

                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl" />
            </motion.div>
        </div>
    )
}

export default AuthClient;
