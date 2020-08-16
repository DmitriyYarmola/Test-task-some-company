import React from 'react'
import { useLocation, useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { DeleteAnnouncement } from '@UI/Molecules/Modals'
import { AnnouncementActions } from '../../Pages/Annoucement/Model'

export const Delete = (): React.ReactElement => {
	const location = useLocation()
	const history = useHistory()
	const dispatch = useDispatch()
	const { state } = location

	const onDone = (): void => {
		dispatch(AnnouncementActions.deleteAnnouncement(state.id))
		history.push('/')
	}
	const onCancel = (): void => {
		history.push('/')
	}
	return <DeleteAnnouncement onDone={onDone} onCancel={onCancel} />
}
