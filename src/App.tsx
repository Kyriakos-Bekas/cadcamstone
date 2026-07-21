import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      {/* Keyboard/skip-link: first tab stop jumps past the nav */}
      <a
        href="#main"
        className="sr-only rounded-md bg-amber-500 px-4 py-2 font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Services />
        <Process />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
