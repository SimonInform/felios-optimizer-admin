import React from 'react'
import { ResizableHandle, ResizablePanel } from '@/components/ui/resizable'
import { cookies } from 'next/headers'
import ResizablePanelGroupLayout from '@/components/resizable-panel-group-layout'
import SidebarNav from '@/components/sidebar-nav'
import { TooltipProvider } from '@/components/ui/tooltip'

interface ILayoutProps {
	children: React.ReactNode
}

function Layout({ children }: ILayoutProps): React.JSX.Element {
	const layout = cookies().get('react-resizable-panels:layout')
	const collapsed = cookies().get('react-resizable-panels:collapsed')

	const isCollapsed = collapsed ? JSON.parse(collapsed.value) : false
	const defaultLayout = layout ? JSON.parse(layout.value) : [20, 80]

	return (
		<TooltipProvider delayDuration={0}>
			<ResizablePanelGroupLayout>
				<SidebarNav
					defaultSize={defaultLayout[0]}
					collapsedSize={4}
					defaultCollapsed={isCollapsed}
				/>
				<ResizableHandle />
				<ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
					{children}
				</ResizablePanel>
			</ResizablePanelGroupLayout>
		</TooltipProvider>
	)
}

export default Layout
