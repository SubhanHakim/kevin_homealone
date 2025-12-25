import dexscreenerIcon from "../../assets/dexscreener.svg";

export const Footer = () => (
    <footer className="bg-[#0B0E23] text-white/50 text-center py-8 text-sm border-t border-white/10">
        <div className="flex justify-center gap-6 mb-4 items-center">
            {/* X (Twitter) Icon */}
            <a href="#" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
            </a>

            {/* DexScreener Icon */}
            <a href="#" className="hover:text-white transition-transform hover:scale-110" aria-label="DexScreener">
                <img src={dexscreenerIcon} alt="DexScreener" className="h-6 w-6 opacity-60 hover:opacity-100 transition-opacity" />
            </a>
        </div>
        <p>© 2025 Kevin Home Alone.</p>
    </footer>
);
