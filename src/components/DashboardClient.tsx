// 'use client'
// import React, { useEffect, useState } from 'react'
// import { motion } from "motion/react"
// import { useRouter } from 'next/navigation'
// import axios from 'axios'
// function DashboardClient({ ownerId }: { ownerId: string }) {
//     const navigate = useRouter()
//     const [businessName, setBusinessName] = useState("")
//     const [supportEmail, setSupportEmail] = useState("")
//     const [knowledge, setKnowledge] = useState("")
//     const [loading, setLoading] = useState(false)
//     const [saved, setSaved] = useState(false)
//     const handleSettings = async () => {
//         setLoading(true)
//         try {
//             const result = await axios.post("/api/settings", { ownerId, businessName, supportEmail, knowledge })
//             console.log(result.data)
//             setLoading(false)
//             setSaved(true)
//             setTimeout(() => setSaved(false), 3000)
//         } catch (error) {
//             console.log(error)
//             setLoading(false)
//         }
//     }
//      useEffect(()=>{
// if(ownerId){
//     const handleGetDetails=async ()=>{
//        try {
//             const result = await axios.post("/api/settings/get", { ownerId })
//            setBusinessName(result.data.businessName)
//             setSupportEmail(result.data.supportEmail)
//              setKnowledge(result.data.knowledge)

            
//         } catch (error) {
//             console.log(error)
           
//         }
//     }

//     handleGetDetails()
// }

//      },[ownerId])
//     return (
//         <div className='min-h-screen bg-zinc-50 text-zinc-900'>
//             <motion.div
//                 initial={{ y: -50 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className='fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200'
//             >
//                 <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
//                     <div className='text-lg font-semibold tracking-tight' onClick={() => navigate.push("/")}>Support <span className='text-zinc-400'>AI</span></div>
//                     <button className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition' onClick={()=>navigate.push("/embed")}>Embed ChatBot</button>
//                 </div>
//             </motion.div>

//             <div className='flex justify-center px-4 py-14 mt-20'>
//                 <motion.div
//                     className='w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10'

//                 >
//                     <div className='mb-10'>
//                         <h1 className='text-2xl font-semibold'>ChatBot Settings</h1>
//                         <p className='text-zinc-500 mt-1'> Manage your AI chatbot knowledge and business details</p>
//                     </div>

//                     <div className='mb-10'>
//                         <h1 className='text-lg font-medium mb-4'>Business Details</h1>
//                         <div className='space-y-4'>
//                             <input type="text" className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' placeholder='Business Name' value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
//                             <input type="text" className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' placeholder='Support Email' value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className='mb-10'>
//                         <h1 className='text-lg font-medium mb-4'>Knowledge Base</h1>
//                         <p className='text-sm text-zinc-500 mb-4'>Add FAQs, policies, delivery info, refunds, etc.</p>
//                         <div className='space-y-4'>
//                             <textarea className='w-full h-54 rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' placeholder={`Example:
// • Refund policy: 7 days return available
// • Delivery time: 3–5 working days
// • Cash on Delivery available
// • Support hours`} onChange={(e) => setKnowledge(e.target.value)} value={knowledge} />
//                         </div>
//                     </div>

//                     <div className='flex items-center gap-5'>
//                         <motion.button
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.97 }}
//                             disabled={loading}
//                             onClick={handleSettings}
//                             className="px-7 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60"
//                         >
//                             {loading ? "Saving..." : "Save"}

//                         </motion.button>
//                         {saved && <motion.span
//                             initial={{ opacity: 0, y: 6 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="text-sm font-medium text-emerald-600"
//                         >
//                             ✓ Settings saved
//                         </motion.span>}

//                     </div>



//                 </motion.div>
//             </div>

//         </div>
//     )
// }

// export default DashboardClient









'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'
import axios from 'axios'

