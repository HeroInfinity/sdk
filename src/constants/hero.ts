import { groupBy, sortBy } from "lodash";

export enum HeroAttribute {
  STRENTH,
  AGILITY,
  INTELLIGENCE,
}

export type HeroRarity = 0 | 1 | 2 | 3 | 4;

export type Hero = {
  id: number;
  name: string;
  fullName: string;
  primaryAttribute: HeroAttribute;
};

export const HERO_LIST: Hero[] = [
  {
    fullName: "Isaac",
    id: 1,
    name: "isaac",
    primaryAttribute: 1,
  },
  {
    fullName: "Ares",
    id: 2,
    name: "ares",
    primaryAttribute: 0,
  },
  {
    fullName: "Lucid",
    id: 3,
    name: "lucid",
    primaryAttribute: 2,
  },
  {
    fullName: "Sanguine",
    id: 4,
    name: "sanguine",
    primaryAttribute: 1,
  },
  {
    fullName: "Chrysalis",
    id: 5,
    name: "chrysalis",
    primaryAttribute: 2,
  },
  {
    fullName: "Eclipse",
    id: 6,
    name: "eclipse",
    primaryAttribute: 1,
  },
  // {
  //   fullName: 'Earthshaker',
  //   id: 7,
  //   name: 'npc_dota_hero_earthshaker',
  //   primaryAttribute: 0,
  // },
  {
    fullName: "The Whirlwind",
    id: 8,
    name: "thewhirlwind",
    primaryAttribute: 1,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Mirana',
  //   id: 9,
  //   name: 'npc_dota_hero_mirana',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Shadow Fiend',
  //   id: 11,
  //   name: 'npc_dota_hero_nevermore',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 3,
  //   fullName: 'Morphling',
  //   id: 10,
  //   name: 'npc_dota_hero_morphling',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Phantom Lancer',
  //   id: 12,
  //   name: 'npc_dota_hero_phantom_lancer',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Puck',
  //   id: 13,
  //   name: 'npc_dota_hero_puck',
  //   primaryAttribute: 2,
  // },
  {
    fullName: "Butcher",
    id: 14,
    name: "butcher",
    primaryAttribute: 0,
  },
  // {
  //   complexity: 1,
  //   fullName: 'Razor',
  //   id: 15,
  //   name: 'npc_dota_hero_razor',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Sand King',
  //   id: 16,
  //   name: 'npc_dota_hero_sand_king',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Storm Spirit',
  //   id: 17,
  //   name: 'npc_dota_hero_storm_spirit',
  //   primaryAttribute: 2,
  // },
  {
    fullName: "Minos",
    id: 18,
    name: "minos",
    primaryAttribute: 0,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Tiny',
  //   id: 19,
  //   name: 'npc_dota_hero_tiny',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Vengeful Spirit',
  //   id: 20,
  //   name: 'npc_dota_hero_vengefulspirit',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Windranger',
  //   id: 21,
  //   name: 'npc_dota_hero_windrunner',
  //   primaryAttribute: 2,
  // },
  {
    fullName: "Father Sky",
    id: 22,
    name: "fathersky",
    primaryAttribute: 2,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Kunkka',
  //   id: 23,
  //   name: 'npc_dota_hero_kunkka',
  //   primaryAttribute: 0,
  // },
  {
    fullName: "Hestia",
    id: 25,
    name: "hestia",
    primaryAttribute: 2,
  },
  // {
  //   complexity: 1,
  //   fullName: 'Lich',
  //   id: 31,
  //   name: 'npc_dota_hero_lich',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Lion',
  //   id: 26,
  //   name: 'npc_dota_hero_lion',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Shadow Shaman',
  //   id: 27,
  //   name: 'npc_dota_hero_shadow_shaman',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Slardar',
  //   id: 28,
  //   name: 'npc_dota_hero_slardar',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Tidehunter',
  //   id: 29,
  //   name: 'npc_dota_hero_tidehunter',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Witch Doctor',
  //   id: 30,
  //   name: 'npc_dota_hero_witch_doctor',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Riki',
  //   id: 32,
  //   name: 'npc_dota_hero_riki',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Enigma',
  //   id: 33,
  //   name: 'npc_dota_hero_enigma',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Tinker',
  //   id: 34,
  //   name: 'npc_dota_hero_tinker',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Sniper',
  //   id: 35,
  //   name: 'npc_dota_hero_sniper',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Necrophos',
  //   id: 36,
  //   name: 'npc_dota_hero_necrolyte',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Warlock',
  //   id: 37,
  //   name: 'npc_dota_hero_warlock',
  //   primaryAttribute: 2,
  // },
  {
    fullName: "Darr",
    id: 38,
    name: "darr",
    primaryAttribute: 0,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Queen of Pain',
  //   id: 39,
  //   name: 'npc_dota_hero_queenofpain',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Venomancer',
  //   id: 40,
  //   name: 'npc_dota_hero_venomancer',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Faceless Void',
  //   id: 41,
  //   name: 'npc_dota_hero_faceless_void',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Wraith King',
  //   id: 42,
  //   name: 'npc_dota_hero_skeleton_king',
  //   primaryAttribute: 0,
  // },
  {
    fullName: "Melinoë",
    id: 43,
    name: "melinoe",
    primaryAttribute: 2,
  },
  // {
  //   complexity: 1,
  //   fullName: 'Phantom Assassin',
  //   id: 44,
  //   name: 'npc_dota_hero_phantom_assassin',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Pugna',
  //   id: 45,
  //   name: 'npc_dota_hero_pugna',
  //   primaryAttribute: 2,
  // },
  {
    fullName: "Calypso",
    id: 46,
    name: "calypso",
    primaryAttribute: 1,
  },
  // {
  //   complexity: 1,
  //   fullName: 'Viper',
  //   id: 47,
  //   name: 'npc_dota_hero_viper',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Luna',
  //   id: 48,
  //   name: 'npc_dota_hero_luna',
  //   primaryAttribute: 1,
  // },
  {
    fullName: "Cadmus",
    id: 49,
    name: "cadmus",
    primaryAttribute: 0,
  },
  // {
  //   complexity: 1,
  //   fullName: 'Dazzle',
  //   id: 50,
  //   name: 'npc_dota_hero_dazzle',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Clockwerk',
  //   id: 51,
  //   name: 'npc_dota_hero_rattletrap',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Leshrac',
  //   id: 52,
  //   name: 'npc_dota_hero_leshrac',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   // eslint-disable-next-line quotes
  //   fullName: "Nature's Prophet",
  //   id: 53,
  //   name: 'npc_dota_hero_furion',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Lifestealer',
  //   id: 54,
  //   name: 'npc_dota_hero_life_stealer',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Dark Seer',
  //   id: 55,
  //   name: 'npc_dota_hero_dark_seer',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Clinkz',
  //   id: 56,
  //   name: 'npc_dota_hero_clinkz',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Omniknight',
  //   id: 57,
  //   name: 'npc_dota_hero_omniknight',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Enchantress',
  //   id: 58,
  //   name: 'npc_dota_hero_enchantress',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Huskar',
  //   id: 59,
  //   name: 'npc_dota_hero_huskar',
  //   primaryAttribute: 0,
  // },
  {
    fullName: "Gaunt",
    id: 60,
    name: "gaunt",
    primaryAttribute: 0,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Broodmother',
  //   id: 61,
  //   name: 'npc_dota_hero_broodmother',
  //   primaryAttribute: 1,
  // },
  {
    fullName: "Sphinx",
    id: 62,
    name: "sphinx",
    primaryAttribute: 1,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Weaver',
  //   id: 63,
  //   name: 'npc_dota_hero_weaver',
  //   primaryAttribute: 1,
  // },
  {
    fullName: "Valac",
    id: 64,
    name: "valac",
    primaryAttribute: 2,
  },
  {
    fullName: "Bartok",
    id: 65,
    name: "bartok",
    primaryAttribute: 2,
  },
  // {
  //   complexity: 3,
  //   fullName: 'Chen',
  //   id: 66,
  //   name: 'npc_dota_hero_chen',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Spectre',
  //   id: 67,
  //   name: 'npc_dota_hero_spectre',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Doom',
  //   id: 69,
  //   name: 'npc_dota_hero_doom_bringer',
  //   primaryAttribute: 0,
  // },
  {
    fullName: "Hypothermia",
    id: 68,
    name: "hypothermia",
    primaryAttribute: 2,
  },
  // {
  //   complexity: 1,
  //   fullName: 'Ursa',
  //   id: 70,
  //   name: 'npc_dota_hero_ursa',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Spirit Breaker',
  //   id: 71,
  //   name: 'npc_dota_hero_spirit_breaker',
  //   primaryAttribute: 0,
  // },
  {
    fullName: "Manfred",
    id: 72,
    name: "manfred",
    primaryAttribute: 1,
  },
  {
    fullName: "Flamel",
    id: 73,
    name: "flamel",
    primaryAttribute: 0,
  },
  // {
  //   complexity: 3,
  //   fullName: 'Invoker',
  //   id: 74,
  //   name: 'npc_dota_hero_invoker',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Silencer',
  //   id: 75,
  //   name: 'npc_dota_hero_silencer',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Outworld Destroyer',
  //   id: 76,
  //   name: 'npc_dota_hero_obsidian_destroyer',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Lycan',
  //   id: 77,
  //   name: 'npc_dota_hero_lycan',
  //   primaryAttribute: 0,
  // },
  {
    fullName: "Bix",
    id: 78,
    name: "bix",
    primaryAttribute: 0,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Shadow Demon',
  //   id: 79,
  //   name: 'npc_dota_hero_shadow_demon',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 3,
  //   fullName: 'Lone Druid',
  //   id: 80,
  //   name: 'npc_dota_hero_lone_druid',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Chaos Knight',
  //   id: 81,
  //   name: 'npc_dota_hero_chaos_knight',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 3,
  //   fullName: 'Meepo',
  //   id: 82,
  //   name: 'npc_dota_hero_meepo',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Treant Protector',
  //   id: 83,
  //   name: 'npc_dota_hero_treant',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Ogre Magi',
  //   id: 84,
  //   name: 'npc_dota_hero_ogre_magi',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Undying',
  //   id: 85,
  //   name: 'npc_dota_hero_undying',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 3,
  //   fullName: 'Rubick',
  //   id: 86,
  //   name: 'npc_dota_hero_rubick',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Disruptor',
  //   id: 87,
  //   name: 'npc_dota_hero_disruptor',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Nyx Assassin',
  //   id: 88,
  //   name: 'npc_dota_hero_nyx_assassin',
  //   primaryAttribute: 1,
  // },
  {
    fullName: "Lullaby",
    id: 89,
    name: "lullaby",
    primaryAttribute: 1,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Keeper of the Light',
  //   id: 90,
  //   name: 'npc_dota_hero_keeper_of_the_light',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 3,
  //   fullName: 'Io',
  //   id: 91,
  //   name: 'npc_dota_hero_wisp',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 3,
  //   fullName: 'Visage',
  //   id: 92,
  //   name: 'npc_dota_hero_visage',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Slark',
  //   id: 93,
  //   name: 'npc_dota_hero_slark',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Medusa',
  //   id: 94,
  //   name: 'npc_dota_hero_medusa',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Troll Warlord',
  //   id: 95,
  //   name: 'npc_dota_hero_troll_warlord',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Centaur Warrunner',
  //   id: 96,
  //   name: 'npc_dota_hero_centaur',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Magnus',
  //   id: 97,
  //   name: 'npc_dota_hero_magnataur',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Timbersaw',
  //   id: 98,
  //   name: 'npc_dota_hero_shredder',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Bristleback',
  //   id: 99,
  //   name: 'npc_dota_hero_bristleback',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Tusk',
  //   id: 100,
  //   name: 'npc_dota_hero_tusk',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Skywrath Mage',
  //   id: 101,
  //   name: 'npc_dota_hero_skywrath_mage',
  //   primaryAttribute: 2,
  // },
  {
    fullName: "Pestilence",
    id: 102,
    name: "pestilence",
    primaryAttribute: 0,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Elder Titan',
  //   id: 103,
  //   name: 'npc_dota_hero_elder_titan',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Legion Commander',
  //   id: 104,
  //   name: 'npc_dota_hero_legion_commander',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Ember Spirit',
  //   id: 106,
  //   name: 'npc_dota_hero_ember_spirit',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 3,
  //   fullName: 'Earth Spirit',
  //   id: 107,
  //   name: 'npc_dota_hero_earth_spirit',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Terrorblade',
  //   id: 109,
  //   name: 'npc_dota_hero_terrorblade',
  //   primaryAttribute: 1,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Phoenix',
  //   id: 110,
  //   name: 'npc_dota_hero_phoenix',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 3,
  //   fullName: 'Oracle',
  //   id: 111,
  //   name: 'npc_dota_hero_oracle',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Techies',
  //   id: 105,
  //   name: 'npc_dota_hero_techies',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Winter Wyvern',
  //   id: 112,
  //   name: 'npc_dota_hero_winter_wyvern',
  //   primaryAttribute: 2,
  // },
  {
    fullName: "Zollo",
    id: 113,
    name: "zollo",
    primaryAttribute: 1,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Underlord',
  //   id: 108,
  //   name: 'npc_dota_hero_abyssal_underlord',
  //   primaryAttribute: 0,
  // },
  {
    fullName: "The Trickster",
    id: 114,
    name: "thetrickster",
    primaryAttribute: 1,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Pangolier',
  //   id: 120,
  //   name: 'npc_dota_hero_pangolier',
  //   primaryAttribute: 1,
  // },
  {
    fullName: "Thorne",
    id: 119,
    name: "thorne",
    primaryAttribute: 2,
  },
  // {
  //   complexity: 2,
  //   fullName: 'Grimstroke',
  //   id: 121,
  //   name: 'npc_dota_hero_grimstroke',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Mars',
  //   id: 129,
  //   name: 'npc_dota_hero_mars',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Void Spirit',
  //   id: 126,
  //   name: 'npc_dota_hero_void_spirit',
  //   primaryAttribute: 2,
  // },
  // {
  //   complexity: 1,
  //   fullName: 'Snapfire',
  //   id: 128,
  //   name: 'npc_dota_hero_snapfire',
  //   primaryAttribute: 0,
  // },
  // {
  //   complexity: 2,
  //   fullName: 'Hoodwink',
  //   id: 123,
  //   name: 'npc_dota_hero_hoodwink',
  //   primaryAttribute: 1,
  // },
  {
    fullName: "Celestia",
    id: 135,
    name: "celestia",
    primaryAttribute: 0,
  },
  {
    fullName: "Rory",
    id: 136,
    name: "rory",
    primaryAttribute: 0,
  },
];

export const SORTED_HERO_LIST = sortBy(HERO_LIST, (hero) => hero.name);

export const GROUPED_HERO_LIST_BY_ATTR = groupBy(
  HERO_LIST,
  (hero) => hero.primaryAttribute
);

export const GROUPED_HERO_LIST_BY_NAME = groupBy(
  HERO_LIST,
  (hero) => hero.name
);

export enum HeroAttackCapability {
  MELEE = 1,
  RANGED = 2,
}

export type HeroAbility = {
  id: number;
  name: string;
  name_loc: string;
  desc_loc: string;
  lore_loc: string;
  notes_loc: string[];
};

export const HeroRoleNames = [
  "Tank", // 0
  "Bruiser", // 1
  "Support", // 2
  "Healer", // 3
  "Melee Assassin", // 4
  "Ranged Assassin", // 5
];

export type HeroInfo = {
  agi_base: number;
  agi_gain: number;
  armor: number;
  attack_capability: HeroAttackCapability;
  attack_range: number;
  attack_rate: number;
  bio_loc: string;
  rarity: HeroRarity;
  damage_max: number;
  damage_min: number;
  health_regen: number;
  hype_loc: string;
  id: number;
  int_base: number;
  int_gain: number;
  magic_resistance: number;
  mana_regen: number;
  max_health: number;
  max_mana: number;
  movement_speed: number;
  name: string;
  name_loc: string;
  npe_desc_loc: string;
  order_id: number;
  primary_attr: HeroAttribute;
  str_base: number;
  str_gain: number;
  role_level: number;
  abilities: HeroAbility[];
};
