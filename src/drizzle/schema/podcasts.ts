import { pgTable, serial, text } from 'drizzle-orm/pg-core';

const podcasts = pgTable('podcasts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  clerkUserId: text("clerkUserId").notNull(),
  url: text("url").notNull(),
});



export default podcasts;
