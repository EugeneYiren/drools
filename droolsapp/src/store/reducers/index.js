import { combineReducers } from 'redux'

import DroolsReducer from './drools'

export default combineReducers({
  drools: DroolsReducer,
})
