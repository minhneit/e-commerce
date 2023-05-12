import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    //cart state
    const [number, setNumber] = useState(0);
    const [cart, setCart] = useState([]);

    //add to cart
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };

        //check if the item is already in the cart
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    //remove cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    //clear cart
    const clearCart = () => {
        setCart([]);
    };

    //increse amount

    const increseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    };

    const decreseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeFromCart(id);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increseAmount, decreseAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
