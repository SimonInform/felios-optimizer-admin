import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

function StatusBig() {
	return (
		<Card className="max-w-3xl w-full bg-muted">
			<CardContent>
				<CheckCircle className="w-24 h-24 text-green-500" />
				<CardTitle>Status</CardTitle>
			</CardContent>
		</Card>
	)
}

export default StatusBig
