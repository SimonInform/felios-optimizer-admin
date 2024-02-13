import React from 'react'
import StatusBig from '@/components/status-big'
import { LampDemo } from '@/components/ui/lamp'

function Page() {
	return (
		<div className="p-4 flex flex-col gap-4 container">
			<div className="flex flex-col gap-4 items-center justify-center">
				<LampDemo />
			</div>
		</div>
	)
}

export default Page
