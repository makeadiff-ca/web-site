import * as ContactState from './contact'
import * as InitState from './init'

export interface AppState {
  contact: ContactState.State
}

export type AppAction = InitState.Action

export const initialState: AppState = {
  contact: ContactState.initialState,
}

export const reducers = {
  contact: ContactState.reducer,
}

export const sagas: { [key: string]: () => IterableIterator<any> } = {
  ...ContactState.reducer,
  ...InitState.sagas,
}
