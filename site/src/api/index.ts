import fetch from 'isomorphic-fetch'
import { ContactInterest } from '../state/contact'

export interface Response<S, F> {
  success?: S
  failure?: F
}

async function request<
  S extends undefined | object,
  F extends undefined | object
>(
  path: string,
  method: string = 'GET',
  body: null | object = null,
): Promise<Response<S, F>> {
  const headers = new Headers()
  const requestInit: RequestInit = { method, headers }

  if (method !== 'GET' && body !== null) {
    requestInit.body = JSON.stringify(body)
    headers.append('Content-Type', 'application/json')
  }

  requestInit.headers = headers

  const response = await fetch(path, requestInit)
  const responseBody = await response.json()

  if (response.ok) {
    return { success: responseBody }
  } else {
    return { failure: responseBody }
  }
}

function path(endpoint: string) {
  return `${process.env['GATSBY_API_PREFIX']}${endpoint}`
}

interface ContactInterestsSuccess {
  result: 'success'
  interests: ContactInterest[]
}
interface ContactInterestFailure {
  result: 'failure'
  reason: string
}
export type ContactInterestResponse = Response<
  ContactInterestsSuccess,
  ContactInterestFailure
>
export async function fetchContactInterests() {
  return request<ContactInterestsSuccess, ContactInterestFailure>(
    path('/contact/interests'),
  )
}

interface ContactSubmitSuccess {
  result: 'success'
}
interface ContactSubmitFailure {
  result: 'failure'
  reason: string
}
export type ContactSubmitResponse = Response<
  ContactSubmitSuccess,
  ContactInterestFailure
>
export async function contactSubmit(
  name: string,
  email: string,
  interests: number[],
) {
  return request<ContactSubmitSuccess, ContactSubmitFailure>(
    path('/contact'),
    'POST',
    { name, email, interests },
  )
}
