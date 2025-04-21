import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Zender from './zender.jsx'
import NumberRemove from './NumberRemove.jsx'
import ThreeRemove from './ThreeRemove.jsx'
import EvenRemove from './EvenRemove.jsx'
import AddNumber from './AddNumber.jsx'
import IncreseAge from './IncreseAge.jsx'
import TrueFalse from './TrueFalse.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <Zender/>

    <NumberRemove/>

    <ThreeRemove/>

    <EvenRemove/>

    <AddNumber/>
    <IncreseAge/>

    <TrueFalse/>
  </StrictMode>,
)
