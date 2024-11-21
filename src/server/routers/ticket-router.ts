import { tickets } from "@/drizzle/schema";
import { insertTicketsSchema } from "@/drizzle/schema/tickets";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { db } from "../lib/db";
export const ticketsRouter = new Hono()
  .get("/", async (c) => {
    const data = await db.select().from(tickets);
    return c.json({ data });
  })
  .post(
    "/",
    clerkMiddleware(),
    zValidator("json", insertTicketsSchema.pick({
      name: true,
      gameday: true,
      email: true,
      phone: true,
      membershipNumber: true,
      adress: true,
      others: true,
    })),
    async (c) => {
      const auth = getAuth(c);
      const values = c.req.valid("json");

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const [data] = await db.insert(tickets).values({
        ...values, 
     
      }).returning();
 
      return c.json({ data });
    }
  )
  .get("/:id", (c) => c.json(`get ${c.req.param("id")}`));


