import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { ArtSection } from './sections/ArtSection';
import { AboutSection } from './sections/AboutSection';

import { SupportSection } from './sections/SupportSection';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-outfit">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blob blur-[120px] rounded-full opacity-60"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-blob-2 blur-[120px] rounded-full opacity-40"></div>
      </div>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ArtSection />
        <SupportSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
