import React from 'react';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

export default function UpcomingRaceCard() {
  const race = {
    name: 'Abu Dhabi Grand Prix',
    circuit: 'Yas Marina Circuit',
    location: 'Abu Dhabi, UAE',
    date: 'Dec 1, 2025',
    timeLocal: '18:00 GST',
    laps: 58,
    length: '5.281 km',
    image:
      'https://images.unsplash.com/photo-1533135336168-32536f3284c9?q=80&w=1200&auto=format&fit=crop',
  };

  return (
    <section id="upcoming" className="bg-neutral-950 py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-5">
        <div className="relative col-span-3 overflow-hidden rounded-2xl border border-white/10">
          <img src={race.image} alt={race.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold">{race.name}</h3>
            <p className="text-white/80">{race.circuit}</p>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-white/80">
            <CalendarDays className="h-5 w-5 text-red-400" />
            <span className="text-sm">{race.date}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Clock className="h-5 w-5 text-red-400" />
            <span className="text-sm">{race.timeLocal}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="h-5 w-5 text-red-400" />
            <span className="text-sm">{race.location}</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Spec label="Laps" value={race.laps} />
            <Spec label="Circuit Length" value={race.length} />
          </div>
          <a
            href="#"
            className="mt-auto inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600"
          >
            Full Weekend Schedule
          </a>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
