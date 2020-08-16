import React from 'react'
import { Form, Input, Button } from 'antd'
import { Store } from 'antd/lib/form/interface'
import styled from 'styled-components'
import { FormTemplate } from '@UI/Templates'
import { AnnouncementType } from '@Pages/Annoucement/Model'

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
interface PropsType {
	onSubmit: (formData: Store) => void
	onCancel: () => void
	initialValues: AnnouncementType
}
export const EditAnnouncement: React.FC<PropsType> = ({
	onSubmit,
	onCancel,
	initialValues,
}): React.ReactElement => {
	return (
		<FormTemplate>
			<Title>Edit announcement</Title>
			<Form name='create' initialValues={initialValues} onFinish={onSubmit}>
				<Form.Item
					name='title'
					rules={[{ required: true, message: 'Please input title of announcement!' }]}
				>
					<Input placeholder='input title' />
				</Form.Item>

				<Form.Item
					name='description'
					rules={[
						{ required: true, message: 'Please input description of announcement!' },
					]}
				>
					<Input placeholder='input description' />
				</Form.Item>

				<Form.Item>
					<ButtonsGroup>
						<Button type='primary' danger onClick={onCancel}>
							Cancel
						</Button>
						<Button type='primary' htmlType='submit'>
							Done
						</Button>
					</ButtonsGroup>
				</Form.Item>
			</Form>
		</FormTemplate>
	)
}
