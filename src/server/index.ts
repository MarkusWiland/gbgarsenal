import { Hono } from "hono"
import { cors } from "hono/cors"
import { handle } from "hono/vercel"
import { booksRouter } from "./routers/books-router"
import { postsRouter } from "./routers/post-router"

const app = new Hono().basePath("/api").use(cors())

/**
 * This is the primary router for your server.
 *
 * All routers added in /server/routers should be manually added here.
 */
const appRouter = app.route("/posts", postsRouter).route('/books', booksRouter)

// The handler Next.js uses to answer API requests
export const httpHandler = handle(app)

/**
 * (Optional)
 * Exporting our API here for easy deployment
 *
 * Run `npm run deploy` for one-click API deployment to Cloudflare's edge network
 */
export default app

// export type definition of API
export type AppType = typeof appRouter