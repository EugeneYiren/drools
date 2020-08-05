import { all, fork } from 'redux-saga/effects'

import DroolsSaga from './drools'

export default function* root() {
  const { watchPostNewRule } = DroolsSaga()

  yield all([fork(watchPostNewRule)])
}
