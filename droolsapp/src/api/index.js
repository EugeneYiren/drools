import axios from 'axios'
import { v1 as uuidv1 } from 'uuid'

import { generateUrlPostNewRule } from './urlGenerator'

let headers = {}

headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  sessionId: uuidv1(),
}

const axiosApi = axios.create({
  baseUrl: 'http://localhost:8080',
  headers,
})

const setRequestHeader = (requestId) => {
  axiosApi.defaults.headers.requestId = requestId
}

// eslint-disable-next-line import/prefer-default-export
export const postNewRule = (newRuleResponse) => {
  setRequestHeader(`POST_NEW_RULE_${uuidv1()}`)
  return axiosApi.post(generateUrlPostNewRule(), newRuleResponse)
}
