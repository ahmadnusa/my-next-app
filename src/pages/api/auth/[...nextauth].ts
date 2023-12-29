import { signIn, signInWithGoogle } from "@/utils/firebase/service";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn({ email });

        if (user) {
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      if (account?.provider === "google") {
        await signInWithGoogle(
          {
            fullname: profile.name,
            email: profile.email,
            image: profile.picture,
            role: "user",
            type: "google",
          },
          (res: any) => {
            if (res.status) {
              token.email = profile.email;
              token.fullname = profile.name;
              token.role = "user";
              token.image = profile.picture;
              token.type = "google";
            }
          }
        );
      }
      return token;
    },
    session({ session, token }: any) {
      if ("email" in token) session.user.email = token.email;
      if ("fullname" in token) session.user.fullname = token.fullname;
      if ("image" in token) session.user.image = token.image;
      if ("role" in token) session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
