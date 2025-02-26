import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        isAdmin?: boolean;
    }

    interface Session extends DefaultSession {
        user: User;
    }
}
