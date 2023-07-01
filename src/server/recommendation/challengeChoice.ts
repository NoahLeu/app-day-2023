import { type Challenge } from "@/types/challenge";
import { getChallengeScore } from "../scoring/score";
import { getDistance } from "../scoring/subscores/distance";

export type ChallengeResult = {
  challenge: Challenge | null;
  score: number;
};

export const getNewChallenge = (
  challenges: Challenge[],
  userLocation: Location,
  activeChallenge: Challenge | null
): ChallengeResult | null => {
  if (!challenges || challenges.length === 0) return null;

  const scores = challenges.map((challenge: Challenge) => {
    const score: number = getChallengeScore(challenge, userLocation);
    return { challenge, score };
  });

  const shuffleChallenges: ChallengeResult[] = [];

  if (activeChallenge) {
    // add every element that is a different category than the active Challenge twice and the same once to the array
    scores.forEach((challenge) => {
      if (challenge.challenge.category !== activeChallenge.category) {
        shuffleChallenges.push(challenge);
        shuffleChallenges.push(challenge);
        shuffleChallenges.push(challenge);
        shuffleChallenges.push(challenge);
      } else {
        shuffleChallenges.push(challenge);
        shuffleChallenges.push(challenge);
      }

      if (challenge.challenge.difficulty !== activeChallenge.difficulty) {
        shuffleChallenges.push(challenge);
        shuffleChallenges.push(challenge);
        shuffleChallenges.push(challenge);
      } else {
        shuffleChallenges.push(challenge);
        shuffleChallenges.push(challenge);
      }
    });
  }

  // add every element that is a different category than the active Challenge twice and the same once to the array
  scores.forEach((challenge) => {
    const distance = getDistance(userLocation, challenge.challenge.location);

    if (distance >= 100) {
      shuffleChallenges.push(challenge);
      shuffleChallenges.push(challenge);
      shuffleChallenges.push(challenge);
    } else if (distance >= 50) {
      shuffleChallenges.push(challenge);
      shuffleChallenges.push(challenge);
    } else {
      shuffleChallenges.push(challenge);
    }
  });

  // shuffle the array
  shuffleChallenges.sort(() => Math.random() - 0.5);

  // return the first element
  return {
    challenge: scores[0]?.challenge ?? null,
    score: scores[0]?.score ?? 0,
  };
};
