import { Eye, Shield, Lock, Flame, type LucideIcon } from 'lucide-react';
import { playstyle } from '@/data/content';
import { Reveal } from './Reveal';

const iconMap: Record<string, LucideIcon> = { Eye, Shield, Lock, Flame };

export function Playstyle() {
  return (
    <section id="playstyle" className="relative py-28 md:py-40">
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-ember-800/8 blur-[120px]" />
        <div className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-gold-600/5 blur-[100px]" />
      </div>

      <div className="section-shell relative">
        <Reveal>
          <p className="eyebrow mb-5">Playstyle</p>
          <h2 className="heading-xl text-gold-300">
            Four Disciplines. <span className="text-ember-500">One Player.</span>
          </h2>
          <p className="mt-6 max-w-2xl body-prose">
            The difference between a good support and a game-winning one lives in the details — the
            habits you cannot see, but the scoreboard feels.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {playstyle.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.id} delay={i * 0.1}>
                <article className="group relative h-full overflow-hidden border border-ink-600/40 bg-ink-850/50 p-8 transition-all duration-500 hover:border-ember-600/40 hover:bg-ink-800/60 md:p-10">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember-700/0 blur-3xl transition-all duration-500 group-hover:bg-ember-700/15" />

                  {/* Icon */}
                  <div className="relative mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center border border-ink-500/60 bg-ink-900/80 text-gold-400 transition-all duration-500 group-hover:border-ember-600/50 group-hover:text-ember-500">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-3xl font-extrabold text-ink-500 transition-colors duration-500 group-hover:text-ink-600">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-gold-300 sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-[1.7] text-gold-300/60 sm:text-base">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-ember-500 to-transparent transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
