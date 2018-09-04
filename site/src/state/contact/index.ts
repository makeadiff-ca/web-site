import { call, put, select, take, takeEvery } from 'redux-saga/effects'
import { AppState } from '..'
import * as InitState from '../init'
import * as api from '../../api'

export const enum ActionType {
  ContactInterestsFetch = 'CONTACT/INTERESTS/FETCH',
  ContactInterestsFetchSuccess = 'CONTACT/INTERESTS/FETCH/SUCCESS',
  ContactInterestsFetchFailure = 'CONTACT/INTERESTS/FETCH/FAILURE',
  ContactSubmit = 'CONTACT/SUBMIT',
  ContactSubmitSuccess = 'CONTACT/SUBMIT/SUCCESS',
  ContactSubmitFailure = 'CONTACT/SUBMIT/FAILURE',
}

export type Action =
  | { type: ActionType.ContactInterestsFetch }
  | {
      type: ActionType.ContactInterestsFetchSuccess
      interests: ContactInterest[]
    }
  | { type: ActionType.ContactInterestsFetchFailure }
  | {
      type: ActionType.ContactSubmit
      name: string
      email: string
      interests: number[]
    }
  | { type: ActionType.ContactSubmitSuccess }
  | { type: ActionType.ContactSubmitFailure }

export interface ContactInterest {
  id: number
  value: string
}

export const enum SubmitState {
  Unsubmitted = 'unsubmitted',
  Pending = 'pending',
  Failed = 'failed',
  Submitted = 'submitted',
}

export interface State {
  interests: ContactInterest[]
  submitState: SubmitState
}

export const initialState: State = {
  interests: [],
  submitState: SubmitState.Unsubmitted,
}

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ActionType.ContactInterestsFetchSuccess:
      return { ...state, interests: action.interests }

    case ActionType.ContactSubmit:
      return { ...state, submitState: SubmitState.Pending }

    case ActionType.ContactSubmitSuccess:
      return { ...state, submitState: SubmitState.Submitted }

    case ActionType.ContactSubmitFailure:
      return { ...state, submitState: SubmitState.Failed }

    default:
      return state
  }
}

export const actions = {
  interestsFetch: (): Action => ({ type: ActionType.ContactInterestsFetch }),
  interestsFetchSuccess: (interests: ContactInterest[]): Action => ({
    type: ActionType.ContactInterestsFetchSuccess,
    interests,
  }),
  interestsFetchFailure: (): Action => ({
    type: ActionType.ContactInterestsFetchFailure,
  }),
  contactSubmit: (name: string, email: string, interests: number[]) => ({
    type: ActionType.ContactSubmit,
    name,
    email,
    interests,
  }),
  contactSubmitSuccess: () => ({ type: ActionType.ContactSubmitSuccess }),
  contactSubmitFailure: () => ({ type: ActionType.ContactSubmitFailure }),
}

export const sagas = {
  contactInterestsInit: function*() {
    console.log('hrm')
    yield take(InitState.ActionType.Init)
    yield put(actions.interestsFetch())
  },
  contactInterestsFetch: function*() {
    yield takeEvery(ActionType.ContactInterestsFetch, function*() {
      const result: api.ContactInterestResponse = yield call(
        api.fetchContactInterests,
      )

      if (result.success) {
        yield put(actions.interestsFetchSuccess(result.success.interests))
      } else {
        yield put(actions.interestsFetchFailure())
      }
    })
  },
  contactSubmit: function*() {
    yield takeEvery(ActionType.ContactSubmit, function*(action: Action) {
      if (action.type === ActionType.ContactSubmit) {
        const appState: AppState = yield select(a => a)

        if (appState.contact.submitState === SubmitState.Submitted) {
          // Bail early, we've already successfully submitted.
          return
        }

        const result: api.ContactSubmitResponse = yield call(
          api.contactSubmit,
          action.name,
          action.email,
          action.interests,
        )

        if (result.success) {
          yield put(actions.contactSubmitSuccess())
        } else {
          yield put(actions.contactSubmitFailure())
        }
      }
    })
  },
}
