import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInUser } from "./features/auth/services/signInUser";
import { signInSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null;

                const { email, password } =
                    await signInSchema.parseAsync(credentials);

                user = await signInUser({
                    email,
                    password,
                });

                if (!user) {
                    throw new Error("Invalid credentials.");
                }

                return user;
            },
        }),
    ],
});
