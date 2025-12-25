import { StatsItem } from "../components/ui/StatsItem";

export const AboutSection = () => (
    <section className="bg-[#0B0E23] text-white pt-32 pb-20 relative mt-20">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[98%]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[100px] w-full">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0B0E23]"></path>
            </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* About Image / Feature */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-[#1A1B4B] to-[#0f1129] border border-white/10 p-6 rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                        {/* Abstract Art Representation */}
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full blur-sm animate-pulse"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        {/* <img src="/api/placeholder/400/320" alt="About Visual" className="absolute inset-0 w-full h-full object-cover opacity-0" /> */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                                <div>
                                    <p className="text-sm font-bold">The Origin Story</p>
                                    <p className="text-xs text-gray-400">@KevinHomeAlone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Content */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Kevin Protocol</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            The infamous Kevin Home Alone project started as a mere experiment in the void. Now, it evolves into a fully autonomous digital entity observing holiday protocols.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-blue-400 mb-1">100%</h3>
                            <p className="text-sm text-gray-400">On-Chain Data</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-purple-400 mb-1">2.4s</h3>
                            <p className="text-sm text-gray-400">Transaction Speed</p>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button className="flex-1 bg-white text-[#0B0E23] py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                            Read Whitepaper
                        </button>
                        <button className="flex-1 border border-white/20 text-white py-4 rounded-xl font-bold hover:bg-white/5 transition-colors">
                            View Roadmap
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
            <StatsItem value="30k+" label="Products" />
            <StatsItem value="10k+" label="Auctions" />
            <StatsItem value="12k+" label="Collections" />
            <StatsItem value="20k+" label="Artists" />
        </div>
    </section>
);
