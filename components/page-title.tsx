import React from 'react'
import { Translate } from '@/components/translate'

interface IPageTitleProps {
	title?: string
}

function PageTitle({ title }: IPageTitleProps): React.JSX.Element {
	return (
		<h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
			{title}
		</h1>
	)
}

export default PageTitle
