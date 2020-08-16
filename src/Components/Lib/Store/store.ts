import { createStore } from 'redux'
import { rootReducer } from './root-reducer'

export const store = createStore(rootReducer)
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<
	T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>
