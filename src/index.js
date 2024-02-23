import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import Products from './Pages/Products';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

import { Provider } from 'react-redux';
import { store } from './store';
import { CartProvider } from './Providers/CartContext';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Products />
	},
	{
		path: "/products/:id",
		element: <Product />
	},
	{
		path: "/cart",
		element: <Cart/>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store} >
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();