import React from 'react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface IFormCardProps {
	title?: string
	children?: React.ReactNode
}

function FormCard({ title, children }: IFormCardProps): React.JSX.Element {
	return (
		<Card>
			<CardHeader className="flex flex-col gap-2">
				<CardTitle>
					<h2 className="text-2xl font-bold">{title}</h2>
				</CardTitle>
				<Separator />
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter>
				<Button className="w-full">
					Next <ArrowRight className="h-4 w-4 ml-1" />{' '}
				</Button>{' '}
			</CardFooter>
		</Card>
	)
}

export default FormCard
