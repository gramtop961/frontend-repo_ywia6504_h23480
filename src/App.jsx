import React from 'react';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import NewsCarousel from './components/NewsCarousel';
import UpcomingRaceCard from './components/UpcomingRaceCard';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroSection />
      <StatsBar />
      <NewsCarousel />
      <UpcomingRaceCard />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-8 text-white/70">
      <div className="mx-auto max-w-7xl px-6 text-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>F1 Live — Unofficial fan experience. Data is illustrative.</p>
          <p>
            Built with React, Tailwind, and a Spline-powered hero. Theme: automotive, dynamic, high-energy.
          </p>
        </div>
      </div>
    </footer>
  );
}
