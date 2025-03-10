import "@/style/index.scss"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
createRoot(document.getElementById('client-container__custom')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
