import { heroes } from '@/data/content';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';
import { useInView } from '@/hooks/useInView';

export function SignatureHeroes() {
  return (
    <section id="heroes" className="relative py-28 md:py-40">
      {/* Section header */}
      <div className="section-shell mb-20">
        <Reveal>
          <p className="eyebrow mb-5">Signature Heroes</p>
          <h2 className="heading-xl text-gold-300">
            The Heroes That <span className="text-ember-500">Define</span> the Game.
          </h2>
          <p className="mt-6 max-w-2xl body-prose">
            Four heroes. Four completely different ways to win. Each one rewards a different kind of
            patience — and punishes a different kind of mistake.
          </p>
        </Reveal>
      </div>

      {/* Hero showcases */}
      <div className="space-y-24 md:space-y-32">
        {heroes.map((hero, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={hero.id} className="section-shell">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <Reveal className={`relative ${reversed ? 'lg:order-2' : ''}`}>
                  <div
                    className="pointer-events-none absolute -inset-3 opacity-30 blur-2xl"
                    style={{ backgroundColor: hero.accent }}
                  />
                  <div className="relative group">
                    <SmartImage
                      src={hero.image}
                      alt={hero.alt}
                      className="aspect-[4/5] w-full"
                      imgClassName="hero-img-zoom"
                    />
                    {/* Accent tint overlay */}
                    <div
                      className="absolute inset-0 mix-blend-color opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                      style={{ backgroundColor: hero.accent }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                    {/* Hero number */}
                    <div className="absolute right-5 top-5 font-display text-5xl font-extrabold text-gold-300/20 md:text-6xl">
                      0{i + 1}
                    </div>
                    {/* Accent bar */}
                    <div
                      className="absolute bottom-0 left-0 h-1 w-24 transition-all duration-500 group-hover:w-40"
                      style={{ backgroundColor: hero.accent }}
                    />
                  </div>
                </Reveal>

                {/* Text */}
                <div className={reversed ? 'lg:order-1' : ''}>
                  <Reveal>
                    <AccentBar accent={hero.accent} />
                    <h3 className="font-display text-4xl font-bold text-gold-300 sm:text-5xl md:text-6xl">
                      {hero.name}
                    </h3>
                    <p
                      className="mt-3 font-display text-base font-medium uppercase tracking-[0.12em] sm:text-lg"
                      style={{ color: hero.accent }}
                    >
                      {hero.title}
                    </p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <p className="mt-6 max-w-lg body-prose">{hero.description}</p>
                  </Reveal>

                  <Reveal delay={0.3}>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {hero.attributes.map((attr) => (
                        <span
                          key={attr}
                          className="border border-ink-500/60 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-gold-300/60"
                        >
                          {attr}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** Accent line that grows from 0 to 40px when scrolled into view. */
function AccentBar({ accent }: { accent: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, margin: '-80px' });
  return (
    <div
      ref={ref}
      className="mb-5 h-px transition-all duration-800 ease-out"
      style={{
        backgroundColor: accent,
        width: inView ? '40px' : '0px',
      }}
    />
  );
}
