import React from 'react'
import { Provider } from 'react-redux'
import ConfigureStore from './store/configureStore'
import HomePage from './pages/homePage'

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  )
}

export default App
