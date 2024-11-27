import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css'
import AppTest from './AppTest.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    <AppTest />
  </StrictMode>
  </QueryClientProvider>,
)
