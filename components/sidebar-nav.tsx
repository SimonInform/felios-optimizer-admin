'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Nav } from '@/components/nav'
import { ResizablePanel } from '@/components/ui/resizable'
import { ILink } from '@/types/types'
import {
	ChevronRightSquare,
	Clock,
	Group,
	Home,
	Settings,
	Tablet,
	User,
	Users,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface ISidebarNavProps {
	defaultSize: number
	collapsedSize: number
	defaultCollapsed: boolean
}

const linksTop: ILink[] = [
	{
		title: 'Home',
		href: '/',
		icon: Home,
	},
	{
		title: 'Customers',
		href: '/customers',
		icon: Users,
	},
	{
		title: 'Logs',
		href: '/logs',
		icon: ChevronRightSquare,
	},
]

const linksBottom: ILink[] = [
	{
		title: 'Settings',
		href: '/settings',
		icon: Settings,
	},
]

function SidebarNav({
	defaultSize,
	collapsedSize,
	defaultCollapsed,
}: ISidebarNavProps): React.JSX.Element {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed)

	function handleCollapse(collapsed: boolean) {
		setIsCollapsed(collapsed)
		document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
			collapsed
		)}`
	}

	return (
		<ResizablePanel
			defaultSize={defaultSize}
			collapsedSize={collapsedSize}
			collapsible={true}
			minSize={15}
			maxSize={20}
			onCollapse={() => {
				handleCollapse(true)
			}}
			onExpand={() => {
				handleCollapse(false)
			}}
			className={cn(
				'flex flex-col justify-between',
				isCollapsed &&
					'min-w-[50px] transition-all duration-300 ease-in-out '
			)}
		>
			<div className="flex flex-col gap-4 py-2">
				<Nav isCollapsed={isCollapsed} links={linksTop} />
			</div>
			<Nav isCollapsed={isCollapsed} links={linksBottom} />
		</ResizablePanel>
	)
}

export default SidebarNav
