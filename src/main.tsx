import React from 'react'
import ReactDOM from 'react-dom/client'
import {Login} from './components/login/Login.tsx'
import {Signin} from './components/signin/Signin.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
    <Signin />
  </React.StrictMode>,
)
