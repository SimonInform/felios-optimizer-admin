import React from 'react'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import Sidebar from '@/components/customer/new-customer/sidebar'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import BackButton from '@/components/back-button'
import PageTitle from '@/components/page-title'
import FormCard from '@/components/customer/new-customer/form-card'
import { Input } from 'postcss'

function Page() {
	return (
		<div className="h-full w-full grow container pt-10 p-6 flex flex-col">
			<div className="flex flex-col gap-2 items-start justify-start pb-4">
				<BackButton />
				<PageTitle title="Create new Customer." />
				<p className="text-sm text-muted-foreground">
					Create a new customer and adjust some settings.
				</p>
			</div>
			<ResizablePanelGroup
				direction="horizontal"
				className="h-full grow w-full pt-4"
			>
				<ResizablePanel
					defaultSize={25}
					maxSize={40}
					className="hidden md:block"
				>
					<Sidebar />
				</ResizablePanel>
				{/*<ResizableHandle />*/}
				<ResizablePanel defaultSize={75}>
					<div className="flex h-full w-full flex-col md:p-6 gap-10 pt-6 overflow-auto">
						<FormCard title="Customer Details">
							<div>
								Add or adjust customer details here:
								<p className="mt-2 text-muted-foreground text-xs">
									Customer Name
								</p>
								<input className="border rounded-md bg-input p-2" />
							</div>
						</FormCard>
						<FormCard title="Authentifizierung">
							<p>Configure Keycloak here</p>
						</FormCard>
						<FormCard title="Optimizer Params">
							<p>Configure Optimizer params here</p>
						</FormCard>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}

export default Page
