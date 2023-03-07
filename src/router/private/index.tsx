import { Navigate } from 'react-router'
import { Outlet } from 'react-router-dom'

const Private = () => {
	const isAllowed = true

	return isAllowed ? <Outlet /> : <Navigate to='login' />
}

export default Private
