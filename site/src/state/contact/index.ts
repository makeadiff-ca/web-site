export const enum ActionType {
  ContactInterestsFetch = 'CONTACT/INTERESTS/FETCH',
  ContactSubmit = 'CONTACT/SUBMIT',
}

export type Action =
  | { type: ActionType.ContactInterestsFetch }
  | { type: ActionType.ContactSubmit }

export interface State {
  submitted: boolean
}

export const initialState: State = {
  submitted: false,
}

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state
  }
}

export const sagas = {}
