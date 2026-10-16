import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import type {NextAuthConfig} from "next-auth";

export default {
    secret: process.env.AUTH_SECRET ?? process.env.BETTER_AUTH_SECRET,
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
} satisfies NextAuthConfig;
