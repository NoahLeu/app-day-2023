import type Challenge from "@/pages/challenge";
import { type Location } from "@prisma/client";
import { categoryScore } from "./subscores/category";
import { distanceScore } from "./subscores/distance";
import { riskLevelScore } from "./subscores/riskLevel";

export const getChallengeScore = (
  challenge: Challenge,
  userLocation: Location
) => {
  let score = challenge.defaultScore ?? 50; // base score

  // add subscores
  score = categoryScore(score, challenge.category);
  score = distanceScore(score, userLocation, challenge.location);
  score = riskLevelScore(score, challenge.difficulty);

  return score;
};
