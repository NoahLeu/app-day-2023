const knownLevelScores = [0.5, 0.7, 0.9, 1.0, 1.2, 1.4, 1.6, 1.8, 2.1, 2.4];

export const riskLevelScore = (score: number, level: number) => {
  if (level < 1 || level > 10) throw new Error("Invalid score");

  const multiplier = knownLevelScores[level - 1] ?? 0;

  return score * multiplier;
};
