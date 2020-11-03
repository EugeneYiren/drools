import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './reducers'

export default () => {
  const middlewares = []
  const sagaMiddleware = createSagaMiddleware()

  middlewares.push(sagaMiddleware)
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(sagas)

  return store
}
