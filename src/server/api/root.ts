import { exampleRouter } from "@/server/api/routers/example";
import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "./routers/auth";
import { challengeRouter } from "./routers/challenge";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  challenge: challengeRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
