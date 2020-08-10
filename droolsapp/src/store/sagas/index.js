import { all, fork } from 'redux-saga/effects'

import DroolsSaga from './drools'

export default function* root() {
  const {
    watchGetInvestmentHorizonRule,
    watchGetInvestmentObjectiveRule,
    watchGetPrrCprRule,
    watchPostInvestmentHorizonRule,
    watchPostInvestmentObjectiveRule,
    watchPostPrrCprRule,
  } = DroolsSaga()

  yield all([fork(watchGetInvestmentHorizonRule)])
  yield all([fork(watchGetInvestmentObjectiveRule)])
  yield all([fork(watchGetPrrCprRule)])
  yield all([fork(watchPostInvestmentHorizonRule)])
  yield all([fork(watchPostInvestmentObjectiveRule)])
  yield all([fork(watchPostPrrCprRule)])
}
