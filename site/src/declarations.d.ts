declare module '*.png'

// Make the graphql ambient function "known".  This is extracted with a babel
// plugin during the build process.
declare const graphql: (query: TemplateStringsArray) => void

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
}
