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
  GET_INVESTMENT_HORIZON_RULE,
  GET_INVESTMENT_HORIZON_RULE_SUCCESS,
  GET_INVESTMENT_HORIZON_RULE_FAILURE,
  GET_INVESTMENT_OBJECTIVE_RULE,
  GET_INVESTMENT_OBJECTIVE_RULE_SUCCESS,
  GET_INVESTMENT_OBJECTIVE_RULE_FAILURE,
  GET_PRR_CPR_RULE,
  GET_PRR_CPR_RULE_SUCCESS,
  GET_PRR_CPR_RULE_FAILURE,
} from '../actions/drools'

const INITIAL_STATE = {
  postNewRuleIsLoading: false,
  postNewRule: {},
  postNewRuleError: null,

  getInvestmentHorizonRuleIsLoading: false,
  getInvestmentHorizonRule: {},
  getInvestmentHorizonRuleError: null,

  getInvestmentObjectiveRuleIsLoading: false,
  getInvestmentObjectiveRule: {},
  getInvestmentObjectiveRuleError: null,

  getPrrCprRuleIsLoading: false,
  getPrrCprRule: {},
  getPrrCprRuleError: null,
}

// POST calls
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

// GET calls
const getInvestmentHorizonRule = (state = INITIAL_STATE) => ({
  ...state,
  getInvestmentHorizonRuleIsLoading: true,
  getInvestmentHorizonError: null,
})

const getInvestmentHorizonRuleSuccess = (
  state = INITIAL_STATE,
  { payload }
) => ({
  ...state,
  getInvestmentHorizonRuleIsLoading: false,
  getInvestmentHorizonRule: payload.data,
  getInvestmentHorizonRuleError: null,
})

const getInvestmentHorizonRuleFailure = (
  state = INITIAL_STATE,
  { payload }
) => ({
  ...state,
  getInvestmentHorizonRuleIsLoading: false,
  getInvestmentHorizonRuleError: payload.error,
})

const getInvestmentObjectiveRule = (state = INITIAL_STATE) => ({
  ...state,
  getInvestmentObjectiveRuleIsLoading: true,
  getInvestmentObjectiveRuleError: null,
})

const getInvestmentObjectiveRuleSuccess = (
  state = INITIAL_STATE,
  { payload }
) => ({
  ...state,
  getInvestmentObjectiveRuleIsLoading: false,
  getInvestmentObjectiveRule: payload.data,
  getInvestmentObjectiveRuleError: null,
})

const getInvestmentObjectiveRuleFailure = (
  state = INITIAL_STATE,
  { payload }
) => ({
  ...state,
  getInvestmentObjectiveRuleIsLoading: false,
  getInvestmentObjectiveRuleError: payload.error,
})

const getPrrCprRule = (state = INITIAL_STATE) => ({
  ...state,
  getPrrCprRuleIsLoading: true,
  getPrrCprRuleError: null,
})

const getPrrCprRuleSuccess = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  getPrrCprRuleIsLoading: false,
  getPrrCprRule: payload.data,
  getPrrCprRuleError: null,
})

const getPrrCprRuleFailure = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  getPrrCprRuleIsLoading: false,
  getPrrCprRuleError: payload.error,
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
  [GET_INVESTMENT_HORIZON_RULE]: getInvestmentHorizonRule,
  [GET_INVESTMENT_HORIZON_RULE_SUCCESS]: getInvestmentHorizonRuleSuccess,
  [GET_INVESTMENT_HORIZON_RULE_FAILURE]: getInvestmentHorizonRuleFailure,
  [GET_INVESTMENT_OBJECTIVE_RULE]: getInvestmentObjectiveRule,
  [GET_INVESTMENT_OBJECTIVE_RULE_SUCCESS]: getInvestmentObjectiveRuleSuccess,
  [GET_INVESTMENT_OBJECTIVE_RULE_FAILURE]: getInvestmentObjectiveRuleFailure,
  [GET_PRR_CPR_RULE]: getPrrCprRule,
  [GET_PRR_CPR_RULE_SUCCESS]: getPrrCprRuleSuccess,
  [GET_PRR_CPR_RULE_FAILURE]: getPrrCprRuleFailure,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
