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
        <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 flex items-center justify-center px-6'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full max-w-md bg-white rounded-2xl shadow-xl border border-zinc-200 p-8'
            >
                <div className='text-center mb-8'>
                    <div className='text-lg font-semibold tracking-tight'>
                        Support <span className='text-zinc-400'>AI</span>
                    </div>
                    <h1 className='text-2xl font-semibold mt-4'>
                        {mode === "login" ? "Welcome back" : "Create your account"}
                    </h1>
                    <p className='text-zinc-500 mt-1 text-sm'>
                        {mode === "login"
                            ? "Log in to manage your chatbot"
                            : "Sign up to start building your AI chatbot"}
                    </p>
                </div>

                <div className='flex bg-zinc-100 rounded-xl p-1 mb-8'>
                    <button
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${mode === "login" ? "bg-white shadow text-zinc-900" : "text-zinc-500"
                            }`}
                        onClick={() => switchMode("login")}
                        type="button"
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${mode === "signup" ? "bg-white shadow text-zinc-900" : "text-zinc-500"
                            }`}
                        onClick={() => switchMode("signup")}
                        type="button"
                    >
                        Sign Up
                    </button>
                </div>

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
                                className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                            className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
                        />
                        {mode === "signup" && (
                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength={6}
                                className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80'
                            />
                        )}

                        {error && (
                            <p className='text-sm text-red-600'>{error}</p>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className='w-full px-5 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60'
                        >
                            {loading
                                ? "Please wait..."
                                : mode === "login"
                                    ? "Login"
                                    : "Create account"}
                        </motion.button>
                    </motion.form>
                </AnimatePresence>

                <p className='text-center text-sm text-zinc-500 mt-6'>
                    {mode === "login" ? (
                        <>
                            Don&apos;t have an account?{" "}
                            <button className='text-zinc-900 font-medium hover:underline' onClick={() => switchMode("signup")}>
                                Sign up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button className='text-zinc-900 font-medium hover:underline' onClick={() => switchMode("login")}>
                                Login
                            </button>
                        </>
                    )}
                </p>
            </motion.div>
        </div>
    )
}

export default AuthClient
