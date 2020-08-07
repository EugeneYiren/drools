import axios from 'axios'
import { v1 as uuidv1 } from 'uuid'

import {
  generateUrlPostInvestmentHorizonRule,
  generateUrlPostInvestmentObjectiveRule,
  generateUrlPostPrrCprRule,
} from './urlGenerator'

let headers = {}

headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  sessionId: uuidv1(),
}

const axiosApi = axios.create({
  baseURL: 'http://localhost:8080',
  headers,
})

const setRequestHeader = (requestId) => {
  axiosApi.defaults.headers.requestId = requestId
}

// eslint-disable-next-line import/prefer-default-export
export const postInvestmentHorizonRule = (newRuleResponse) => {
  setRequestHeader(`POST_NEW_RULE_${uuidv1()}`)
  return axiosApi.post(generateUrlPostInvestmentHorizonRule(), newRuleResponse)
}

export const postInvestmentObjectiveRule = (newRuleResponse) => {
  setRequestHeader(`POST_NEW_RULE_${uuidv1()}`)
  return axiosApi.post(
    generateUrlPostInvestmentObjectiveRule(),
    newRuleResponse
  )
}

export const postPrrCprRule = (newRuleResponse) => {
  setRequestHeader(`POST_NEW_RULE_${uuidv1()}`)
  return axiosApi.post(generateUrlPostPrrCprRule(), newRuleResponse)
}
