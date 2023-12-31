import { type Location } from "@prisma/client";
import { categoryScore } from "./subscores/category";
import { distanceScore } from "./subscores/distance";
import { riskLevelScore } from "./subscores/riskLevel";
import { type Challenge } from "@/types/challenge";

export const getChallengeScore = (
  challenge: Challenge,
  userLocation: Location
): number => {
  let score = challenge.defaultScore ?? 50; // base score

  // add subscores
  score = categoryScore(score, challenge.category);
  score = distanceScore(score, userLocation, challenge.location);
  score = riskLevelScore(score, challenge.difficulty);

  // ! TWIST implementation
  const randomNum = Math.floor(Math.random() * 100) + 1;
  if (randomNum <= 10) {
    score = score / 10;
  }

  return score;
};
