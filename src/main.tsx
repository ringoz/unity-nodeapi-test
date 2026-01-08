import { Element } from 'net.ringoz.unity.nodeapi';
import { createRoot } from 'net.ringoz.unity.nodeapi/react';
import App from './App.tsx';

createRoot(Element.search("ReactRoot")).render(
  <App />
);
