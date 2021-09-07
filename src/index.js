import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
//component file
import TodoContainer from './functionBased/components/TodoContainer'

//stylesheet
import './functionBased/App.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.querySelector('#root')
)