import { Create, Delete, Edit, View } from '@Components/Features/Actions'
import { AnnouncmentsPage } from '@Pages/Annoucement/page'

export const routers = [
	{ exact: false, Component: AnnouncmentsPage, path: '/' },
	{ exact: true, Component: Create, path: '/create' },
	{ exact: true, Component: Edit, path: '/edit?item=:id' },
	{ exact: true, Component: View, path: '/view?item=:id' },
	{ exact: true, Component: Delete, path: '/delete?item=:id' },
]
