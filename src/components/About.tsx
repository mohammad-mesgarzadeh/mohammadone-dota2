import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';
import { sectionImages } from '@/data/content';

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-ember-800/10 blur-[100px]" />
      </div>

      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Image column */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-ember-700/30" />
              <SmartImage
                src={sectionImages.about}
                alt="Dota 2 hero Undying — a decayed undead titan pressing the frontline"
                className="aspect-[4/5] w-full"
                imgClassName="object-[center_25%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-sm font-medium uppercase tracking-[0.25em] text-gold-300/80">
                  Position 5
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-gold-300/40">
                  Hard Support
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow mb-5">About</p>
              <h2 className="heading-xl text-gold-300">
                The Art of <span className="text-ember-500">Support.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-5">
                <p className="body-prose">
                  I am a Position 5 player — the foundation the rest of the team builds on. My game is
                  played in the margins most people never notice: the ward placed before the enemy
                  roams, the force staff that pulls a carry out of a certain death, the shackle that
                  stops a push before it starts.
                </p>
                <p className="body-prose">
                  Vision, protecting teammates, crowd control, map awareness, and teamfight execution —
                  these are not separate skills. They are one discipline: reading the game early
                  enough that the fight is already decided by the time it begins. That is what it
                  means to play support at the highest level.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                {['Vision', 'Protection', 'Crowd Control', 'Map Awareness', 'Teamfight Execution'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-ink-500/60 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-gold-300/60 transition-colors duration-300 hover:border-gold-600/50 hover:text-gold-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
