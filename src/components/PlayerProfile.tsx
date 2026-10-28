import { ExternalLink, User, Gamepad2, Swords, Link2 } from 'lucide-react';
import { profile, sectionImages } from '@/data/content';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';

export function PlayerProfile() {
  const infoRows = [
    { icon: User, label: 'Real Name', value: profile.realName },
    { icon: Gamepad2, label: 'Gaming Alias', value: profile.alias },
    { icon: Swords, label: 'Primary Role', value: profile.role },
    { icon: Link2, label: 'Signature Heroes', value: profile.signatureHeroes.join(' · ') },
  ];

  return (
    <section id="profile" className="relative py-28 md:py-40">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-5">Player Profile</p>
          <h2 className="heading-xl text-gold-300">
            The Player <span className="text-ember-500">Behind</span> the Screen.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -right-3 -top-3 h-full w-full border border-gold-600/20" />
              <SmartImage
                src={sectionImages.profile}
                alt="Dota 2 hero Ringmaster — a theatrical showman directing the battle"
                className="aspect-[4/5] w-full"
                imgClassName="object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* Info */}
          <div>
            <Reveal>
              <dl className="divide-y divide-ink-600/40 border-y border-ink-600/40">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex items-start gap-5 py-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink-500/60 text-gold-400">
                      <row.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <dt className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-300/40">
                        {row.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-lg font-medium text-gold-300 sm:text-xl">
                        {row.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8">
                <a
                  href={profile.dotabuff}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-ember-600/50 bg-ember-600/5 px-7 py-4 text-[11px] uppercase tracking-[0.25em] text-ember-400 transition-all duration-300 hover:border-ember-500 hover:bg-ember-600/15"
                >
                  View Full Profile on Dotabuff
                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <p className="mt-4 max-w-md font-sans text-xs leading-relaxed text-gold-300/40">
                  Dotabuff is the definitive Dota 2 statistics tracker. Match history, hero stats,
                  and recent games are available there.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
