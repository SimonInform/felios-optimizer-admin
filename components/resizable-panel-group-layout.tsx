'use client'

import React from 'react'
import { ResizablePanelGroup } from '@/components/ui/resizable'

interface IResizablePanelGroupProps {
	children: React.ReactNode
}
function ResizablePanelGroupLayout({
	children,
}: IResizablePanelGroupProps): React.JSX.Element {
	return (
		<ResizablePanelGroup
			direction="horizontal"
			onLayout={(sizes: number[]) => {
				document.cookie = `react-resizable-panels:layout=${JSON.stringify(
					sizes
				)}`
			}}
			style={{ height: 'calc(100vh - 110px)' }}
		>
			{children}
		</ResizablePanelGroup>
	)
}

export default ResizablePanelGroupLayout
