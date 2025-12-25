import { CollectionCard } from "../components/ui/CollectionCard";
import { Reveal } from "../components/utils/Reveal";

import art1 from "../assets/art/art1.webp";
import art2 from "../assets/art/art2.webp";
import art3 from "../assets/art/art3.webp";
import art4 from "../assets/art/art4.webp";
import art5 from "../assets/art/art5.webp";
import art6 from "../assets/art/art6.webp";
import art7 from "../assets/art/art7.webp";
import art8 from "../assets/art/art8.webp";

export const ArtSection = () => (
    <section id="collection" className="py-20 px-6 max-w-7xl mx-auto">
        <Reveal>
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1B4B] mb-2">The Kevin Vault</h2>
                <p className="text-gray-500">Spread the joy (and the panic).</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                <CollectionCard title="Kevin #001" imageSrc={art1} />
                <CollectionCard title="Kevin #002" imageSrc={art2} />
                <CollectionCard title="Kevin #003" imageSrc={art3} />
                <CollectionCard title="Kevin #004" imageSrc={art4} />
                <CollectionCard title="Kevin #005" imageSrc={art5} />
                <CollectionCard title="Kevin #006" imageSrc={art6} />
                <CollectionCard title="Kevin #007" imageSrc={art7} />
                <CollectionCard title="Kevin #008" imageSrc={art8} />
            </div>
        </Reveal>
    </section>
);
