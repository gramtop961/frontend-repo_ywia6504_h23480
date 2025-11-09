import React from 'react';
import { Trophy, Gauge, Presentation } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { icon: Gauge, label: 'Races Completed', value: 18 },
    { icon: Presentation, label: 'Races Remaining', value: 4 },
    { icon: Trophy, label: 'Championship Leader', value: 'M. Verstappen' },
  ];

  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="rounded-lg bg-white/10 p-3">
                <Icon className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
                <div className="text-xl font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
