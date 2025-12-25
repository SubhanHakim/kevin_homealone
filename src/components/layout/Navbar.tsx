import { smoothScrollTo } from "../../utils/smoothScroll";

export const Navbar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        smoothScrollTo(id, 1500); // 1.5 second duration for premium feel
    };

    return (
        <nav className="flex justify-between items-center py-6 px-6 md:px-20 max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xl">K</div>
                <span className="font-bold text-xl tracking-tight">Kevin</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-black transition-colors cursor-pointer">Home</a>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-black transition-colors cursor-pointer">About</a>
                <a href="#collection" onClick={(e) => handleScroll(e, 'collection')} className="hover:text-black transition-colors cursor-pointer">Collection</a>
            </div>

            <button className="bg-[#0B0E23] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                <a href="https://pump.fun/coin/2iRcDWDrTJVpbDzjgmsAL7WatTQZEg9xkB3vDGzGpump">Buy Now</a>
            </button>
        </nav>
    );
};
