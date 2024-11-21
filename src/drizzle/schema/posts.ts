import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { createInsertSchema } from "drizzle-zod";
const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  clerkUserId: text("clerkUserId").notNull(),
  title: text('age').notNull(),
  content: text('email').notNull(),
});

export const insertPostsSchema = createInsertSchema(posts);

export default posts;
