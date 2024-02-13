import type {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'
import KeycloakProvider from 'next-auth/providers/keycloak'
// Auth Providers
// import AzureADProvider from 'next-auth/providers/azure-ad'
// import EmailProvider from 'next-auth/providers/email'

// Database Adapter
// import prisma from '@/lib/prisma'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const authConfig = {
	// adapter: PrismaAdapter(prisma),
	providers: [
		KeycloakProvider({
			clientId: process.env.KEYCLOAK_ID,
			clientSecret: process.env.KEYCLOAK_SECRET,
			issuer: process.env.KEYCLOAK_ISSUER,
		}),
	],
	session: {
		strategy: 'jwt',
	},
	// pages: {
	// 	signIn: '/login/signin',
	// 	verifyRequest: '/login/email/verify',
	// 	error: '/login/error', // Error code passed in query string as ?error=
	// },
	// callbacks: {
	// 	authorized({ auth, request: { nextUrl } }) {
	// 		return !!auth?.user
	// 		// const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
	// 		// if (isOnDashboard) {
	// 		//     if (isLoggedIn) return true;
	// 		//     return false; // Redirect unauthenticated users to login page
	// 		// } else if (isLoggedIn) {
	// 		//     return Response.redirect(new URL('/dashboard', nextUrl));
	// 		// }
	// 		// return true;
	// 	},
	// },
	// callbacks: {
	//     session({ session, user }) {
	//         session.user.role = user.role
	//         return session
	//     }
	// }
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(
	...args:
		| [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return getServerSession(...args, authConfig)
}
