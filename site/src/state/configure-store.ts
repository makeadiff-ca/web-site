import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
  Store,
} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { AppState, AppAction, initialState, reducers, sagas } from './'
import * as InitState from './init'

export default function configureStore(): Store<AppState> {
  const windowGlobal: { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any } =
    typeof window !== 'undefined' ? window : {}
  let storeComposeEnhancer

  if (process.env['ACTIVE_ENV'] !== 'production') {
    storeComposeEnhancer =
      windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  } else {
    storeComposeEnhancer = compose
  }

  const sagaMiddleware = createSagaMiddleware()
  const storeEnhancer = storeComposeEnhancer(applyMiddleware(sagaMiddleware))

  const store = createStore<AppState, AppAction, {}, {}>(
    combineReducers<AppState>({ ...reducers }),
    initialState,
    storeEnhancer,
  )

  const hot = (module as NodeModule & {
    hot: { accept(path: string, cb: () => void): void }
  }).hot

  if (hot) {
    hot.accept('./index', () => {
      const nextRootReducer = require('./index')
      store.replaceReducer(combineReducers<AppState>(nextRootReducer.reducers))
    })
  }

  Object.keys(sagas).forEach(k => sagaMiddleware.run(sagas[k]))

  store.dispatch(InitState.actions.init())

  return store
}
