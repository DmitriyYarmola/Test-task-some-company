import { InferActionsType } from '../../../Lib/Store/store'
import * as types from './types'

export interface AnnouncementType {
	title: string
	description: string
	createdAt: string
	id: number
}
export const actions = {
	createAnnouncement: (payload: AnnouncementType) => ({
		type: types.CREATE_ANNOUNCEMENT,
		payload,
	}),
	deleteAnnouncement: (payload: number) =>
		({
			type: types.DELETE_ANNOUNCEMENT,
			payload,
		} as const),
	editAnnouncement: (payload: AnnouncementType) => ({
		type: types.EDIT_ANNOUNCEMENT,
		payload,
	}),
}

export type ActionsType = InferActionsType<typeof actions>
