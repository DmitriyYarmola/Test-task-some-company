import { AppStateType } from '@Lib/Store/root-reducer'
import { AnnouncementType } from './actions'

export const announcements = (state: AppStateType): AnnouncementType[] =>
	state.AnnouncementRootReducer.announcements
