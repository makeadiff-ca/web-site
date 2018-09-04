/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import * as React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './src/state/configure-store'

exports.onRouteUpdate = function({ location }) {
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.ga === `function`
  ) {
    window.ga(
      `set`,
      `page`,
      location
        ? location.pathname + location.search + location.hash
        : undefined,
    )
    window.ga(`send`, `pageview`)
  }
}

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore()

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
