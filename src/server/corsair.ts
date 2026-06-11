import "dotenv/config";
import { Pool } from "pg";
import { createCorsair } from "corsair";
import { gmail } from "@corsair-dev/gmail";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const corsair = createCorsair({
    plugins: [
        gmail({
        authType: "oauth_2",
        credentials: {
            clientId: process.env.GMAIL_CLIENT_ID!,
            clientSecret: process.env.GMAIL_CLIENT_SECRET!,
            accessToken: process.env.GMAIL_ACCESS_TOKEN!,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN!,
        },
        }),
    ],
    database: pool,
    kek: process.env.CORSAIR_KEK!,
    multiTenancy: false,
});
