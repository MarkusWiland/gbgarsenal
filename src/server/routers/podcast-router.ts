
import { podcast } from "@/drizzle/schema";
import { asc } from "drizzle-orm";
import { Hono } from "hono";
import { db } from "../lib/db";
export const podcastRouter = new Hono()
  .get("/", async (c) => {
    const offset = (parseInt(c.req.query("offset") || "0", 10) - 1 * limit); // Standardvärde: 0
    const limit = parseInt(c.req.query("limit") || "10", 10);  // Standardvärde: 3

    // Validera offset och limit
    if (isNaN(offset) || offset < 0 || isNaN(limit) || limit <= 0) {
      return c.json({ error: "Invalid offset or limit" }, 400);
    }
    const data = await db.select().from(podcast).offset(offset).limit(limit).orderBy(asc(podcast.title))
    return c.json({ data });
  })
  

