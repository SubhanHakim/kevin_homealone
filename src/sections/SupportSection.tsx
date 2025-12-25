import andyImg from "../assets/supportes/andy.webp";
import geniusImg from "../assets/supportes/genius.webp";
import unknownImg from "../assets/supportes/image.png";

const SUPPORTERS = [
    {
        id: 'NODE_01',
        name: 'ᄂIMIПΛᄂbardo',
        username: '@liminal_bardo',
        src: andyImg,
        status: 'ONLINE',
        latency: '12ms',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500'
    },
    {
        id: 'NODE_02',
        name: 'j⧉nus',
        username: '@repligate',
        src: geniusImg,
        status: 'ONLINE',
        latency: '4ms',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500'
    },
    {
        id: 'NODE_03',
        name: 'Lowkey',
        username: '@Kimchi662',
        src: unknownImg,
        status: 'ONLINE',
        latency: '4ms',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500'
    },
];

export const SupportSection = () => (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-50/50">
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1B4B] mb-2 uppercase tracking-tight">Active Nodes</h2>
            <p className="text-gray-500 font-mono text-sm">Maintained by the core directive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUPPORTERS.map((member) => (
                <div key={member.id} className="bg-white border-2 border-[#1A1B4B] p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(11,14,35,1)] hover:shadow-[10px_10px_0px_0px_#3B82F6] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">

                    {/* ID Badge */}
                    <div className="md:absolute top-4 right-4 text-[10px] font-mono bg-gray-100 px-2 py-1 rounded border border-gray-300 mb-4 md:mb-0">
                        {member.id}
                    </div>

                    {/* Avatar */}
                    <div className="relative mb-6">
                        <div className="w-24 h-24 rounded-full border-2 border-[#1A1B4B] overflow-hidden p-1 bg-white">
                            <img src={member.src} alt={member.name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        {/* Status Dot */}
                        <div className={`absolute bottom-1 right-1 w-5 h-5 ${member.bg} rounded-full border-2 border-white flex items-center justify-center animate-pulse`}>
                        </div>
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-[#1A1B4B] mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-400 font-medium mb-4">{member.username}</p>

                    {/* Technical Stats */}
                    <div className="w-full bg-gray-50 border border-black/10 rounded-lg p-3 flex justify-between items-center text-xs font-mono">
                        <span className="text-gray-500">STATUS</span>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400">{member.latency}</span>
                            <span className={`font-bold ${member.color}`}>{member.status}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
