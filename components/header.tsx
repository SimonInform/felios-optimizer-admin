import React from 'react'
import { ThemeModeToggle } from '@/components/theme-toggle'
import Logo from '@/components/logo'
import LogoutButton from '@/components/logout-button'

function Header() {
	return (
		<nav className="sticky top-0 z-20 flex h-[60px] items-center justify-between border-b border-border bg-background/60 px-4 py-2 backdrop-blur">
			<div className="flex h-[80%]">
				<Logo />
			</div>
			<div className="flex items-center gap-2">
				<ThemeModeToggle />
				<LogoutButton />
			</div>
		</nav>
	)
}

export default Header
