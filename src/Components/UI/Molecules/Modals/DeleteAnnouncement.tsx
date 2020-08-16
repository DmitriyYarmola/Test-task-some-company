import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { FormTemplate } from '@UI/Templates'

const Title = styled.span`
	font-weight: bold;
	font-size: 25px;
`
const Actions = styled.div`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-column-gap: 15px;
	justify-content: center;
	margin-top: 15px;
`
const Wrapped = styled.div``
interface PropsType {
	onCancel: () => void
	onDone: () => void
}
export const DeleteAnnouncement: React.FC<PropsType> = ({
	onCancel,
	onDone,
}): React.ReactElement => {
	return (
		<FormTemplate>
			<Wrapped>
				<Title>Are you sure?</Title>
				<Actions>
					<Button type='dashed' danger onClick={onCancel}>
						Cancel
					</Button>
					<Button type='dashed' onClick={onDone}>
						Done
					</Button>
				</Actions>
			</Wrapped>
		</FormTemplate>
	)
}
