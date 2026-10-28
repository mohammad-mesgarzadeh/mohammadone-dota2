import { ExternalLink, Instagram } from 'lucide-react';
import { navItems, profile } from '@/data/content';

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-ink-600/40 bg-ink-950 py-16">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <button onClick={() => go('hero')} className="flex items-center gap-2.5">
              <span className="block h-4 w-4 rotate-45 border border-ember-500" />
              <span className="font-display text-sm font-bold tracking-[0.2em] text-gold-300">
                MOHAMMAD<span className="text-ember-500">ONE</span>
              </span>
            </button>
            <p className="mt-4 font-sans text-sm text-gold-300/50">
              Mohammad Mesgarzadeh
            </p>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-gold-300/30">
              Dota 2 Support Player
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-300/40">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className="font-sans text-sm text-gold-300/50 transition-colors duration-300 hover:text-gold-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-300/40">Connect</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={profile.dotabuff}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-sans text-sm text-gold-300/50 transition-colors duration-300 hover:text-ember-400"
              >
                <ExternalLink size={14} />
                Dotabuff
                <span className="text-gold-300/20 transition-colors group-hover:text-ember-400">↗</span>
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-sans text-sm text-gold-300/50 transition-colors duration-300 hover:text-ember-400"
              >
                <Instagram size={14} />
                Instagram
                <span className="text-gold-300/20 transition-colors group-hover:text-ember-400">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-600/30 pt-8 sm:flex-row">
          <p className="font-sans text-xs text-gold-300/30">
            © {new Date().getFullYear()} MohammadOne. All rights reserved.
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300/20">
            The game is won before the fight begins.
          </p>
        </div>
      </div>
    </footer>
  );
}
