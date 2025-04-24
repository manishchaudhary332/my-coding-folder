import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Useeffect2 from './Useeffect2.jsx'
import Useeffect3 from './Useeffect3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Useeffect2/>
    <Useeffect3/>
  </StrictMode>,
)
