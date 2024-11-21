CREATE TABLE IF NOT EXISTS "podcast" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "podcasts" CASCADE;