// 'use client'
// import { navigate } from 'next/dist/client/components/segment-cache/navigation'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'
// import { motion } from "motion/react"
// function EmbedClient({ ownerId }: { ownerId: string }) {
//     const navigate = useRouter()
//     const [copied, setCopied] = useState(false)
//     const embedCode = `<script 
//     src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js" 
//     data-owner-id="${ownerId}">
// </script> `
//     const copyCode = () => {
//         navigator.clipboard.writeText(embedCode)
//         setCopied(true)
//         setTimeout(() => setCopied(false), 2000)
//     }
//     return (
//         <div className='min-h-screen bg-zinc-50 text-zinc-900'>
//             <div className='sticky top-0 z-40 bg-white border-b border-zinc-200'>
//                 <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
//                     <div className='text-lg font-semibold cursor-pointer' onClick={() => navigate.push("/")}>Support<span className='text-zinc-400'>AI</span></div>
//                     <button className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition' onClick={() => navigate.push("/dashboard")}>Back to Dashboard</button>
//                 </div>
//             </div>

//             <div className='flex justify-center px-4 py-14'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="w-full max-w-4xl  bg-white rounded-2xl shadow-xl p-10"
//                 >
//                     <h1 className='text-2xl font-semibold mb-2'>Embed ChatBot</h1>
//                     <p>Copy and paste this code before <code>&lt;/body&gt;</code></p>
//                     <div className='relative bg-zinc-900 text-zinc-100 rounded-xl p-5 text-sm font-mono mb-10'>
//                         <pre className='overflow-x-auto'>{embedCode}</pre>
//                         <button className='absolute top-3 right-3 bg-white text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition' onClick={copyCode}>
//                             {copied ? "Copied ✓" : "Copy"}
//                         </button>
//                     </div>

//                     <ol className='space-y-3  text-sm text-zinc-600 list-decimal list-inside'>
//                         <li>Copy the embed script</li>
//                         <li>Paste it before the closing body tag</li>
//                         <li>Reload your website</li>
//                     </ol>

//                     <div className='mt-14'>
//                         <h1 className='text-lg font-medium mb-2'>Live Preview</h1>
//                         <p className='text-sm text-zinc-500 mb-6'>This is how the chatbot will appear on your website</p>

//                         <div className='rounded-xl border border-zinc-300 bg-white shadow-md overflow-hidden'>
//                             <div className='flex items-center gap-2 px-4 h-9 bg-zinc-100 border-b border-zinc-200'>
//                                 <span className='w-2.5 h-2.5 rounded-full bg-red-400' />
//                                 <span className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
//                                 <span className='w-2.5 h-2.5 rounded-full bg-green-400' />
//                                 <span className='ml-4 text-xs text-zinc-500'>Your-website.com</span>
//                             </div>
//                             <div className='relative h-64 sm:h-72 p-6 text-zinc-400 text-sm'>

//                                 Your website goes here



//                                 <div className='absolute bottom-24 right-6 w-64 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden'>
//                                     <div className='bg-black text-white text-xs px-3 py-2 flex justify-between items-center'>
//                                         <span>Customer Support</span>
//                                         <span>╳</span>
//                                     </div>

//                                     <div className='p-3 space-y-2 bg-zinc-50'>
//                                         <div className='bg-zinc-200 text-zinc-800 text-xs px-3 py-2 rounded-lg w-fit'>hi! how can I help you?</div>
//                                         <div className='bg-black text-white text-xs px-3 py-2 rounded-lg ml-auto w-fit'>what is the return policy?</div>
//                                     </div>
//                                 </div>

//                                 <motion.div
//                                     animate={{ y: [0, -8, 0] }}
//                                     transition={{ repeat: Infinity, duration: 3 }}
//                                     className="
//       absolute bottom-6 right-6
//       w-14 h-14 rounded-full
//       bg-black text-white
//       flex items-center justify-center
//       shadow-2xl
//       cursor-pointer
//     "
//                                 >
//                                     🗨️
//                                 </motion.div>



//                             </div>
//                         </div>

//                     </div>




//                 </motion.div>
//             </div>


//         </div>
//     )
// }

// export default EmbedClient



'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { motion } from "motion/react"

