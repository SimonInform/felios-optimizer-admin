// import { withAuth } from 'next-auth/middleware'
// import { authConfig } from '@/lib/auth'
//
// // export default NextAuth(authConfig).auth
//
// export default withAuth({
// 	// Matches the pages config in `[...nextauth]`
// 	pages: authConfig.pages,
// })

export { default } from 'next-auth/middleware'

// import { withAuth } from 'next-auth/middleware'
//
// export default withAuth({
// 	// Matches the pages config in `[...nextauth]`
// 	pages: {
// 		signIn: '/login/signin',
// 		verifyRequest: '/login/email/verify',
// 		error: '/login/error', // Error code passed in query string as ?error=
// 	},
// })
//
// export const config = {
// 	matcher: [
// 		'/((?!api|_next/static|_next/image|.png).*)|Microsoft_icon.svg',
// 		'/',
// 	],
// }
