const knownCategories = {
  sport: 1.3,
  travel: 1.1,
  food: 1,
  sightseeing: 0.9,
};

export const categoryScore = (score: number, category: string) => {
  const index = Object.keys(knownCategories).indexOf(category);

  if (index === -1) return score;

  const multiplier: number = Object.values(knownCategories)[index] ?? 1;

  return score * multiplier;
};
