import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import PATHS from '@/config/paths'

import Home from '@/home/components/pages'

import Public from './public'

const router = createBrowserRouter([
	{
		path: PATHS.BASE,
		children: [
			{
				path: PATHS.BASE,
				element: <Public />,
				children: [
					{
						path: PATHS.HOME,
						element: <Home />,
					},
				],
			},
		],
	},
	{
		path: '/*',
		element: <Navigate to={PATHS.HOME} replace />,
	},
])

const Router = () => <RouterProvider router={router} />

export default Router
