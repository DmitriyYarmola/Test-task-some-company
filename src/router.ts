import { Create, Delete, Edit, View } from '@Components/Features/Actions'
import { AnnouncmentsPage } from '@Pages/Annoucement/page'

export const routers = [{ exact: false, Component: AnnouncmentsPage, path: '/' }]

export const modalRouters = [
	{ exact: false, Component: Create, path: '/create' },
	{ exact: true, Component: Edit, path: '/edit' },
	{ exact: true, Component: View, path: '/view' },
	{ exact: true, Component: Delete, path: '/delete' },
]
