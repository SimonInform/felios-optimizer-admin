'use client'

import React from 'react'
import { Loader2, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

function LogoutButton() {
	const [loading, setLoading] = React.useState<boolean>(false)
	function logout() {
		setLoading(true)
		signOut({ callbackUrl: '/' }).then(() => {
			setLoading(false)
		})
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => logout()}
			disabled={loading}
		>
			{loading ? (
				<div className="mr-2 flex items-center justify-center">
					<Loader2 className="animate-spin" />
				</div>
			) : (
				<LogOut />
			)}
		</Button>
	)
}

export default LogoutButton
