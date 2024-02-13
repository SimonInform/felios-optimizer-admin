import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/provider/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Admin Tools',
	description: 'Tools for managing admin stuff.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				>
					<div className="flex min-h-screen min-w-full flex-col bg-background">
						<Header />
						<main className="flex w-full grow items-center justify-center">
							{children}
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
