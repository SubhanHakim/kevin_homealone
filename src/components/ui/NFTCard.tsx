export const NFTCard = ({
    title,
    imageColor,
    imageSrc,
    scale = 1
}: {
    title: string,
    imageColor?: string,
    imageSrc?: string,
    scale?: number
}) => (
    <div
        className="bg-white p-3 rounded-xl border-2 border-[#1A1B4B] shadow-[6px_6px_0px_0px_rgba(11,14,35,1)] transition-transform hover:-translate-y-2 duration-300"
        style={{ transform: `scale(${scale})` }}
    >
        {/* Image Placeholder */}
        <div className={`aspect-square rounded-lg mb-4 relative overflow-hidden ${imageColor || 'bg-gray-100'} border border-[#1A1B4B]/20 flex items-center justify-center`}>
            {imageSrc ? (
                <img src={imageSrc} alt={title} className="w-full h-full object-cover filter hover:contrast-110 transition-all duration-500" />
            ) : (
                <>
                    <div className="w-1/2 h-1/2 bg-white/20 backdrop-blur-sm rounded-full mix-blend-overlay"></div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-xs shadow-sm">
                        👾
                    </div>
                </>
            )}
        </div>

        <div className="space-y-1 mb-2 px-1 text-center">
            <h3 className="font-bold text-lg leading-tight font-mono uppercase tracking-tighter text-[#1A1B4B]">{title}</h3>
        </div>
    </div>
);
