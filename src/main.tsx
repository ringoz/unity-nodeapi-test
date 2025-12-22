import { createRoot } from 'net.ringoz.unity.nodeapi/react'
import App from './App.tsx'

import { rendererPackageName, rendererVersion } from 'net.ringoz.unity.nodeapi';
console.log(`${rendererPackageName} v${rendererVersion}`);

createRoot(document.getElementById('html-root')!).render(
  <App />
);
