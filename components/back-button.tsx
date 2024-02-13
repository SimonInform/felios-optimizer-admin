'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function BackButton() {
	const router = useRouter()

	return (
		<Button
			variant="link"
			className="p-0 text-muted-foreground"
			onClick={() => router.back()}
		>
			<ArrowLeft className="w-4 h-4 mr-1" />
			Back
		</Button>
	)
}

export default BackButton
