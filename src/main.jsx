import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FetchProvider } from './Components/FetchContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchProvider>
      <App />
    </FetchProvider>
  </StrictMode>,
)
