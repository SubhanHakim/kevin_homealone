export const Navbar = () => (
    <nav className="flex justify-between items-center py-6 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xl">K</div>
            <span className="font-bold text-xl tracking-tight">Kevin</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#" className="hover:text-black transition-colors">About</a>
            <a href="#" className="hover:text-black transition-colors">Collection</a>
            <a href="#" className="hover:text-black transition-colors">How it works</a>
        </div>

        <button className="bg-[#0B0E23] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
            pump.fun
        </button>
    </nav>
);
