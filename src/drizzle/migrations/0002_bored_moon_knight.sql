CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"clerkUserId" text NOT NULL,
	"age" text NOT NULL,
	"email" text NOT NULL
);
