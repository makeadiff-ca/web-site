/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import './src/styling/globals.css'
import wrapWithProvider from './wrap-in-redux-provider'
export const wrapRootElement = wrapWithProvider
