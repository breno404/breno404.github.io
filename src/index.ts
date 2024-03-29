import { createRoot } from 'react-dom/client';
import App from './app'
import './style.css';

document.body.innerHTML = '<div id="root"></div>'
const root = createRoot(document.getElementById('root') as Element);
root.render(App());