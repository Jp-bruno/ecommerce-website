import { useState, createContext } from "react";
import CartItem from "../components/header/cart/cartItem";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [state, setState] = useState({
        isOpen: false,
        items: []
    })

    function addToCart() {
        const quantityInput = document.querySelector("#quantity-input").value;

        if (Number(quantityInput) === 0) {
            return
        } else {

            const newItemsList = [...state.items, { price: 125, quantity: quantityInput }];

            setState({
                ...state,
                items: newItemsList
            })
        }
    }

    function removeFromCart() {

    }

    function toggleCart() {
        setState({
            ...state,
            isOpen: !(state.isOpen)
        })
    }

    return (
        <CartContext.Provider value={{ ...state, toggleCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}