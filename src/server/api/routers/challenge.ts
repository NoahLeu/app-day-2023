import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Challenge, Location } from "@prisma/client";
import {
  ChallengeResult,
  getNewChallenge,
} from "@/server/recommendation/challengeChoice";

export const challengeRouter = createTRPCRouter({
  getChallenge: publicProcedure
    .input(z.object({ id: z.string(), email: z.string().email() }))
    .query(async ({ input, ctx }) => {
      const { id, email } = input;

      const challenge = await ctx.prisma.challenge.findUnique({
        where: {
          id,
        },
      });

      if (!challenge) {
        throw new Error("Challenge not found");
      }

      const user = await ctx.prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      challenge.defaultScore =
        user.activeChallengeScore != null
          ? user.activeChallengeScore
          : challenge.defaultScore;

      return {
        status: 200,
        message: "Challenge found",
        challenge,
      };
    }),

  getChallenges: publicProcedure
    .input(z.object({}))
    .query(async ({ input, ctx }) => {
      const challenges = await ctx.prisma.challenge.findMany();

      return {
        status: 200,
        message: "Challenges found",
        challenges,
      };
    }),

  completeChallenge: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        challengeID: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { email, challengeID } = input;

      const user = await ctx.prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (!user.activeChallengeScore) {
        throw new Error("User has no active challenge");
      }

      const challengeScore: number = user.activeChallengeScore as number;

      // update user score
      const updatedUser = await ctx.prisma.user.update({
        where: {
          email: email,
        },
        data: {
          challenge_score: user.challenge_score + challengeScore,
          activeChallengeId: null,
        },
      });

      return {
        status: 200,
        message: "Challenge completed",
        user: updatedUser,
      };
    }),

  getNewChallenge: publicProcedure
    .input(
      z.object({
        userEmail: z.string().email(),
        riskLevel: z.number().gt(0).lt(11),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { userEmail, riskLevel } = input;

      const user = await ctx.prisma.user.findUnique({
        where: {
          email: userEmail,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const challenges = await ctx.prisma.challenge.findMany();

      if (challenges.length === 0) {
        throw new Error("No challenges found");
      }

      const locationLinkedChallenges: Challenge[] = [];

      for (let i = 0; i < challenges.length; i++) {
        const challenge = challenges[i];

        if (!challenge?.locationId) {
          throw new Error("Challenge has no location");
        }

        const location = await ctx.prisma.location.findUnique({
          where: {
            id: challenge.locationId,
          },
        });

        if (!location) {
          throw new Error("Location not found");
        }

        locationLinkedChallenges.push({
          ...challenge,
          location,
        });
      }

      let activeChallenge: Challenge | null = null;
      let finalChallenges = locationLinkedChallenges;

      if (user.activeChallengeId) {
        activeChallenge = await ctx.prisma.challenge.findUnique({
          where: {
            id: user.activeChallengeId,
          },
        });

        if (!activeChallenge) {
          throw new Error("Active challenge not found");
        }

        // filter out challenges that the user is currently doing
        finalChallenges = locationLinkedChallenges.filter((challenge) => {
          return user.activeChallengeId !== challenge.id;
        });

        if (finalChallenges.length === 0) {
          throw new Error("No challenges found");
        }
      }

      const userLocation: Location | null =
        await ctx.prisma.location.findUnique({
          where: {
            id: user.userLocationId,
          },
        });

      if (!userLocation) {
        throw new Error("User location not found");
      }

      const chosenChallengePair: ChallengeResult | null = getNewChallenge(
        finalChallenges,
        userLocation,
        riskLevel,
        activeChallenge
      );

      if (
        !chosenChallengePair ||
        chosenChallengePair.challenge === null ||
        chosenChallengePair.score === null
      ) {
        throw new Error("No challenges found");
      }

      // update user active challenge
      const updatedUser = await ctx.prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          activeChallengeId: chosenChallengePair.challenge.id,
          activeChallengeScore: chosenChallengePair.score,
          riskLevel: riskLevel,
        },
      });

      return {
        status: 200,
        message: "New challenge found",
        challenge: chosenChallengePair.challenge,
        user: updatedUser,
      };
    }),

  getPlayerScores: publicProcedure
    .input(z.object({}))
    .query(async ({ input, ctx }) => {
      const users = await ctx.prisma.user.findMany({
        select: {
          username: true,
          challenge_score: true,
        },
      });

      return {
        status: 200,
        message: "Player scores found",
        users,
      };
    }),
});
