export const FilterButton = ({ label, active = false }: { label: string, active?: boolean }) => (
    <button className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${active ? 'bg-[#0B0E23] text-white shadow-lg' : 'bg-transparent text-gray-400 hover:text-[#0B0E23]'}`}>
        {label}
    </button>
);
