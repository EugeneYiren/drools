import { takeLatest, put, call } from 'redux-saga/effects'

import {
  POST_INVESTMENT_HORIZON_RULE,
  postInvestmentHorizonRuleSuccess,
  postInvestmentHorizonRuleFailure,
  POST_INVESTMENT_OBJECTIVE_RULE,
  postInvestmentObjectiveRuleSuccess,
  postInvestmentObjectiveRuleFailure,
  POST_PRR_CPR_RULE,
  postPrrCprRuleSuccess,
  postPrrCprRuleFailure,
} from '../actions/drools'
import {
  postInvestmentHorizonRule as postInvestmentHorizonRuleAPI,
  postInvestmentObjectiveRule as postInvestmentObjectiveRuleAPI,
  postPrrCprRule as postPrrCprRuleAPI,
} from '../../api'

export default () => {
  function* postInvestmentHorizonRule({ payload }) {
    try {
      const response = yield call(postInvestmentHorizonRuleAPI, payload.data)
      yield put(postInvestmentHorizonRuleSuccess(response.data))
    } catch (error) {
      yield put(postInvestmentHorizonRuleFailure(error))
    }
  }

  function* watchPostInvestmentHorizonRule() {
    yield takeLatest(POST_INVESTMENT_HORIZON_RULE, postInvestmentHorizonRule)
  }

  function* postInvestmentObjectiveRule({ payload }) {
    try {
      const response = yield call(postInvestmentObjectiveRuleAPI, payload.data)
      yield put(postInvestmentObjectiveRuleSuccess(response.data))
    } catch (error) {
      yield put(postInvestmentObjectiveRuleFailure(error))
    }
  }

  function* watchPostInvestmentObjectiveRule() {
    yield takeLatest(
      POST_INVESTMENT_OBJECTIVE_RULE,
      postInvestmentObjectiveRule
    )
  }

  function* postPrrCprRule({ payload }) {
    try {
      const response = yield call(postPrrCprRuleAPI, payload.data)
      yield put(postPrrCprRuleSuccess(response.data))
    } catch (error) {
      yield put(postPrrCprRuleFailure(error))
    }
  }

  function* watchPostPrrCprRule() {
    yield takeLatest(POST_PRR_CPR_RULE, postPrrCprRule)
  }

  return {
    watchPostInvestmentHorizonRule,
    watchPostInvestmentObjectiveRule,
    watchPostPrrCprRule,
  }
}
