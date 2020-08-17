import React from 'react'
import { useLocation, useHistory, Redirect } from 'react-router'
import { useDispatch } from 'react-redux'
import { message } from 'antd'
import { DeleteAnnouncement } from '@UI/Molecules/Modals'
import { AnnouncementActions } from '@Pages/Annoucement/Model'

export const Delete = (): React.ReactElement => {
	const location = useLocation()
	const history = useHistory()
	const dispatch = useDispatch()
	const { state } = location
	if (!state) return <Redirect to='/' />
	const onDone = (): void => {
		dispatch(AnnouncementActions.deleteAnnouncement(state.id))
		history.push('/')
		message.success('Announcement deleted successful')
	}
	const onCancel = (): void => {
		history.push('/')
	}
	return <DeleteAnnouncement onDone={onDone} onCancel={onCancel} />
}
