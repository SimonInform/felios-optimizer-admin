import React from 'react'
import Link from 'next/link'
import { Translate } from '@/components/translate'

function Footer(): React.JSX.Element {
	return (
		<div className="flex flex-col items-center justify-between gap-4 p-4 text-xs text-secondary-foreground sm:flex-row">
			© Copyright Info here
			<div className="flex gap-4">
				<p>V1.0.0 (2024-02)</p>
				<Link
					href="/imprint"
					target="_blank"
					className="hover:underline"
				>
					<Translate dictKey="impressum" />
				</Link>
				<Link
					href="/privacy"
					target="_blank"
					className="hover:underline"
				>
					<Translate dictKey="privacy" />
				</Link>
			</div>
		</div>
	)
}

export default Footer
