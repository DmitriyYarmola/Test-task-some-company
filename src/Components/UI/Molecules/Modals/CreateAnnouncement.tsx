import React from 'react'
import { Form, Input, Button } from 'antd'
import { Store } from 'antd/lib/form/interface'
import styled from 'styled-components'
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
interface PropsType {
	onSubmit: (formData: Store) => void
	onCancel: () => void
}
export const CreateAnnouncement: React.FC<PropsType> = ({
	onSubmit,
	onCancel,
}): React.ReactElement => {
	return (
		<FormTemplate>
			<Title>Create announcement</Title>
			<Form name='create' initialValues={{ remember: true }} onFinish={onSubmit}>
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
						<Button type='primary' htmlType='submit'>
							Create
						</Button>
						<Button type='primary' danger onClick={onCancel}>
							Cancel
						</Button>
					</ButtonsGroup>
				</Form.Item>
			</Form>
		</FormTemplate>
	)
}
