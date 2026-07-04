import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/context/ThemeProvider'
import { ClerkProvider } from '@clerk/clerk-react'
import { Toaster } from 'sonner'
import { dark } from "@clerk/themes";
import App from './App.jsx'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing publishable key!")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={publishableKey}
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
      signInForceRedirectUrl="/dashboard"
      signUpForceRedirectUrl="/dashboard"
      appearance={{
        baseTheme: dark
      }}
    >
      <ThemeProvider>
        <BrowserRouter>
          <Toaster richColors />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ClerkProvider>
  </StrictMode>,
)