import React from 'react'
import AppRoute from './routes/AppRoute'
import Nav from './components/common/nav/Nav'
import Footer from './components/common/footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <AppRoute />
      <Footer />
    </div>
  )
}

export default App