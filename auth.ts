import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getAccountByUserId, getUserById } from "./features/auth/actions";

export const { auth, handlers, signIn, signOut } = NextAuth({
    callbacks: {
        async signIn({ user, account, profile }) {
            if (!user || !account) return false;

            const existingUser = await db.user.findUnique({
                where: { email: user.email! }
            });

            if (!existingUser) {
                const newUser = await db.user.create({
                    data: {
                        email: user.email!,
                        name: user.name,
                        image: user.image,

                        accounts: {
                            create: {
                                type: account.type,
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                                refreshtoken: account.refresh_token,
                                accesstoken: account.access_token,
                                expiresat: account.expires_at,
                                tokenType: account.token_type,
                                scope: account.scope,
                                idtoken: account.id_token,
                                sessionstate: account.session_state
                            }
                        }
                    }
                });

                if (!newUser) {
                    return false;
                }
            } else {
                const existingAccount = await db.accounnt.findUnique({
                    where: {
                        provider_providerAccountId: {
                            provider: account.provider,
                            providerAccountId: account.providerAccountId
                        }
                    }
                });

                if (!existingAccount) {
                    await db.user.create({
                        data: {
                            email: user.email!,
                            name: user.name,
                            image: user.image,

                            accounts: {
                                create: {
                                    type: account.type,
                                    provider: account.provider,
                                    providerAccountId: account.providerAccountId,
                                    refreshtoken: account.refresh_token,
                                    accesstoken: account.access_token,
                                    expiresat: account.expires_at,
                                    tokenType: account.token_type,
                                    scope: account.scope,
                                    idtoken: account.id_token,
                                    sessionstate: account.session_state
                                }
                            }
                        }
                    });
                }
            }

            return true;
        },

        async jwt({ token, user, account }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;

            const existingAccount = await getAccountByUserId(existingUser.id);

            token.name = existingUser.name;
            token.email = existingUser.email;
            token.role = existingUser.role;

            return token;
        },

        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.sub && session.user) {
                session.user.role = token.role
            }

            return session;
        }
    },
    secret: process.env.AUTH_SECRET,
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },

    ...authConfig,
});