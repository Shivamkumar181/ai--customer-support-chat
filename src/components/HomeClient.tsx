// 'use client'
// import React, { useEffect, useRef, useState } from 'react'
// import { AnimatePresence, motion } from "motion/react"
// import axios from 'axios'
// import { useRouter } from 'next/navigation'


// function HomeClient({ email }: { email: string }) {

//     const [loading,setLoading]=useState(false)
//     const navigate=useRouter()
//     const handleLogin = () => {
//         setLoading(true)
//         navigate.push("/login")
//     }
//     const firstLetter = email ? email[0].toUpperCase() : ""
//     const [open, setOpen] = useState(false)
//     const popupRef = useRef<HTMLDivElement>(null)
//     useEffect(() => {
//         const handler = (e: MouseEvent) => {

//             if (popupRef.current && !popupRef.current.contains(e.target as Node))
//                 setOpen(false)
//         }
//         document.addEventListener("mousedown", handler)
//         return () => document.removeEventListener("mousedown", handler)
//     }, [])
//     const features = [
//         {
//             title: "Plug & Play",
//             desc: "Add the chatbot to your site with a single script tag."
//         },
//         {
//             title: "Admin Controlled",
//             desc: "You control exactly what the AI knows and answers."
//         },
//         {
//             title: "Always Online",
//             desc: "Your customers get instant support 24/7."
//         }
//     ]
//     const handleLogOut=async ()=>{
//         try {
//             const result=await axios.get("/api/auth/logout")
//             window.location.href = "/"
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden'>
//             <motion.div
//                 initial={{ y: -50 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className='fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200'
//             >
//                 <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
//                     <div className='text-lg font-semibold tracking-tight'>Support <span className='text-zinc-400'>AI</span></div>
//                     {email ? <div className='relative' ref={popupRef}>
//                         <button className='w-10 h-10 rounded-full
//                   bg-black text-white
//                   flex items-center justify-center
//                   font-semibold
//                   hover:scale-105 transition'
//                             onClick={() => setOpen(!open)}
//                         >{firstLetter}</button>
//                         <AnimatePresence>
//                             {open && (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: -6 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: -6 }}
//                                     className='absolute right-0 mt-3 w-44
//                       bg-white rounded-xl
//                       shadow-xl border border-zinc-200
//                       overflow-hidden'
//                                 >
//                                     <button className='w-full text-left px-4 py-3 text-sm hover:bg-zinc-100' onClick={()=>navigate.push("/dashboard")}>Dashboard</button>
//                                     <button className='block px-4 py-3 text-sm text-red-600 hover:bg-zinc-100' onClick={handleLogOut}>Logout</button>
//                                 </motion.div>)}
//                         </AnimatePresence>



//                     </div> : <button
//                         className=' px-5 py-2 rounded-full
//                 bg-black text-white text-sm font-medium
//                 hover:bg-zinc-800 transition
//                 disabled:opacity-60
//                 flex items-center gap-2'
//                         onClick={handleLogin}
//                         disabled={loading}
//                     >{loading?"Loading...":"Login"}
//                     </button>}

//                 </div>
//             </motion.div>
//             <section className='pt-36 pb-28 px-6'>
//                 <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7 }}
//                     >
//                         <h1 className='text-4xl md:text-5xl font-semibold leading-tight'>
//                             AI Customer Support <br />
//                             Built for Modern Websites
//                         </h1>
//                         <p className='mt-6 text-lg text-zinc-600 max-w-xl'>
//                             Add a powerful AI chatbot to your website in minutes.
//                             Let your customers get instant answers using your own business knowledge.
//                         </p>
//                         <div className='mt-10 flex gap-4'>

//                             {email ? <button className=' px-7 py-3 rounded-xl
//                     bg-black text-white font-medium
//                     hover:bg-zinc-800 transition
//                     disabled:opacity-60' onClick={()=>navigate.push("/dashboard")}>Go to Dashboard</button> : <button className=' px-7 py-3 rounded-xl
//                     bg-black text-white font-medium
//                     hover:bg-zinc-800 transition
//                     disabled:opacity-60'
//                                 onClick={handleLogin}
//                             >Get Started</button>}

