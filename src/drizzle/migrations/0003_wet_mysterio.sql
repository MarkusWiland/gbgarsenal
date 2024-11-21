CREATE TABLE IF NOT EXISTS "podcasts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"clerkUserId" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tickets" (
	"id" serial PRIMARY KEY NOT NULL,
	"gameDay" text NOT NULL,
	"clerkUserId" text NOT NULL,
	"age" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"membershipNumber" text NOT NULL,
	"adress" text NOT NULL,
	"ovrigt" text
);