function DashboardClient({ ownerId }: { ownerId: string }) {
    const navigate = useRouter()
    const [businessName, setBusinessName] = useState("")
    const [supportEmail, setSupportEmail] = useState("")
    const [knowledge, setKnowledge] = useState("")
    const [loading, setLoading] = useState(false)
    const [saved, setSaved] = useState(false)
    
    const handleSettings = async () => {
        setLoading(true)
        try {
            const result = await axios.post("/api/settings", { ownerId, businessName, supportEmail, knowledge })
            console.log(result.data)
            setLoading(false)
            setSaved(true)
            setTimeout(() => setSaved(false), 3000)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    
    useEffect(() => {
        if (ownerId) {
            const handleGetDetails = async () => {
                try {
                    const result = await axios.post("/api/settings/get", { ownerId })
                    setBusinessName(result.data.businessName)
                    setSupportEmail(result.data.supportEmail)
                    setKnowledge(result.data.knowledge)
                } catch (error) {
                    console.log(error)
                }
            }
            handleGetDetails()
        }
    }, [ownerId])

    return (
        <div className='min-h-screen bg-slate-950 text-white'>
            {/* Navbar */}
            <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className='fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10'
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
                    <div 
                        className='text-base sm:text-lg font-semibold tracking-tight text-white cursor-pointer hover:text-amber-400 transition' 
                        onClick={() => navigate.push("/")}
                    >
                        Support <span className='text-amber-400'>AI</span>
                    </div>
                    <button 
                        className='px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/20 text-xs sm:text-sm text-white hover:bg-white/5 hover:border-amber-400/30 transition' 
                        onClick={() => navigate.push("/embed")}
                    >
                        Embed ChatBot
                    </button>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className='flex justify-center px-3 sm:px-4 py-10 sm:py-14 mt-16 sm:mt-20'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full max-w-3xl bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-4 sm:p-6 md:p-10 relative'
                >
                    {/* Header */}
                    <div className='mb-6 sm:mb-10'>
                        <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-3 sm:mb-4">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                            <span className="text-[10px] sm:text-[11px] text-amber-400/80 font-medium tracking-[0.15em] uppercase">Dashboard</span>
                        </div>
                        <h1 className='text-xl sm:text-2xl font-bold text-white'>ChatBot Settings</h1>
                        <p className='text-gray-400 mt-1 text-xs sm:text-sm'>Manage your AI chatbot knowledge and business details</p>
                    </div>

                    {/* Business Details */}
                    <div className='mb-6 sm:mb-10'>
                        <h2 className='text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4'>Business Details</h2>
                        <div className='space-y-3 sm:space-y-4'>
                            <input 
                                type="text" 
                                className='w-full rounded-xl bg-slate-700/50 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition' 
                                placeholder='Business Name' 
                                value={businessName} 
                                onChange={(e) => setBusinessName(e.target.value)} 
                            />
                            <input 
                                type="email" 
                                className='w-full rounded-xl bg-slate-700/50 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition' 
                                placeholder='Support Email' 
                                value={supportEmail} 
                                onChange={(e) => setSupportEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    {/* Knowledge Base */}
                    <div className='mb-6 sm:mb-10'>
                        <h2 className='text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4'>Knowledge Base</h2>
                        <p className='text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4'>Add FAQs, policies, delivery info, refunds, etc.</p>
                        <div className='space-y-4'>
                            <textarea 
                                className='w-full min-h-[150px] sm:min-h-[200px] rounded-xl bg-slate-700/50 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition resize-y' 
                                placeholder={`Example:
• Refund policy: 7 days return available
• Delivery time: 3–5 working days
• Cash on Delivery available
• Support hours: 24/7`} 
                                onChange={(e) => setKnowledge(e.target.value)} 
                                value={knowledge} 
                                rows={5}
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className='flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4'>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            disabled={loading}
                            onClick={handleSettings}
                            className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-amber-400/25 transition disabled:opacity-60"
                        >
                            {loading ? "Saving..." : "Save Settings"}
                        </motion.button>
                        {saved && (
                            <motion.span
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs sm:text-sm font-medium text-emerald-400"
                            >
                                ✓ Settings saved successfully
                            </motion.span>
                        )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-20 sm:w-24 h-20 sm:h-24 bg-amber-400/5 rounded-full blur-2xl" />
                    <div className="absolute -bottom-12 -left-12 w-20 sm:w-24 h-20 sm:h-24 bg-amber-400/5 rounded-full blur-2xl" />
                </motion.div>
            </div>
        </div>
    )
}

export default DashboardClient
