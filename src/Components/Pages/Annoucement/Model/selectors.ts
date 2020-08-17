import { AppStateType } from '@Lib/Store'
import { AnnouncementType } from './actions'

export const announcements = (state: AppStateType): AnnouncementType[] =>
	state.AnnouncementRootReducer.announcements
