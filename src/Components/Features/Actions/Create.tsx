import React from 'react'
import { Store } from 'antd/lib/form/interface'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { message } from 'antd'
import { CreateAnnouncement } from '@UI/Molecules/Modals'
import { AnnouncementActions } from '../../Pages/Annoucement/Model'

export const Create = (): React.ReactElement => {
	const history = useHistory()
	const dispatch = useDispatch()

	const onSubmit = (formData: Store): void => {
		const announcement = {
			title: formData.title,
			description: formData.description,
			createdAt: new Date().toLocaleString(),
			id: Date.now(),
		}
		dispatch(AnnouncementActions.createAnnouncement(announcement))
		history.push('/')
		message.success('Announcement created successful')
	}
	const onCancel = (): void => {
		history.push('/')
	}
	return <CreateAnnouncement onSubmit={onSubmit} onCancel={onCancel} />
}
