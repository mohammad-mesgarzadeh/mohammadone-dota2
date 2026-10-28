import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SignatureHeroes } from '@/components/SignatureHeroes';
import { Playstyle } from '@/components/Playstyle';
import { PlayerProfile } from '@/components/PlayerProfile';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="grain relative min-h-screen bg-ink-950 text-gold-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureHeroes />
        <Playstyle />
        <PlayerProfile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
