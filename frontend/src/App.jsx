import React, { useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import AppRoute from './routes/AppRoute'
import Nav from './components/common/nav/Nav'
import Footer from './components/common/footer/Footer'
import {checkAuth} from "./store/slices/authSlice"
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)
  const isLoginPage = location.pathname === '/login'

  // Restore auth state from cookies on app mount
  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  return (
    <div>
      {!isLoginPage && <Nav />}
      <AppRoute />
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App