function EmbedClient({ ownerId }: { ownerId: string }) {
    const navigate = useRouter()
    const [copied, setCopied] = useState(false)
    
    const embedCode = `<script 
    src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js" 
    data-owner-id="${ownerId}">
</script>`
    
    const copyCode = () => {
        navigator.clipboard.writeText(embedCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
    
    return (
        <div className='min-h-screen bg-slate-950 text-white'>
            {/* Navbar */}
            <div className='fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10'>
                <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                    <div 
                        className='text-lg font-semibold cursor-pointer text-white hover:text-amber-400 transition' 
                        onClick={() => navigate.push("/")}
                    >
                        Support <span className='text-amber-400'>AI</span>
                    </div>
                    <button 
                        className='px-4 py-2 rounded-lg border border-white/20 text-sm text-white hover:bg-white/5 hover:border-amber-400/30 transition' 
                        onClick={() => navigate.push("/dashboard")}
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className='flex justify-center px-4 pt-24 pb-14'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-10"
                >
                    {/* Header */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3.5 py-1.5 mb-4">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                            <span className="text-[11px] text-amber-400/80 font-medium tracking-[0.15em] uppercase">Embed</span>
                        </div>
                        <h1 className='text-2xl font-bold text-white'>Embed ChatBot</h1>
                        <p className='text-gray-400 text-sm mt-1'>Copy and paste this code before <code className='bg-slate-700/50 px-2 py-0.5 rounded text-amber-400 text-xs'>&lt;/body&gt;</code></p>
                    </div>

                    {/* Code Block */}
                    <div className='relative bg-slate-900/80 border border-white/10 rounded-xl p-4 sm:p-5 text-sm font-mono mb-8'>
                        <pre className='overflow-x-auto text-gray-300 whitespace-pre-wrap break-all'>{embedCode}</pre>
                        <button 
                            className='absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-yellow-300 text-black text-xs font-medium px-3 py-1.5 rounded-lg hover:shadow-lg hover:shadow-amber-400/25 transition' 
                            onClick={copyCode}
                        >
                            {copied ? "✓ Copied" : "Copy"}
                        </button>
                    </div>

                    {/* Steps */}
                    <div className='mb-8'>
                        <h3 className='text-sm font-semibold text-white mb-3'>How to embed:</h3>
                        <ol className='space-y-2 text-sm text-gray-400 list-decimal list-inside'>
                            <li>Copy the embed script above</li>
                            <li>Paste it before the closing <code className='bg-slate-700/50 px-2 py-0.5 rounded text-amber-400 text-xs'>&lt;/body&gt;</code> tag</li>
                            <li>Reload your website to see the chatbot</li>
                        </ol>
                    </div>

                    {/* Live Preview */}
                    <div>
                        <h3 className='text-lg font-semibold text-white mb-2'>Live Preview</h3>
                        <p className='text-sm text-gray-400 mb-4'>This is how the chatbot will appear on your website</p>

                        <div className='rounded-xl border border-white/10 bg-slate-900/50 shadow-xl overflow-hidden'>
                            {/* Browser Header */}
                            <div className='flex items-center gap-2 px-4 h-9 bg-slate-800/50 border-b border-white/5'>
                                <span className='w-2.5 h-2.5 rounded-full bg-red-400' />
                                <span className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
                                <span className='w-2.5 h-2.5 rounded-full bg-green-400' />
                                <span className='ml-4 text-xs text-gray-500'>your-website.com</span>
                            </div>
                            
                            {/* Browser Content */}
                            <div className='relative h-64 sm:h-72 p-6 text-gray-500 text-sm bg-slate-950/50'>
                                {/* Website Content Placeholder */}
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-700/50 flex items-center justify-center">
                                            <span className="text-2xl">🌐</span>
                                        </div>
                                        <p className="text-gray-500 text-xs">Your website content appears here</p>
                                    </div>
                                </div>

                                {/* Chat Preview */}
                                <div className='absolute bottom-24 right-6 w-64 bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 overflow-hidden'>
                                    {/* Chat Header */}
                                    <div className='bg-gradient-to-r from-amber-400/20 to-yellow-300/10 text-white text-xs px-3 py-2 flex justify-between items-center border-b border-white/5'>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                            <span>Customer Support</span>
                                        </div>
                                        <span className="text-gray-500 cursor-pointer hover:text-white transition">✕</span>
                                    </div>

                                    {/* Chat Messages */}
                                    <div className='p-3 space-y-2 bg-slate-900/50'>
                                        <div className='bg-slate-700/50 text-gray-200 text-xs px-3 py-2 rounded-lg w-fit border border-white/5'>
                                            Hi! How can I help you?
                                        </div>
                                        <div className='bg-gradient-to-r from-amber-400 to-yellow-300 text-black text-xs px-3 py-2 rounded-lg ml-auto w-fit shadow-lg shadow-amber-400/10'>
                                            What is the return policy?
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Button */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-black flex items-center justify-center shadow-2xl shadow-amber-400/20 cursor-pointer hover:scale-105 transition"
                                >
                                    🗨️
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl" />
                    <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl" />
                </motion.div>
            </div>
        </div>
    )
}

export default EmbedClient;
