import { HeroAttribute, HeroRarity } from "../constants/hero";

export const getHeroAttributeName = (attribute: HeroAttribute) => {
  if (attribute === HeroAttribute.STRENTH) {
    return "Strength";
  }
  if (attribute === HeroAttribute.AGILITY) {
    return "Agility";
  }
  return "Intelligence";
};

export const getHeroRarityName = (rarity: HeroRarity) => {
  if (rarity === 0) {
    return "Common";
  }
  if (rarity === 1) {
    return "Rare";
  }
  if (rarity === 2) {
    return "Mythical";
  }
  if (rarity === 3) {
    return "Legendary";
  }
  return "Immortal";
};
