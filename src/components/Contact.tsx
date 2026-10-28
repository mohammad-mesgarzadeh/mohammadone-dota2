import { ExternalLink, Instagram } from 'lucide-react';
import { profile, sectionImages } from '@/data/content';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0">
        <SmartImage
          src={sectionImages.contact}
          alt="Dota 2 hero Shadow Shaman casting serpent wards in a dramatic teamfight"
          className="h-full w-full"
          imgClassName="object-[center_30%]"
        />
        <div className="absolute inset-0 bg-ink-950/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/60 to-ink-950" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-ember-700/15 blur-[120px]" />
      </div>

      <div className="section-shell relative text-center">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-gold-300 sm:text-5xl md:text-6xl lg:text-7xl">
            Connect With <span className="text-ember-500">MohammadOne</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-[1.7] text-gold-300/60 sm:text-lg">
            Follow my journey, track my matches, and follow along as I climb. The best way to reach
            me is through the links below.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={profile.dotabuff}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-ember-600 px-8 py-5 text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-ember-500 hover:shadow-[0_0_30px_-5px] hover:shadow-ember-600/50"
            >
              <ExternalLink size={15} />
              Dotabuff Profile
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-gold-600/40 px-8 py-5 text-[11px] uppercase tracking-[0.25em] text-gold-300 transition-all duration-300 hover:border-gold-500 hover:bg-gold-600/10"
            >
              <Instagram size={15} />
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
