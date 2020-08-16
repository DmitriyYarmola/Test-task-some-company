import { combineReducers } from 'redux'
import { AnnouncementRootReducer } from '@Pages/Annoucement'

export const rootReducer = combineReducers({ AnnouncementRootReducer })
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
