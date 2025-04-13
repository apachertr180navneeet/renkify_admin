

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'
import Login from '../pages/login/Login'
import Dashboard from '../components/Dashboard'

function RouteName() {
  
    return (
      <Router>
        <Routes>
          <Route
            path="/admin"
            element={
              isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </Router>
    )
}

export default RouteName