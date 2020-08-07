import { all, fork } from 'redux-saga/effects'

import DroolsSaga from './drools'

export default function* root() {
  const {
    watchPostInvestmentHorizonRule,
    watchPostInvestmentObjectiveRule,
    watchPostPrrCprRule,
  } = DroolsSaga()

  yield all([fork(watchPostInvestmentHorizonRule)])
  yield all([fork(watchPostInvestmentObjectiveRule)])
  yield all([fork(watchPostPrrCprRule)])
}
