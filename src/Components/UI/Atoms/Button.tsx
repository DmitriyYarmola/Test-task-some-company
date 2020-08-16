import React from 'react'
import { Button as ButtonAnt } from 'antd'

interface PropsType {
	onClick: () => void
	text: string
}
export const Button: React.FC<PropsType> = ({ onClick, text }): React.ReactElement => {
	return (
		<ButtonAnt type='primary' onClick={onClick}>
			{text}
		</ButtonAnt>
	)
}
