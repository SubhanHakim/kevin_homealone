export const StatsItem = ({ value, label }: { value: string, label: string }) => (
    <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-1">{value}</h3>
        <p className="text-sm md:text-base opacity-70 font-medium">{label}</p>
    </div>
);
