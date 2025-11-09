import React, { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Flag } from 'lucide-react';

function useCountdown(targetDate) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(Math.max(0, target - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

export default function HeroSection() {
  // Example next race: set a date in the near future
  const nextRaceISO = '2025-12-01T14:00:00Z';
  const { days, hours, minutes, seconds } = useCountdown(nextRaceISO);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
          <Flag className="h-4 w-4 text-red-400" />
          <span className="text-xs uppercase tracking-wider text-white/80">2025 F1 Season</span>
        </div>

        <h1 className="text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
          Pure Speed. Precision. Drama.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Live coverage, stats, and deep insights from every Grand Prix weekend.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 text-center sm:flex sm:gap-6">
          <CountdownPill label="Days" value={days} />
          <CountdownPill label="Hours" value={hours} />
          <CountdownPill label="Minutes" value={minutes} />
          <CountdownPill label="Seconds" value={seconds} />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#upcoming"
            className="rounded-md bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600"
          >
            Next Grand Prix
          </a>
          <a
            href="#news"
            className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Latest News
          </a>
        </div>
      </div>
    </section>
  );
}

function CountdownPill({ label, value }) {
  return (
    <div className="min-w-[90px] rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
      <div className="text-2xl font-bold tabular-nums">{String(value).padStart(2, '0')}</div>
      <div className="text-xs uppercase tracking-wide text-white/70">{label}</div>
    </div>
  );
}
