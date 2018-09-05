/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import createStore from './src/state/configure-store'

exports.replaceRenderer = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const serverStyleSheet = new ServerStyleSheet()
  const store = createStore()
  const bodyHtml = renderToString(
    <Provider store={store}>
      <StyleSheetManager sheet={serverStyleSheet.instance}>
        {bodyComponent}
      </StyleSheetManager>
    </Provider>,
  )

  replaceBodyHTMLString(bodyHtml)
  setHeadComponents([serverStyleSheet.getStyleElement()])
}
