import { ExternalLink, Instagram } from 'lucide-react';
import { profile, sectionImages } from '@/data/content';
import { SmartImage } from './SmartImage';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      {/* Background image with slow pan */}
      <div className="absolute inset-0">
        <SmartImage
          src={sectionImages.hero}
          alt="Official Dota 2 gameplay showing the Dire side beside the Radiant side in a teamfight"
          className="h-full w-full"
          imgClassName="animate-slow-pan object-[center_30%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/50 to-transparent" />
      </div>

      {/* Ember glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-ember-700/20 blur-[120px] animate-ember-flicker" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 md:px-10 md:pt-36">
        <div className="max-w-3xl">
          <p
            className="eyebrow mb-5 hero-fade-up sm:mb-6"
            style={{ animationDelay: '0.2s' }}
          >
            Dota 2 · Position 5 · Hard Support
          </p>

          <h1
            className="font-display font-extrabold tracking-tight text-gold-300 hero-fade-up-lg"
            style={{
              fontSize: 'clamp(1.625rem, 7.5vw, 6.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              whiteSpace: 'nowrap',
              animationDelay: '0.35s',
            }}
          >
            MOHAMMAD<span className="text-ember-500">ONE</span>
          </h1>

          <p
            className="mt-4 font-sans text-base tracking-wide text-gold-300/70 hero-fade-up sm:text-lg md:text-xl"
            style={{ animationDelay: '0.6s' }}
          >
            Mohammad Mesgarzadeh
          </p>

          <div
            className="mt-7 h-px w-24 origin-left bg-gradient-to-r from-ember-500 to-transparent hero-scale-in"
            style={{ animationDelay: '0.8s' }}
          />

          <p
            className="mt-7 max-w-xl font-display text-lg font-medium uppercase tracking-[0.12em] text-gold-300/90 hero-fade-up sm:text-xl md:text-2xl"
            style={{ animationDelay: '0.9s', overflowWrap: 'break-word' }}
          >
            {profile.tagline}
          </p>

          <p
            className="mt-5 max-w-xl font-sans text-sm leading-[1.7] text-gold-300/60 hero-fade-up sm:text-base md:text-lg"
            style={{ animationDelay: '1.05s' }}
          >
            {profile.description}
          </p>

          <div
            className="mt-8 flex flex-col gap-3 hero-fade-up sm:mt-10 sm:flex-row sm:gap-4"
            style={{ animationDelay: '1.2s' }}
          >
            <a
              href={profile.dotabuff}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow group inline-flex items-center justify-center gap-2.5 bg-ember-600 px-7 py-3.5 text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-ember-500 sm:px-8 sm:py-4"
            >
              View My Dotabuff
              <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 border border-gold-600/40 px-7 py-3.5 text-[11px] uppercase tracking-[0.25em] text-gold-300 transition-all duration-300 hover:border-gold-500 hover:bg-gold-600/10 sm:px-8 sm:py-4"
            >
              <Instagram size={14} />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hero-late-fade md:bottom-8"
        style={{ animationDelay: '1.6s' }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-gold-600/30 p-1.5">
          <div className="h-1.5 w-1 rounded-full bg-ember-500 hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
