import * as InitState from './init'

export interface AppState {}

export type AppAction = InitState.Action

export const initialState: AppState = {}

export const reducers = {}

export const sagas: { [key: string]: () => IterableIterator<any> } = {
  ...InitState.sagas,
}
