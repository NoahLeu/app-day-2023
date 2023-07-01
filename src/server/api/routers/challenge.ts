import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const challengeRouter = createTRPCRouter({
  getChallenge: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const { id } = input;

      const challenge = await ctx.prisma.challenge.findUnique({
        where: {
          id,
        },
      });

      if (!challenge) {
        throw new Error("Challenge not found");
      }

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

      const challenge = await ctx.prisma.challenge.findUnique({
        where: {
          id: challengeID,
        },
      });

      if (!challenge) {
        throw new Error("Challenge not found");
      }

      const challengeScore = challenge.defaultScore;

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
    .input(z.object({ userEmail: z.string().email() }))
    .mutation(async ({ input, ctx }) => {
      const { userEmail } = input;

      const user = await ctx.prisma.user.findUnique({
        where: {
          email: userEmail,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const challenges = await ctx.prisma.challenge.findMany();

      console.log(challenges);

      if (challenges.length === 0) {
        throw new Error("No challenges found");
      }

      let randomChallenge =
        challenges[Math.floor(Math.random() * challenges.length)];

      if (user.activeChallengeId) {
        // filter out challenges that the user is currently doing
        const filteredChallenges = challenges.filter((challenge) => {
          return user.activeChallengeId !== challenge.id;
        });

        if (filteredChallenges.length === 0) {
          throw new Error("No challenges found");
        }

        randomChallenge =
          filteredChallenges[
            Math.floor(Math.random() * filteredChallenges.length)
          ];
      }

      if (!randomChallenge) {
        throw new Error("No challenges found");
      }

      // update user active challenge
      const updatedUser = await ctx.prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          activeChallengeId: randomChallenge.id,
        },
      });

      return {
        status: 200,
        message: "New challenge found",
        challenge: randomChallenge,
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
