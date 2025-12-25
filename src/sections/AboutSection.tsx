import { useState } from "react";
import logo from "../assets/logo.png";
import dexscreenerIcon from "../assets/dexscreener.svg";
import { Reveal } from "../components/utils/Reveal";

export const AboutSection = () => {
    const [copied, setCopied] = useState(false);
    const CA = "2iRcDWDrTJVpbDzjgmsAL7WatTQZEg9xkB3vDGzGpump"; // Placeholder

    const handleCopy = () => {
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="about" className="bg-[#0B0E23] text-white pt-32 pb-20 relative mt-20">
            {/* Curved Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[98%]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[100px] w-full">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0B0E23]"></path>
                </svg>
            </div>

            <Reveal>
                <div className="max-w-6xl mx-auto px-6 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative group w-full max-w-sm mx-auto">
                            {/* Main Image Container - Neo Brutalist Style */}
                            <div className="relative bg-white border-2 border-[#1A1B4B] p-3 rounded-xl shadow-[6px_6px_0px_0px_rgba(11,14,35,1)] hover:shadow-[10px_10px_0px_0px_#3B82F6] hover:-translate-y-2 transition-all duration-300">
                                <div className="relative rounded-lg overflow-hidden border border-[#1A1B4B]/20">
                                    <img
                                        src={logo}
                                        alt="Kevin Logo"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>

                                {/* Floating Info Card - Neo Brutalist Style */}
                                <div className="absolute -bottom-6 left-6 right-6 z-20">
                                    <div className="bg-white border-2 border-[#1A1B4B] p-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(11,14,35,1)] flex items-center gap-3">
                                        {/* Pink K Icon */}
                                        <div className="w-10 h-10 rounded-full bg-[#E056FD] border border-black flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            K
                                        </div>

                                        {/* Text Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[#1A1B4B] font-bold text-base leading-tight font-mono uppercase tracking-tight truncate">The Origin</h4>
                                            <p className="text-gray-500 text-xs font-bold truncate">@KevinHomeAlone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">Alone at Home, Under Observation</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Inspired by the moment when a house goes quiet and a child is left to think, prepare, and adapt. This project reinterprets that state not as comedy, but as awareness. The character is alone, but not helpless. Festive elements become signals, tools become symbols, and every pose feels like a recorded decision.
                                </p>
                            </div>

                            {/* Socials & CA */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                {/* CA Box */}
                                <div className="flex-1 bg-[#1A1B4B] border border-white/20 rounded-xl p-2 flex items-center justify-between gap-3 shadow-lg">
                                    <div className="px-3 min-w-0">
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">CA (Pump.fun)</p>
                                        <p className="text-sm text-white font-mono truncate">{CA}</p>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="bg-[#3B82F6] hover:bg-[#2563EB] text-white p-2 rounded-lg transition-colors flex items-center justify-center shrink-0"
                                    >
                                        {copied ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                {/* Social Icons */}
                                <div className="flex items-center gap-3">
                                    <a href="https://x.com/i/communities/2004125957670703260" className="bg-white text-black p-3 rounded-xl hover:bg-gray-200 transition-colors shadow-lg border border-transparent hover:border-black/10">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://pump.fun/coin/2iRcDWDrTJVpbDzjgmsAL7WatTQZEg9xkB3vDGzGpump" className="bg-[#1A1B4B] border border-white/20 p-3 rounded-xl hover:bg-[#0B0E23] transition-colors shadow-lg flex items-center justify-center">
                                        <img src={dexscreenerIcon} alt="DexScreener" className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
