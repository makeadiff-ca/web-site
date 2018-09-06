import * as React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/state/configure-store'

const store = configureStore()

export default ({ element }) => <Provider store={store}>{element}</Provider>
