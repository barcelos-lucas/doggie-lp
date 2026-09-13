import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/fraunces';
import '@fontsource-variable/fraunces/wght-italic.css';
import './styles.css';

// The build is prerendered for local search and fast first paint.
import { createRoot } from 'react-dom/client';
const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, <StrictMode><App /></StrictMode>);
else createRoot(root).render(<StrictMode><App /></StrictMode>);
