import { NFTCard } from "../components/ui/NFTCard";
import { Reveal } from "../components/utils/Reveal";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";

export const HeroSection = () => (
    <section id="home" className="pt-16 pb-32 px-6 text-center max-w-5xl mx-auto relative">

        {/* Floating Stars */}
        <div className="absolute top-20 left-10 md:left-20 text-4xl text-[#0B0E23] animate-pulse">✦</div>
        <div className="absolute bottom-40 right-10 md:right-20 text-2xl text-[#3B82F6] animate-bounce delay-700">✦</div>

        <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                ALONE DETECTED. <br />
                <span className="relative inline-block">
                    THE HOUSE REMAINS ACTIVE.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#3B82F6] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                </span>
            </h1>

            <p className="text-gray-500 max-w-xl mx-auto mb-16 text-lg">
                A familiar holiday incident rendered as a controlled digital signal.
            </p>

            {/* Cards Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-center relative z-10">
                <div className="hidden md:block transform translate-y-12">
                    <NFTCard
                        title="The Dead Fella"
                        imageSrc={hero1}
                        scale={0.9}
                    />
                </div>

                <div className="z-20 md:-mt-12 shadow-2xl">
                    <NFTCard
                        title="Emperor's Guard"
                        imageSrc={hero2}
                        scale={1.05}
                    />
                </div>

                <div className="hidden md:block transform translate-y-12">
                    <NFTCard
                        title="Snow Bunny"
                        imageSrc={hero3}
                        scale={0.9}
                    />
                </div>
            </div>
        </Reveal>
    </section>
);
