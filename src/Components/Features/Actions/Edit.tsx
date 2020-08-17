import React from 'react'
import { Store } from 'antd/lib/form/interface'
import { useHistory, useLocation, Redirect } from 'react-router'
import { useDispatch } from 'react-redux'
import { message } from 'antd'
import { EditAnnouncement } from '@UI/Molecules/Modals'
import { AnnouncementActions } from '../../Pages/Annoucement/Model'

export const Edit = (): React.ReactElement => {
	const history = useHistory()
	const location = useLocation()
	const dispatch = useDispatch()
	const { state } = location
	if (!state) return <Redirect to='/' />
	const onEdit = (formData: Store): void => {
		const { title, description } = formData
		const announcement = {
			title,
			description,
			id: state.initialValues.id,
			createdAt: state.initialValues.createdAt,
		}
		dispatch(AnnouncementActions.editAnnouncement(announcement))
		history.push('/')
		message.success('Announcement edited successful')
	}
	const onCancel = (): void => {
		history.push('/')
	}
	return (
		<EditAnnouncement
			onSubmit={onEdit}
			onCancel={onCancel}
			initialValues={state.initialValues}
		/>
	)
}
