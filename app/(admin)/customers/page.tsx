import React from 'react'
import { DataTable } from '@/components/ui/data-table/data-table'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

const columns = [
	{
		accessorKey: 'name',
		header: 'Customer Name',
	},
	{
		accessorKey: 'email',
		header: 'Contact E-Mail',
	},
	{
		accessorKey: 'licenses',
		header: 'Number of Licenses',
	},
]

const data = [
	{
		name: 'INNOQ Deutschland GmbH',
		email: 'mail@innoq.de',
		licenses: 5,
	},
	{
		name: 'Taschenmesser Schweiz GmbH',
		email: 'info@taschenmesser-schweiz.eu',
		licenses: 3,
	},
]

interface IPageProps {}
function Page() {
	return (
		<div className="flex flex-col p-6 pt-8 gap-3">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold">Customers</h1>
				<Link href="/customers/new">
					<Button>
						<PlusCircle className="h-6 w-6 mr-2" />
						<span>Add Customer</span>
					</Button>
				</Link>
			</div>
			<DataTable formId={2} columns={columns} data={data} />
		</div>
	)
}

export default Page
