import { takeLatest, put, call } from 'redux-saga/effects'

import {
  POST_NEW_RULE,
  postNewRuleSuccess,
  postNewRuleFailure,
} from '../actions/drools'
import { postNewRule as postNewRuleAPI } from '../../api'

export default () => {
  function* postNewRule({ payload }) {
    try {
      const response = yield call(postNewRuleAPI, payload.data)
      yield put(postNewRuleSuccess(response.data))
    } catch (error) {
      yield put(postNewRuleFailure(error))
    }
  }

  function* watchPostNewRule() {
    yield takeLatest(POST_NEW_RULE, postNewRule)
  }

  return {
    watchPostNewRule,
  }
}
