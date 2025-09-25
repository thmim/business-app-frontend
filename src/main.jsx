import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './routes/Router.jsx'
import { RouterProvider } from "react-router/dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='public-sans'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
