ALTER TABLE "podcasts" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "podcasts" DROP COLUMN IF EXISTS "clerkUserId";