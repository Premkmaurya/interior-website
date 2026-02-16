import React from 'react'
import { useLocation } from 'react-router-dom'
import AppRoute from './routes/AppRoute'
import Nav from './components/common/nav/Nav'
import Footer from './components/common/footer/Footer'

const App = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div>
      {!isLoginPage && <Nav />}
      <AppRoute />
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App