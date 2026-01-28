import React from 'react'
import AppRoute from './routes/AppRoute'
import Nav from './components/common/nav/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <AppRoute />
    </div>
  )
}

export default App