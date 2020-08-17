/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { Announcement } from '@Components/UI/Molecules'
import { searchSimilarAnnouncement } from '@Components/Lib/searchSimilarAnnouncement'
import { Button } from '@UI/Atoms'
import { AnnouncementType } from '@Pages/Annoucement/Model'
import { Search } from './Actions'

const Items = styled.div`
	display: grid;
	justify-content: center;
`

const Actions = styled.div`
	display: grid;
	grid-template-columns: max-content 300px;
	justify-content: center;
	column-gap: 600px;
	margin-bottom: 25px;
`

const ItemsWrapped = styled.div`
	display: grid;
	justify-content: center;
`

const Message = styled.div`
	font-size: 25px;
`

interface PropsType {
	announcements: AnnouncementType[]
}
export const Announcements: React.FC<PropsType> = ({
	announcements,
}): React.ReactElement => {
	const [searchTerm, setSearchTerm] = useState('')
	const [results, setResults] = useState<AnnouncementType[]>([])
	const history = useHistory()

	useEffect(() => {
		const results = announcements.filter((announcement) =>
			announcement.title.toLowerCase().includes(searchTerm)
		)
		setResults(results)
	}, [announcements, searchTerm])

	const onEdit = (id: number, title: string, description: string): void => {
		history.push({
			pathname: `/edit`,
			state: { initialValues: { id, title, description } },
		})
	}
	const onDelete = (id: number): void => {
		history.push({ pathname: `/delete`, state: { id } })
	}

	const onView = useCallback(
		(id: number, title: string, description: string, createdAt: string) => {
			const similar = announcements.filter((announcement) =>
				searchSimilarAnnouncement(id, title, description, announcement)
			)
			history.push({
				pathname: `/view`,
				state: { id, title, description, createdAt, similar },
			})
		},
		[announcements, history]
	)
	const createAnnouncement = (): void => {
		history.push({ pathname: '/create' })
	}

	const items = results.map((announcement) => (
		<Announcement
			key={announcement.id}
			description={announcement.description}
			title={announcement.title}
			createdAt={announcement.createdAt}
			onDelete={onDelete}
			onEdit={onEdit}
			onView={onView}
			id={announcement.id}
		/>
	))
	return (
		<>
			<Actions>
				<Button onClick={createAnnouncement} text='Create announcement' />
				<Search onChange={(text: string) => setSearchTerm(text)} value={searchTerm} />
			</Actions>
			<ItemsWrapped>
				{results.length !== 0 ? items : <Message>Announcements not found</Message>}
			</ItemsWrapped>
		</>
	)
}
