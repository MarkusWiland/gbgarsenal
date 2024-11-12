import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  title: text('age').notNull(),
  content: text('email').notNull(),
});



