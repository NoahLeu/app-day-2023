import type Challenge from "@/components/challenge";
import { getChallengeScore } from "../scoring/score";

export type ChallengeResult = {
  challenge: Challenge | null;
  score: number;
};

export const getNewChallenge = (
  challenges: Challenge[],
  userLocation: Location
): ChallengeResult | null => {
  const scores = challenges.map((challenge) => {
    const score = getChallengeScore(challenge, userLocation);
    return { challenge, score };
  });

  if (!scores || scores.length === 0) return null;

  return {
    challenge: scores[0]?.challenge ?? null,
    score: scores[0]?.score ?? 0,
  };
};
