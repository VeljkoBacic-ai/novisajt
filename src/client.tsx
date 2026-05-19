import { StrictMode, startTransition } from 'react'
import { createRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start/client'

startTransition(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <StartClient />
    </StrictMode>,
  )
})
