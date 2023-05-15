import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { routes as r } from './config/routes'
import { Soi } from './components/test/Soi';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"



const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={r.dashboard.slug} replace />,
    },
    {
        path: r.dashboard.uri,
        element: <App />,
        children: [
            {
                path: r.simulation.children[0].slug,
                element: <Soi />,
            }
        ]
    }
])

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
