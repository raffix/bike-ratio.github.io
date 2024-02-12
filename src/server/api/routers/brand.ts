import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const brandRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.brand.create({
        data: {
          name: input.name,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.brand.findMany({
      orderBy: { 
        name: 'asc' 
      },
    });
  }),
});
