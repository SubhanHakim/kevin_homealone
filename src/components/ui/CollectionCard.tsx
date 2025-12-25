export const CollectionCard = ({ title, imageSrc, imageGradient, onClick }: { title: string, imageSrc?: string, imageGradient?: string, onClick?: () => void }) => (
    <div className="group relative break-inside-avoid cursor-pointer" onClick={onClick}>
        {/* Card Container with Neo-Brutalist Style */}
        <div className={`relative bg-white border-2 border-[#1A1B4B] p-3 rounded-xl shadow-[6px_6px_0px_0px_rgba(11,14,35,1)] transition-all duration-300 group-hover:shadow-[10px_10px_0px_0px_#3B82F6] group-hover:-translate-y-2 group-hover:-rotate-1`}>

            {/* Image Container */}
            <div className={`aspect-[4/5] w-full rounded-lg overflow-hidden relative ${imageGradient || 'bg-gray-100'} border border-[#1A1B4B]/20`}>
                {imageSrc && (
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter hover:contrast-110" />
                )}

                {/* Simple Overlay for Hover Hint */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Minimal Info */}
            <div className="mt-4 flex justify-between items-center px-1">
                <h4 className="font-bold text-[#1A1B4B] text-lg font-mono uppercase tracking-tighter">{title}</h4>
                <div className="bg-[#3B82F6] text-white text-[10px] font-bold px-2 py-1 rounded border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    RARE
                </div>
            </div>
        </div>
    </div>
);
