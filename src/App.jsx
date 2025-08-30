import React from 'react';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import DashboardPreview from './components/DashboardPreview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-purple-500/30 selection:text-white">
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-orange-400" />
            <div>
              <p className="text-lg font-semibold tracking-tight">OrbiOps</p>
              <p className="text-xs text-white/50">AI HR & Operations Platform</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#dashboard">Manager View</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <FeaturesGrid />
        <DashboardPreview />
      </main>

      <Footer />
    </div>
  );
}
