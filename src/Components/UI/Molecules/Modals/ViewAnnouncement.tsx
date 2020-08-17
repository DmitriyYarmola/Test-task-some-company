import React from 'react'
import { Form, Button } from 'antd'
import styled from 'styled-components'
import { AnnouncementType } from '@Pages/Annoucement/Model'
import { FormTemplate } from '@UI/Templates'

const ButtonsGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-column-gap: 15px;
	justify-content: center;
`
const Title = styled.div`
	font-size: 25px;
	margin: 0 auto;
	width: max-content;
	margin-bottom: 15px;
`

const Text = styled.div``
const TittleDescription = styled.div`
	max-width: 500px;
	word-wrap: break-word;
`
const TextDescription = styled.div`
	max-width: 500px;
	word-wrap: break-word;
`
const Division = styled.div`
	font-size: 20px;
`
const NotFound = styled.div`
	width: max-content;
	margin: 0 auto 15px;
`
interface PropsType {
	onClose: () => void
	initialValues: AnnouncementType
	similar: AnnouncementType[]
}
export const ViewAnnouncement: React.FC<PropsType> = ({
	onClose,
	initialValues,
	similar,
}): React.ReactElement => {
	return (
		<FormTemplate>
			<Title>View announcement</Title>
			<Form name='create' initialValues={initialValues}>
				<Form.Item>
					<TittleDescription>Title: {initialValues.title}</TittleDescription>
				</Form.Item>

				<Form.Item>
					<TextDescription>Description: {initialValues.description}</TextDescription>
				</Form.Item>
				<Form.Item>
					<Text>Created at {initialValues.createdAt}</Text>
				</Form.Item>
				<>
					<Division>Similar announcements:</Division>
					{similar.length !== 0 ? (
						similar.map((announcement, index) => {
							return (
								index <= 2 && (
									<Form.Item key={announcement.id}>
										<Text>Title: {announcement.title}</Text>
										<Text>Description: {announcement.description}</Text>
									</Form.Item>
								)
							)
						})
					) : (
						<NotFound>Items not found</NotFound>
					)}
				</>
				<Form.Item>
					<ButtonsGroup>
						<Button type='primary' danger onClick={onClose}>
							Close
						</Button>
					</ButtonsGroup>
				</Form.Item>
			</Form>
		</FormTemplate>
	)
}
