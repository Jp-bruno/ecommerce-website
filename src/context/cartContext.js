import { useState, createContext } from "react";
import {Item} from '../objectModels/models';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [state, setState] = useState({
        isOpen: false,
        items: [],
    })

    function addToCart() {
        const quantity = Number(document.querySelector("#quantity-input").value);

        if (quantity === 0) {
            return
        } else {
            const newItemsList = [...state.items, new Item(125, quantity, '50%', 'Theseaa low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.')];

            const cartIconAfter = document.querySelector('#cart-button-top-bar');

            setState({
                ...state,
                items: newItemsList
            })
        }
    }

    function removeFromCart(ev) {
        let index = ev.target.parentElement.id.slice(-1);
        const newArr = [...state.items]
        newArr.splice(index, 1);

        console.log(index, newArr)
        
        
        setState({
            ...state,
            items: newArr
        })
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