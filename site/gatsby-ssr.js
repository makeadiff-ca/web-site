/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import wrapWithProvider from './wrap-in-redux-provider'
export const wrapRootElement = wrapWithProvider
