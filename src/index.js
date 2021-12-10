import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from './App'
import counter from './reducer'
import './index.css'

const destination = document.getElementById('root')

// Store
var store = createStore(counter);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  destination
);