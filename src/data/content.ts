export const profile = {
  alias: 'MohammadOne',
  realName: 'Mohammad Mesgarzadeh',
  role: 'Dota 2 Position 5 / Hard Support',
  tagline: 'THE GAME IS WON BEFORE THE FIGHT BEGINS.',
  description:
    'Position 5 Support. Vision, control, and clutch saves. I create the space my team needs to win.',
  dotabuff: 'https://www.dotabuff.com/players/1006412547',
  instagram: 'https://www.instagram.com/mohammadone_1/?hl=en',
  signatureHeroes: ['Ringmaster', 'Undying', 'Shadow Shaman', 'Warlock'],
} as const;

/**
 * Centralized hero asset configuration.
 * Images are official Valve Dota 2 hero artwork from the Steam CDN.
 * Social images are high-resolution cinematic hero portraits.
 * Card images are the horizontal hero art used on the Dota 2 hero grid.
 */
const STEAM_CDN = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes';

export interface HeroShowcase {
  id: string;
  name: string;
  title: string;
  description: string;
  accent: string;
  image: string;
  cardImage: string;
  alt: string;
  attributes: string[];
}

export const heroes: HeroShowcase[] = [
  {
    id: 'ringmaster',
    name: 'Ringmaster',
    title: 'Trickery. Disruption. Outplay potential.',
    description:
      'The ringmaster bends the fight to his will — yanking enemies out of position, disrupting initiations, and turning the tempo of a teamfight on its head. A hero of misdirection where every cast is an opening for the carry to shine.',
    accent: '#d4b878',
    image: `/images/ringmaster.webp`,
    cardImage: `/images/ringmaster.webp`,
    alt: 'Dota 2 hero Ringmaster — a theatrical showman directing the battle with mesmerism and fear',
    attributes: ['Positioning', 'Disruption', 'Tempo'],
  },
  {
    id: 'undying',
    name: 'Undying',
    title: 'Frontline pressure. Teamfight dominance.',
    description:
      'The longer the fight lasts, the stronger he becomes. Undying presses the frontline with decay and the tombstone, forcing enemies to respect a zone they cannot hold. Lane dominance that snowballs into map control.',
    accent: '#7a8a5a',
    image: `/images/undying.webp`,
    cardImage: `/images/undying.webp`,
    alt: 'Dota 2 hero Undying — a decayed undead titan dominating the frontline in a teamfight',
    attributes: ['Laning', 'Frontline', 'Sustain'],
  },
  {
    id: 'shadow-shaman',
    name: 'Shadow Shaman',
    title: 'Hard lockdown. Objective control.',
    description:
      'There is no escape. Hex, shackles, and a ward trap that ends games. Shadow Shaman converts a single pick-off into a tower, a barracks, and eventually the ancient — the most reliable objective closer in the support pool.',
    accent: '#5a9a6a',
    image: `/images/shadow_shaman.webp`,
    cardImage: `/images/shadow_shaman.webp`,
    alt: 'Dota 2 hero Shadow Shaman — a mystical spellcaster with serpent wards and hard lockdown abilities',
    attributes: ['Lockdown', 'Pick-offs', 'Pushing'],
  },
  {
    id: 'warlock',
    name: 'Warlock',
    title: 'Massive teamfight impact. Game-changing ultimates.',
    description:
      'One cast decides the fight. Fatal Bonds links the enemy into a single shared fate, and Chaotic Offering drops a golem that disrupts, slows, and cleaves through an entire lineup. The ultimate that turns a lost game.',
    accent: '#c75a3a',
    image: `/images/warlock.webp`,
    cardImage: `/images/warlock.webp`,
    alt: 'Dota 2 hero Warlock — a demonic summoner unleashing a golem and fatal bonds on the enemy team',
    attributes: ['Teamfight', 'Initiation', 'Healing'],
  },
];

export interface PlaystyleFeature {
  id: string;
  title: string;
  description: string;
  icon: 'Eye' | 'Shield' | 'Lock' | 'Flame';
}

export const playstyle: PlaystyleFeature[] = [
  {
    id: 'vision',
    title: 'Vision & Map Control',
    description:
      'Warding is not a chore — it is the language of the game. I read the enemy\u2019s movements before they happen and paint the map with the information my team needs to dictate the pace.',
    icon: 'Eye',
  },
  {
    id: 'saves',
    title: 'Saves & Peeling',
    description:
      'A carry survives because I was already there. Force staffs, glimmer capes, and body blocks — the invisible plays that keep the team\u2019s damage alive through the fight.',
    icon: 'Shield',
  },
  {
    id: 'control',
    title: 'Crowd Control',
    description:
      'Lock down the right target at the right moment. One well-timed hex or shackle removes the enemy\u2019s win condition before it ever comes online.',
    icon: 'Lock',
  },
  {
    id: 'teamfight',
    title: 'Teamfight Execution',
    description:
      'Teamfights are won in the two seconds before they start. Positioning, cooldown tracking, and the patience to wait for the perfect window — that is where the game is actually decided.',
    icon: 'Flame',
  },
];

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'heroes', label: 'Heroes' },
  { id: 'playstyle', label: 'Playstyle' },
  { id: 'profile', label: 'Profile' },
  { id: 'contact', label: 'Contact' },
] as const;

/**
 * Section background images — cinematic Dota 2 hero art used for
 * atmospheric section backdrops. All from the official Steam CDN.
 */
export const sectionImages = {
  hero: '/images/wallpapersden.com_dota-2-poster-4k_4000x2035.webp',
  about: `/images/rubick.webp`,
  contact: `${STEAM_CDN}/social/shadow_shaman.jpg`,
  profile: '/images/mohamadone.webp',
} as const;
