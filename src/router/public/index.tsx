import { Navigate } from 'react-router'
import { Outlet } from 'react-router-dom'

const Public = () => {
  const isAllowed = true

  return isAllowed ? <Outlet /> : <Navigate to="/" />
}

export default Public
