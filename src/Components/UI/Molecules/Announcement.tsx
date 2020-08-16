import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const Item = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 300px);
	grid-column-gap: 15px;
	margin: 5px;
	border: 1px solid rgba(232, 232, 232, 1);
	width: max-content;
	border-radius: 5px;
	padding: 15px;
`
const Title = styled.span`
	text-align: left;
	font-size: 20px;
`
const Actions = styled.div`
	display: grid;
	grid-template-columns: repeat(3, max-content);
	grid-column-gap: 15px;
	justify-content: end;
`

interface PropsType {
	id: number
	title: string
	description: string
	createdAt: string
	onDelete: (id: number) => void
	onEdit: (id: number, title: string, description: string) => void
	onView: (id: number, title: string, description: string, createdAt: string) => void
}
export const Announcement: React.FC<PropsType> = ({
	id,
	title,
	description,
	createdAt,
	onDelete,
	onEdit,
	onView,
}) => {
	return (
		<Item>
			<Title>{title}</Title>
			<Actions>
				<Button type='dashed' onClick={() => onView(id, title, description, createdAt)}>
					View
				</Button>
				<Button type='dashed' onClick={() => onEdit(id, title, description)}>
					Edit
				</Button>
				<Button type='dashed' danger onClick={() => onDelete(id)}>
					Delete
				</Button>
			</Actions>
		</Item>
	)
}
