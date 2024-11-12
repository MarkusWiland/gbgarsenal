import { posts } from "@/drizzle/schema";
import { clerkMiddleware } from "@hono/clerk-auth";
import { Hono } from "hono";
import { db } from "../lib/db";

export const postsRouter = new Hono()
    .get("/", async (c) => {
        const data = await db.select().from(posts)
        return c.json({ data });
        })
    .post('/', clerkMiddleware(), (c) => c.json('create an author', 201))
    .get('/:id', (c) => c.json(`get ${c.req.param('id')}`))


