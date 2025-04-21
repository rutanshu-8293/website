import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const data = {'token':false}
  return (
    <div>
      {data.token ? <Outlet/> : <Navigate to="/signin"/>}
    </div>
  )
}

export default ProtectedRoutes
