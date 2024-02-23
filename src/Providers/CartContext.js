import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex], quantity: updatedCart[existingItemIndex].quantity + item.quantity };
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
        }
    }
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, setCart }}> {}
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
