import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Announcements } from '@Features/Announcements'
import { AnnouncementSelectors } from './Model'

const Wrapped = styled.div`
	margin-top: 25px;
`
export const AnnouncmentsPage = (): React.ReactElement => {
	const announcements = useSelector(AnnouncementSelectors.announcements)

	return (
		<Wrapped>
			<Announcements announcements={announcements} />
		</Wrapped>
	)
}
