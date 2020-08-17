import React from 'react'
import { useHistory, useLocation, Redirect } from 'react-router'
import { ViewAnnouncement } from '@UI/Molecules/Modals'

export const View = (): React.ReactElement => {
	const history = useHistory()
	const location = useLocation()
	const { state } = location
	if (!state) return <Redirect to='/' />
	const onClose = (): void => {
		history.push('/')
	}

	const { id, title, description, createdAt, similar } = state
	return (
		<ViewAnnouncement
			onClose={onClose}
			initialValues={{ id, title, description, createdAt }}
			similar={similar}
		/>
	)
}
