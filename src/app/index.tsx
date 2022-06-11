import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App'
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('app'))

// <App />

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