//                             <a href='#feature' className=' px-7 py-3 rounded-xl
//                   border border-zinc-300
//                   text-zinc-700
//                   hover:bg-zinc-100 transition'>Learn More</a>
//                         </div>

//                     </motion.div>
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.7, delay: 0.2 }}
//                         className="relative"
//                     >
//                         <div className='rounded-2xl bg-white shadow-2xl border border-zinc-200 p-6 '>
//                             <div className='text-sm text-zinc-500 mb-3'>Live Chat Preview</div>
//                             <div className='space-y-3'>
//                                 <div className='bg-black text-white rounded-lg px-4 py-2 text-sm ml-auto w-fit '> Do you offer cash on delivery?</div>
//                                 <div className='bg-zinc-100 rounded-lg px-4 py-2 text-sm w-fit '>yes,Cash On Delivery is available.</div>

//                             </div>
//                             <motion.div
//                                 animate={{ y: [0, -12, 0] }}
//                                 transition={{ repeat: Infinity, duration: 3 }}
//                                 className="
//                 absolute -bottom-6 -right-6
//                 w-14 h-14 rounded-full
//                 bg-black text-white
//                 flex items-center justify-center
//                 shadow-xl
//               "
//                             >
//                                 🗨️
//                             </motion.div>
//                         </div>

//                     </motion.div>
//                 </div>
//             </section>
//             <section
//                 id='feature'
//                 className="bg-zinc-50 py-28 px-6 border-t border-zinc-200"
//             >
//                 <div className='max-w-6xl mx-auto'>
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: false }}
//                         transition={{ duration: 0.5 }}
//                         className='text-3xl font-semibold text-center'
//                     >
//                         Why Businesses Choose SupportAI
//                     </motion.h2>

//                     <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
//                         {features.map((f, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1 }}
//                                 viewport={{ once: false }}
//                                 className="
//                   bg-white rounded-2xl
//                   p-8 shadow-lg
//                   border border-zinc-200
//                 "
//                             >
//                      <h1 className='text-lg font-medium'>{f.title}</h1>
//                      <p className='mt-3 text-zinc-600 text-sm'>{f.desc}</p>
//                             </motion.div>
//                         ))}
//                     </div>


//                 </div>
//             </section>
//             <footer className='py-10 text-center text-sm text-zinc-500'>
//                 &copy; {new Date().getFullYear()} SupportAI. All rights reserved.
//             </footer>
//         </div>
//     )
// }

// export default HomeClient


'use client'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import axios from 'axios'
import { useRouter } from 'next/navigation'

