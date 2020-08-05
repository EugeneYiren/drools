import { createReducer } from 'reduxsauce'

import {
  POST_NEW_RULE,
  POST_NEW_RULE_SUCCESS,
  POST_NEW_RULE_FAILURE,
} from '../actions/drools'

const INITIAL_STATE = {
  testStateIsLoading: false,
  testState: [],
  testStateError: null,
}

const postNewRule = (state = INITIAL_STATE) => ({
  ...state,
  testStateIsLoading: true,
  testStateError: null,
})

const postNewRuleSuccess = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  testStateIsLoading: false,
  testState: payload.data,
  testStateError: null,
})

const postNewRuleFailure = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  testStateIsLoading: false,
  testStateError: payload.error,
})

const ACTION_HANDLERS = {
  [POST_NEW_RULE]: postNewRule,
  [POST_NEW_RULE_SUCCESS]: postNewRuleSuccess,
  [POST_NEW_RULE_FAILURE]: postNewRuleFailure,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
