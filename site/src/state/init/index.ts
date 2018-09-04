export const enum ActionType {
  Init = 'INIT',
}

export type Action = { type: ActionType.Init }

export const actions = {
  init: (): Action => ({ type: ActionType.Init }),
}

export const sagas = {}
