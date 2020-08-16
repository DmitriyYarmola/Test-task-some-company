import { ActionsType, AnnouncementType } from './actions'
import * as types from './types'

const initialState = {
	announcements: [{ title: 'test' }] as AnnouncementType[],
}

type InitialStateType = typeof initialState
export const reducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case types.CREATE_ANNOUNCEMENT:
			return {
				...state,
				announcements: [action.payload, ...state.announcements],
			}
		case types.DELETE_ANNOUNCEMENT:
			return {
				...state,
				announcements: [
					...state.announcements.filter(
						(announcement: AnnouncementType) => announcement.id !== action.payload
					),
				],
			}
		case types.EDIT_ANNOUNCEMENT:
			return {
				...state,
				announcements: [
					...state.announcements.map((announcement: AnnouncementType) => {
						if (announcement.id === action.payload.id) return action.payload
						return announcement
					}),
				],
			}
		default:
			return state
	}
}
