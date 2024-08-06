import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
