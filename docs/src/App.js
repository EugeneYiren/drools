import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import ConfigureStore from './store/configureStore'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </div>
    </Provider>
  )
}

export default App
