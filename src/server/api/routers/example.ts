import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .meta({ openapi: { method: "GET", path: "/hello" } })
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getSecretMessage: protectedProcedure
    .meta({ openapi: { method: "GET", path: "/secret" } })
    .query(() => {
      return "you can now see this secret message!";
    }),
});
