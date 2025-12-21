import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { hello } from "../unode-module/index.ts";
hello('Hello world!');

createRoot(document.getElementById('html-root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
