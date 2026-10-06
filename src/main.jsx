import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/outfit'
import App from './App'
import './index.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are prerendered to static HTML at build time; hydrate them. Fall back to a fresh render in dev.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
