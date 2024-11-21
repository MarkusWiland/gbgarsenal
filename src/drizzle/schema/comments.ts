import { pgTable, serial, text } from 'drizzle-orm/pg-core';

 const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  title: text('age').notNull(),
  content: text('email').notNull(),
});



export default comments