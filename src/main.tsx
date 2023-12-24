import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { TheContextProvider } from './theme/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <TheContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </TheContextProvider>
    </React.StrictMode>
);
