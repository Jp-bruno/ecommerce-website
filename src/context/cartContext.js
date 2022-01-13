import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [state, setState] = useState({
        isOpen: false,
        itens: []
    })

    function toggleCart() {
        setState({
            ...state,
            isOpen: !(state.isOpen)
        })
    }

    return (
        <CartContext.Provider value={{...state, toggleCart}}>
            {children}
        </CartContext.Provider>
    )
}