import { createReducer } from 'reduxsauce'

import {
  POST_NEW_RULE,
  POST_NEW_RULE_SUCCESS,
  POST_NEW_RULE_FAILURE,
} from '../actions/drools'

const INITIAL_STATE = {
  postNewRuleIsLoading: false,
  postNewRule: [],
  postNewRuleError: null,
}

const postNewRule = (state = INITIAL_STATE) => ({
  ...state,
  postNewRuleIsLoading: true,
  postNewRuleError: null,
})

const postNewRuleSuccess = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  postNewRuleIsLoading: false,
  postNewRule: payload.data,
  postNewRuleError: null,
})

const postNewRuleFailure = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  postNewRuleIsLoading: false,
  postNewRuleError: payload.error,
})

const ACTION_HANDLERS = {
  [POST_NEW_RULE]: postNewRule,
  [POST_NEW_RULE_SUCCESS]: postNewRuleSuccess,
  [POST_NEW_RULE_FAILURE]: postNewRuleFailure,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
