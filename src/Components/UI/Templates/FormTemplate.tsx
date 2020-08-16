import React from 'react'
import styled from 'styled-components'

const PositionWrapped = styled.div`
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
`
const Wrapped = styled.div`
	width: max-content;
	height: max-content;
	background: rgba(255, 255, 255, 1);
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5px;
	padding: 15px;
`

interface PropsType {
	children: React.ReactNode
}
export const FormTemplate: React.FC<PropsType> = ({ children }) => {
	return (
		<PositionWrapped>
			<Wrapped>{children}</Wrapped>
		</PositionWrapped>
	)
}
