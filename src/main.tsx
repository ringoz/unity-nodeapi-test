import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { hello } from 'net.ringoz.unity.nodeapi';
hello('Hello world!');

createRoot(document.getElementById('html-root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
