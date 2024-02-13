import React from 'react'
import Link from 'next/link'

function Logo(): React.JSX.Element {
	return (
		<Link
			href="/"
			className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-3xl font-bold text-transparent hover:cursor-pointer"
		>
			FELIOS OPTIMIZER ADMIN
		</Link>
	)
}

export default Logo
