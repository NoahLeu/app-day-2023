import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { hash, verify } from "argon2";

export const authRouter = createTRPCRouter({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { email, username, password } = input;

      const existsEmailOrUsername = await ctx.prisma.user.findFirst({
        where: {
          OR: [
            {
              email,
            },
            {
              username,
            },
          ],
        },
      });

      if (existsEmailOrUsername) {
        throw new Error("Email or username already exists");
      }
      const hashedPassword = await hash(password);

      const user = await ctx.prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
      });

      return {
        status: 201,
        message: "User created",
        user,
      };
    }),

  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { email, password } = input;

      const user = await ctx.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error("Invalid credentials");
      }

      const validPassword = await verify(user.password || "", password);

      if (!validPassword) {
        throw new Error("Invalid credentials");
      }

      return {
        user,
      };
    }),
});
