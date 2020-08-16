import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { ViewAnnouncement } from '@UI/Molecules/Modals'

export const View = (): React.ReactElement => {
	const history = useHistory()
	const location = useLocation()
	const { state } = location
	const onClose = (): void => {
		history.push('/')
	}
	return <ViewAnnouncement onClose={onClose} initialValues={state} />
}
