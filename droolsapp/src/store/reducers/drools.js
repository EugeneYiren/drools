import { createReducer } from 'reduxsauce'

import {
  POST_INVESTMENT_HORIZON_RULE,
  POST_INVESTMENT_HORIZON_RULE_SUCCESS,
  POST_INVESTMENT_HORIZON_RULE_FAILURE,
  POST_INVESTMENT_OBJECTIVE_RULE,
  POST_INVESTMENT_OBJECTIVE_RULE_SUCCESS,
  POST_INVESTMENT_OBJECTIVE_RULE_FAILURE,
  POST_PRR_CPR_RULE,
  POST_PRR_CPR_RULE_SUCCESS,
  POST_PRR_CPR_RULE_FAILURE,
} from '../actions/drools'

const INITIAL_STATE = {
  postNewRuleIsLoading: false,
  postNewRule: [],
  postNewRuleError: null,
}

const postInvestmentHorizonRule = (state = INITIAL_STATE) => ({
  ...state,
  postNewRuleIsLoading: true,
  postNewRuleError: null,
})

const postInvestmentHorizonRuleSuccess = (
  state = INITIAL_STATE,
  { payload }
) => ({
  ...state,
  postNewRuleIsLoading: false,
  postNewRule: payload.data,
  postNewRuleError: null,
})

const postInvestmentHorizonRuleFailure = (
  state = INITIAL_STATE,
  { payload }
) => ({
  ...state,
  postNewRuleIsLoading: false,
  postNewRuleError: payload.error,
})

const postInvestmentObjectiveRule = (state = INITIAL_STATE) => ({
  ...state,
  postNewRuleIsLoading: true,
  postNewRuleError: null,
})

const postInvestmentObjectiveRuleSuccess = (
  state = INITIAL_STATE,
  { payload }
) => ({
  ...state,
  postNewRuleIsLoading: false,
  postNewRule: payload.data,
  postNewRuleError: null,
})

const postInvestmentObjectiveRuleFailure = (
  state = INITIAL_STATE,
  { payload }
) => ({
  ...state,
  postNewRuleIsLoading: false,
  postNewRuleError: payload.error,
})

const postPrrCprRule = (state = INITIAL_STATE) => ({
  ...state,
  postNewRuleIsLoading: true,
  postNewRuleError: null,
})

const postPrrCprRuleSuccess = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  postNewRuleIsLoading: false,
  postNewRule: payload.data,
  postNewRuleError: null,
})

const postPrrCprRuleFailure = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  postNewRuleIsLoading: false,
  postNewRuleError: payload.error,
})

const ACTION_HANDLERS = {
  [POST_INVESTMENT_HORIZON_RULE]: postInvestmentHorizonRule,
  [POST_INVESTMENT_HORIZON_RULE_SUCCESS]: postInvestmentHorizonRuleSuccess,
  [POST_INVESTMENT_HORIZON_RULE_FAILURE]: postInvestmentHorizonRuleFailure,
  [POST_INVESTMENT_OBJECTIVE_RULE]: postInvestmentObjectiveRule,
  [POST_INVESTMENT_OBJECTIVE_RULE_SUCCESS]: postInvestmentObjectiveRuleSuccess,
  [POST_INVESTMENT_OBJECTIVE_RULE_FAILURE]: postInvestmentObjectiveRuleFailure,
  [POST_PRR_CPR_RULE]: postPrrCprRule,
  [POST_PRR_CPR_RULE_SUCCESS]: postPrrCprRuleSuccess,
  [POST_PRR_CPR_RULE_FAILURE]: postPrrCprRuleFailure,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
