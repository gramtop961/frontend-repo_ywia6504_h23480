import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';

const mockNews = [
  {
    id: 1,
    title: 'Team strategy shake-up ahead of next Grand Prix',
    tag: 'Strategy',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Rookie delivers stunning qualifying lap in the wet',
    tag: 'Qualifying',
    image: 'https://images.unsplash.com/photo-1744841332448-f4a2d6011202?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb29raWUlMjBkZWxpdmVycyUyMHN0dW5uaW5nJTIwcXVhbGlmeWluZ3xlbnwwfDB8fHwxNzYyNjk0ODY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Technical directive alters aero setups across the paddock',
    tag: 'Tech',
    image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Mid-season upgrades bring tight battle at the front',
    tag: 'Upgrades',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function NewsCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % mockNews.length);
  const prev = () => setIndex((i) => (i - 1 + mockNews.length) % mockNews.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
  }, [index]);

  return (
    <section id="news" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="rounded-md bg-red-500/20 p-2">
            <Newspaper className="h-4 w-4 text-red-400" />
          </div>
          <h2 className="text-xl font-semibold">Featured News</h2>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-white/10"
          >
            {mockNews.map((n) => (
              <article
                key={n.id}
                className="relative h-72 min-w-full snap-start overflow-hidden sm:h-96"
              >
                <img
                  src={n.image}
                  alt={n.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/80">
                    {n.tag}
                  </span>
                  <h3 className="text-2xl font-bold leading-snug">{n.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {mockNews.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-red-500' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