function HomeClient({ email }: { email: string }) {

    const [loading,setLoading]=useState(false)
    const navigate=useRouter()
    const handleLogin = () => {
        setLoading(true)
        navigate.push("/login")
    }
    const firstLetter = email ? email[0].toUpperCase() : ""
    const [open, setOpen] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node))
                setOpen(false)
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])
    
    const features = [
        {
            title: "Plug & Play",
            desc: "Add the chatbot to your site with a single script tag."
        },
        {
            title: "Admin Controlled",
            desc: "You control exactly what the AI knows and answers."
        },
        {
            title: "Always Online",
            desc: "Your customers get instant support 24/7."
        }
    ]
    
    const handleLogOut = async ()=>{
        try {
            const result = await axios.get("/api/auth/logout")
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='min-h-screen bg-slate-950 text-white overflow-x-hidden'>
            {/* Navbar */}
            <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className='fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10'
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between'>
                    <div className='text-base sm:text-lg font-semibold tracking-tight'>
                        Support <span className='text-amber-400'>AI</span>
                    </div>
                    {email ? (
                        <div className='relative' ref={popupRef}>
                            <button 
                                className='w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-black flex items-center justify-center font-semibold hover:scale-105 transition shadow-lg shadow-amber-400/20 text-sm sm:text-base'
                                onClick={() => setOpen(!open)}
                            >
                                {firstLetter}
                            </button>
                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        className='absolute right-0 mt-2 sm:mt-3 w-40 sm:w-44 bg-slate-800 rounded-xl shadow-xl border border-white/10 overflow-hidden'
                                    >
                                        <button 
                                            className='w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white hover:bg-white/5 transition'
                                            onClick={() => navigate.push("/dashboard")}
                                        >
                                            Dashboard
                                        </button>
                                        <button 
                                            className='block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-amber-400 hover:bg-white/5 transition'
                                            onClick={handleLogOut}
                                        >
                                            Logout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <button
                            className='px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-black text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-amber-400/25 transition disabled:opacity-60 flex items-center gap-1.5 sm:gap-2'
                            onClick={handleLogin}
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>
                    )}
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className='pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1.5 mb-4 sm:mb-5">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                            <span className="text-[10px] sm:text-[11px] text-amber-400/80 font-medium tracking-[0.15em] uppercase">AI Powered</span>
                        </div>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
                            AI Customer Support <br />
                            <span className='bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent'>Built for Modern Websites</span>
                        </h1>
                        <p className='mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed'>
                            Add a powerful AI chatbot to your website in minutes.
                            Let your customers get instant answers using your own business knowledge.
                        </p>
                        <div className='mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4'>
                            {email ? (
                                <button 
                                    className='px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-amber-400/25 transition disabled:opacity-60'
                                    onClick={() => navigate.push("/dashboard")}
                                >
                                    Go to Dashboard
                                </button>
                            ) : (
                                <button 
                                    className='px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-amber-400/25 transition disabled:opacity-60'
                                    onClick={handleLogin}
                                >
                                    Get Started
                                </button>
                            )}
                            <a 
                                href='#feature' 
                                className='px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl border border-white/20 text-white text-sm sm:text-base hover:bg-white/5 transition'
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className='rounded-2xl bg-slate-800/50 backdrop-blur-sm shadow-2xl border border-white/10 p-4 sm:p-6'>
                            <div className='flex items-center gap-2 mb-3 sm:mb-4'>
                                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full animate-pulse" />
                                <span className='text-xs sm:text-sm text-gray-400'>Live Chat Preview</span>
                            </div>
                            <div className='space-y-2 sm:space-y-3'>
                                <div className='bg-gradient-to-r from-amber-400 to-yellow-300 text-black rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm ml-auto w-fit shadow-lg shadow-amber-400/10'>
                                    Do you offer cash on delivery?
                                </div>
                                <div className='bg-slate-700/50 border border-white/10 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm w-fit text-white'>
                                    yes, Cash On Delivery is available.
                                </div>
                            </div>
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-black flex items-center justify-center shadow-xl shadow-amber-400/20 text-xl sm:text-2xl"
                            >
                                🗨️
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id='feature'
                className="bg-slate-900/50 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 border-t border-white/5"
            >
                <div className='max-w-6xl mx-auto'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className='text-2xl sm:text-3xl font-bold text-center'
                    >
                        Why Businesses Choose <span className='text-amber-400'>SupportAI</span>
                    </motion.h2>

                    <div className='mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                        {features.map((f, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: false }}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/5"
                            >
                                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-amber-400/10 flex items-center justify-center mb-3 sm:mb-4">
                                    <span className="text-amber-400 text-lg sm:text-xl">✦</span>
                                </div>
                                <h3 className='text-base sm:text-lg font-semibold text-white'>{f.title}</h3>
                                <p className='mt-2 sm:mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed'>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='py-8 sm:py-10 text-center text-xs sm:text-sm text-gray-500 border-t border-white/5'>
                &copy; {new Date().getFullYear()} SupportAI. All rights reserved.
            </footer>
        </div>
    )
}

export default HomeClient
