import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Dados } from "./components/dados";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dados />
  </StrictMode>,
)

