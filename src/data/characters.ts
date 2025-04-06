
export interface Stat {
  value: number;
  color: string;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  stance: string; // This would be a GIF or animation in a real app
  theme: string;
  bio: string;
  longBio: string;
  stats: {
    strength: Stat;
    agility: Stat;
    intelligence: Stat;
    mysticism: Stat;
    endurance: Stat;
  };
}

export const characters: Character[] = [
  {
    id: "ashborne",
    name: "Ashborne",
    image: "/placeholder.svg", // Replace with actual character image
    stance: "/placeholder.svg", // Replace with actual animated stance
    theme: "Cyberpunk + Laboratory",
    bio: "Born in the flames of the Last Wyrm, Ashborne carries the genetic memory of ancient dragons.",
    longBio: "Born in the flames of the Last Wyrm, Ashborne carries the genetic memory of ancient dragons within his cybernetically enhanced frame. As the premier creation of NeuroCorp's Dragon Initiative, he possesses unmatched thermal regulation and pyrokinetic capabilities. After escaping the lab during the Great Blackout of 2089, he now hunts those who would abuse dragon-tech while searching for others of his kind.",
    stats: {
      strength: { value: 91, color: "cyber-neon-blue" },
      agility: { value: 78, color: "cyber-neon-purple" },
      intelligence: { value: 85, color: "cyber-neon-pink" },
      mysticism: { value: 88, color: "cyber-neon-green" },
      endurance: { value: 94, color: "cyber-neon-blue" },
    },
  },
  {
    id: "nova",
    name: "Nova",
    image: "/placeholder.svg", // Replace with actual character image
    stance: "/placeholder.svg", // Replace with actual animated stance
    theme: "Ancient Battlefield + Anime",
    bio: "A fallen star given human form, Nova's celestial energy is channeled through her ancestral katana.",
    longBio: "A fallen star given human form, Nova's celestial energy is channeled through her ancestral katana 'Starfall.' Born to a lineage of cosmic guardians, her family has defended Earth from extradimensional threats for millennia. Her anime-inspired fighting style combines traditional swordsmanship with bursts of stellar energy. Nova's existence bridges the ancient battlefield techniques of her ancestors with the cosmic forces that flow through her veins.",
    stats: {
      strength: { value: 82, color: "cyber-neon-purple" },
      agility: { value: 95, color: "cyber-neon-pink" },
      intelligence: { value: 79, color: "cyber-neon-blue" },
      mysticism: { value: 91, color: "cyber-neon-green" },
      endurance: { value: 84, color: "cyber-neon-purple" },
    },
  },
  {
    id: "chronos",
    name: "Chronos",
    image: "/placeholder.svg", // Replace with actual character image
    stance: "/placeholder.svg", // Replace with actual animated stance
    theme: "Space Suit + Realism",
    bio: "The first human to survive temporal displacement, Chronos exists simultaneously across multiple timelines.",
    longBio: "The first human to survive temporal displacement, Captain Alex Morrow became Chronos after an accident with the Quantum Fold drive on the ISS Endeavor in 2042. His specialized space suit, originally designed for deep space exploration, has been modified to stabilize his fractured existence across multiple timelines. While his body appears realistically human, subtle distortions and echoes follow his movements as timelines attempt to reconcile his presence. He works with temporal authorities to prevent paradoxes while searching for a way to stabilize his condition.",
    stats: {
      strength: { value: 75, color: "cyber-neon-green" },
      agility: { value: 72, color: "cyber-neon-blue" },
      intelligence: { value: 96, color: "cyber-neon-purple" },
      mysticism: { value: 65, color: "cyber-neon-pink" },
      endurance: { value: 89, color: "cyber-neon-green" },
    },
  },
  {
    id: "frostbyte",
    name: "Frostbyte",
    image: "/placeholder.svg", // Replace with actual character image
    stance: "/placeholder.svg", // Replace with actual animated stance
    theme: "Neon Future + Street",
    bio: "A street-level cryohacker whose bodymod implants let her manipulate thermal energy and digital systems.",
    longBio: "A street-level cryohacker whose bodymod implants let her manipulate thermal energy and digital systems simultaneously. Raised in the undercity of Neo-Shanghai, Min 'Frostbyte' Chen combined black market cooling tech (designed for quantum computers) with neural interfaces to create a unique form of hacking. By flash-freezing security systems and creating ice-bridges between networks, she can breach systems thought impenetrable. Her signature neon blue cooling rods protrude from her spine, and she's known for leaving crystalline data structures as her calling card.",
    stats: {
      strength: { value: 68, color: "cyber-neon-blue" },
      agility: { value: 87, color: "cyber-neon-purple" },
      intelligence: { value: 93, color: "cyber-neon-green" },
      mysticism: { value: 74, color: "cyber-neon-pink" },
      endurance: { value: 79, color: "cyber-neon-blue" },
    },
  },
  {
    id: "terraform",
    name: "Terraform",
    image: "/placeholder.svg", // Replace with actual character image
    stance: "/placeholder.svg", // Replace with actual animated stance
    theme: "Organic Tech + Tribal",
    bio: "A symbiotic fusion of human and ancient earth spirit, Terraform can reshape environments at will.",
    longBio: "A symbiotic fusion of human and ancient earth spirit, Terraform emerged after environmental scientist Dr. Kiana Waters bonded with a dormant elemental during an expedition to study ecological collapse in the Amazon. Their merged consciousness can reshape environments at will, creating sustainable ecosystems from barren land. Terraform's appearance blends organic technology with tribal motifs - living circuits flow like vines across their skin, while crystalline growths form protective armor. They seek to heal environmental wounds while mediating between human advancement and natural preservation.",
    stats: {
      strength: { value: 88, color: "cyber-neon-green" },
      agility: { value: 72, color: "cyber-neon-blue" },
      intelligence: { value: 85, color: "cyber-neon-purple" },
      mysticism: { value: 97, color: "cyber-neon-pink" },
      endurance: { value: 91, color: "cyber-neon-green" },
    },
  },
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find(character => character.id === id);
};
