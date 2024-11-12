import { hc } from "hono/client";

import { AppType } from "@/server/index";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!)