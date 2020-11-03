import axios from 'axios'
import { v1 as uuidv1 } from 'uuid'

import {
  generateUrlPostInvestmentHorizonRule,
  generateUrlPostInvestmentObjectiveRule,
  generateUrlPostPrrCprRule,
  generateUrlGetInvestmentHorizonRule,
  generateUrlGetInvestmentObjectiveRule,
  generateUrlGetPrrCprRule,
  generateUrlGetAuditTrail,
} from './urlGenerator'

let headers = {}

headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  sessionId: uuidv1(),
}

const axiosApi = axios.create({
  baseURL: 'https://droolspocwebservice.herokuapp.com/',
  headers,
})

const setRequestHeader = (requestId) => {
  axiosApi.defaults.headers.requestId = requestId
}

// POST CALLS
export const postInvestmentHorizonRule = (newRuleResponse) => {
  setRequestHeader(`POST_INVESTMENT_HORIZON_RULE_${uuidv1()}`)
  return axiosApi.post(generateUrlPostInvestmentHorizonRule(), newRuleResponse)
}

export const postInvestmentObjectiveRule = (newRuleResponse) => {
  setRequestHeader(`POST_INVESTMENT_OBJECTIVE_RULE_${uuidv1()}`)
  return axiosApi.post(
    generateUrlPostInvestmentObjectiveRule(),
    newRuleResponse
  )
}

export const postPrrCprRule = (newRuleResponse) => {
  setRequestHeader(`POST_PRR_CPR_RULE_${uuidv1()}`)
  return axiosApi.post(generateUrlPostPrrCprRule(), newRuleResponse)
}

// GET CALLS
export const getInvestmentHorizonRule = (
  HKRegulated,
  Direction,
  ProductType,
  ProductSubType,
  ExecutionType,
  InvestmentHorizon,
  ProductTenor,
  Tenor,
  VC,
  FundMasterList
) => {
  setRequestHeader(`GET_INVESTMENT_HORIZON_RULE_${uuidv1()}`)
  return axiosApi.get(
    generateUrlGetInvestmentHorizonRule(
      HKRegulated,
      Direction,
      ProductType,
      ProductSubType,
      ExecutionType,
      InvestmentHorizon,
      ProductTenor,
      Tenor,
      VC,
      FundMasterList
    )
  )
}

export const getInvestmentObjectiveRule = (
  HKRegulated,
  Direction,
  ProductType,
  ProductSubType,
  ExecutionType,
  VCStatus,
  ClientInvObjective,
  ProductInvObjective
) => {
  setRequestHeader(`GET_INVESTMENT_OBJECTIVE_RULE_${uuidv1()}`)
  return axiosApi.get(
    generateUrlGetInvestmentObjectiveRule(
      HKRegulated,
      Direction,
      ProductType,
      ProductSubType,
      ExecutionType,
      VCStatus,
      ClientInvObjective,
      ProductInvObjective
    )
  )
}

export const getPrrCprRule = (
  HKRegulated,
  Direction,
  ProductType,
  ProductSubType,
  HYBFIndicator,
  ExecutionType,
  VCStatus,
  HedgingIndicator,
  CPR,
  PRR,
  IsPRRMoreThanOREqualsToCPR
) => {
  setRequestHeader(`GET_PRR_CPR_RULE_${uuidv1()}`)
  return axiosApi.get(
    generateUrlGetPrrCprRule(
      HKRegulated,
      Direction,
      ProductType,
      ProductSubType,
      HYBFIndicator,
      ExecutionType,
      VCStatus,
      HedgingIndicator,
      CPR,
      PRR,
      IsPRRMoreThanOREqualsToCPR
    )
  )
}

export const getAuditTrail = () => {
  setRequestHeader(`GET_AUDIT_TRAIL_${uuidv1()}`)
  return axiosApi.get(generateUrlGetAuditTrail())
}
