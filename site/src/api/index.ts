import fetch from 'isomorphic-fetch'

function apiPath(endpoint: string) {
  return `${process.env['GATSBY_API_PREFIX']}${endpoint}`
}

export function test() {
  return fetch(apiPath('/test'))
}
