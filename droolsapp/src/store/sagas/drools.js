import { takeLatest, put, call } from 'redux-saga/effects'

import {
  GET_INVESTMENT_HORIZON_RULE,
  getInvestmentHorizonRuleSuccess,
  getInvestmentHorizonRuleFailure,
  GET_INVESTMENT_OBJECTIVE_RULE,
  getInvestmentObjectiveRuleSuccess,
  getInvestmentObjectiveRuleFailure,
  GET_PRR_CPR_RULE,
  getPrrCprRuleSuccess,
  getPrrCprRuleFailure,
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
  getInvestmentHorizonRule as getInvestmentHorizonRuleAPI,
  getInvestmentObjectiveRule as getInvestmentObjectiveRuleAPI,
  getPrrCprRule as getPrrCprRuleAPI,
  postInvestmentHorizonRule as postInvestmentHorizonRuleAPI,
  postInvestmentObjectiveRule as postInvestmentObjectiveRuleAPI,
  postPrrCprRule as postPrrCprRuleAPI,
} from '../../api'

export default () => {
  // GET calls
  function* getInvestmentHorizonRule({
    payload: {
      HKRegulated,
      Direction,
      ProductType,
      ProductSubType,
      ExecutionType,
      InvestmentHorizon,
      ProductTenor,
      Tenor,
      VC,
      FundMasterList,
    },
  }) {
    try {
      const response = yield call(
        getInvestmentHorizonRuleAPI,
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
      yield put(getInvestmentHorizonRuleSuccess(response.data))
    } catch (error) {
      yield put(getInvestmentHorizonRuleFailure(error))
    }
  }

  function* watchGetInvestmentHorizonRule() {
    yield takeLatest(GET_INVESTMENT_HORIZON_RULE, getInvestmentHorizonRule)
  }

  function* getInvestmentObjectiveRule({
    payload: {
      HKRegulated,
      Direction,
      ProductType,
      ProductSubType,
      ExecutionType,
      VCStatus,
      ClientInvObjective,
      ProductInvObjective,
    },
  }) {
    try {
      const response = yield call(
        getInvestmentObjectiveRuleAPI,
        HKRegulated,
        Direction,
        ProductType,
        ProductSubType,
        ExecutionType,
        VCStatus,
        ClientInvObjective,
        ProductInvObjective
      )
      yield put(getInvestmentObjectiveRuleSuccess(response.data))
    } catch (error) {
      yield put(getInvestmentObjectiveRuleFailure(error))
    }
  }

  function* watchGetInvestmentObjectiveRule() {
    yield takeLatest(GET_INVESTMENT_OBJECTIVE_RULE, getInvestmentObjectiveRule)
  }

  function* getPrrCprRule({
    payload: {
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
      IsPRRMoreThanOREqualsToCPR,
    },
  }) {
    try {
      const response = yield call(
        getPrrCprRuleAPI,
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

      yield put(getPrrCprRuleSuccess(response.data))
    } catch (error) {
      yield put(getPrrCprRuleFailure(error))
    }
  }

  function* watchGetPrrCprRule() {
    yield takeLatest(GET_PRR_CPR_RULE, getPrrCprRule)
  }

  // POST calls
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
    watchGetInvestmentHorizonRule,
    watchGetInvestmentObjectiveRule,
    watchGetPrrCprRule,
    watchPostInvestmentHorizonRule,
    watchPostInvestmentObjectiveRule,
    watchPostPrrCprRule,
  }
}
