import { pgTable, serial, text } from 'drizzle-orm/pg-core';

const podcast = pgTable('podcast', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
});



export default podcast;
