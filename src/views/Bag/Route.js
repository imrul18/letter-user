// ** React Imports
import { lazy } from 'react'

const List = lazy(() => import('./list'))
const Add = lazy(() => import('./add'))
const Letter = lazy(() => import('./letter'))

const Route = [  
  {
    element: <List />,
    path: '/bag'
  },
  {
    element: <Add />,
    path: '/bag-create/:date'
  },
  {
    element: <Letter />,
    path: '/bag-letter/:id'
  }
]

export default Route