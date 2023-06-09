import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    //cart state
    const [cart, setCart] = useState([]);

    // amount item
    const [itemAmount, setItemAmount] = useState(0);

    // total price state
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const result = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0);
        setTotal(result);
    });

    //update item amount cart
    useEffect(() => {
        const amount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.amount;
        }, 0);
        setItemAmount(amount);
    }, [cart]);

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

    //decrese amount

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

    //total item sidebar

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, increseAmount, decreseAmount, itemAmount, total }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
