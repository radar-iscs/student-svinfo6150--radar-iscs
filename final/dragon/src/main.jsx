import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ToastProvider from "./components/toast-provider";
import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>,
)
