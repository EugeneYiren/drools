import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import ConfigureStore from './store/configureStore'
import HomePage from './pages/homePage'

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Provider>
  )
}

export default App
