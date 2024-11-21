import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { createInsertSchema } from "drizzle-zod";
import { z } from 'zod';
const tickets = pgTable('tickets', {
  id: serial('id').primaryKey(),
  gameday: text('gameDay').notNull(),
  name: text('age').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  membershipNumber: text('membershipNumber').notNull(),
  adress: text('adress').notNull(),
  others: text("ovrigt")
});

export const insertTicketsSchema = createInsertSchema(tickets, {
  name: z.string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be at most 50 characters long" }),
  gameday: z.string()
    .regex(/^\d{2}-\d{2}-\d{4}$/, { message: "Game day must be in the format DD-MM-YYYY" }),

    email: z.string().regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      { message: "Email must be a valid email address" }
    ),
  phone: z.string()
    .regex(/^\+\d{1,15}$/, { message: "Phone must be in international format starting with +" }),
  membershipNumber: z.string()
    .min(5, { message: "Membership number must be at least 5 characters long" })
    .max(20, { message: "Membership number must be at most 20 characters long" }),
  adress: z.string()
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(100, { message: "Address must be at most 100 characters long" }),
    others: z.string()
    .max(500, { message: "Others must be at most 500 characters long" })
    .optional() 
    .nullable() 
    .default(""), 
  
});

export default tickets;
