import React from 'react'
import { Form, Input, Button } from 'antd'
import { Store } from 'antd/lib/form/interface'
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

const Text = styled.span``
interface PropsType {
	onClose: () => void
	initialValues: AnnouncementType
}
export const ViewAnnouncement: React.FC<PropsType> = ({
	onClose,
	initialValues,
}): React.ReactElement => {
	return (
		<FormTemplate>
			<Title>View announcement</Title>
			<Form name='create' initialValues={initialValues}>
				<Form.Item name='title'>
					<Input placeholder='input title' />
				</Form.Item>

				<Form.Item name='description'>
					<Input placeholder='input description' />
				</Form.Item>
				<Form.Item name='description'>
					<Text>Created at {initialValues.createdAt}</Text>
				</Form.Item>
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
