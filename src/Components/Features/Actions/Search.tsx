import React, { useState } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

const Wrapped = styled.div``

interface PropsType {
	onChange: (e: string) => void
	value: string
}
export const Search: React.FC<PropsType> = ({ onChange, value }): React.ReactElement => {
	const onSearching = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.currentTarget.value)
	}
	return (
		<Wrapped>
			<Input onChange={onSearching} value={value} placeholder='search announcement' />
		</Wrapped>
	)
}
