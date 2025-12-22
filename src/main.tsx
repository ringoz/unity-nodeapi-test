import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { rendererPackageName, rendererVersion } from 'net.ringoz.unity.nodeapi';
console.log(`${rendererPackageName} v${rendererVersion}`);

createRoot(document.getElementById('html-root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
