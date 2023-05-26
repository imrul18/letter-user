// ** React Imports
import { lazy } from 'react'

const List = lazy(() => import('./list'))
const Add = lazy(() => import('./add'))

const Route = [  
  {
    element: <List />,
    path: '/bag'
  },
  {
    element: <Add />,
    path: '/bag-create/:date'
  }
]

export default Route