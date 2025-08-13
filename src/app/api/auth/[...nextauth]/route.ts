import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/web/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email_or_number: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          if (!res.ok) return null;

          const user = await res.json();
          return user; // must return an object or null
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  // session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.token = user.token; // if backend returns JWT
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = {
          id: typeof token.id === "string" ? token.id : undefined,
          email: token.email,
          name: token.name,
          token: typeof token.token === "string" ? token.token : undefined,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // optional custom page
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
