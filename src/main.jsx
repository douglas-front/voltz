import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'


import Cozinha from './pages/cozinha/index.jsx'
import Sala from './pages/Sala/index.jsx'
import Quarto from './pages/Quarto/index.jsx'
import Banheiro from './pages/Banheiro/index.jsx'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: 'cozinha',
    element: <Cozinha/>
  },
  {
    path: 'sala',
    element: <Sala/> 
  },
  {
    path: 'quarto',
    element: <Quarto/>
  },
  {
    path: 'banheiro',
    element: <Banheiro/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
