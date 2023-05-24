// ** React Imports
import { lazy } from 'react'

const List = lazy(() => import('./list'))
const Edit = lazy(() => import('./edit'))

const Route = [  
  {
    element: <List />,
    path: '/letter'
  },
  {
    element: <Edit />,
    path: '/letter/:id'
  }
]

export default Route