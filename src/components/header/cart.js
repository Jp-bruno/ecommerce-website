import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartStyle = styled.div`
    position: absolute;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    right: 6%; /* 6% */
    background: white;
    transition: filter 0.2s ease, top 0.5s ease;

    h4 {
        padding: 5% 5% 4%;
    }

    hr {
        background-color: var(--lightGrayishBlue);
        height: 2px;
        border: none;
    }

    &.isOpen {
        filter: opacity(1);
        top: 13%;
    }

    &.isClosed {
        pointer-events: none;
        filter: opacity(0);
        top: 5%;
    }

    .empty {
        color: rgba(0,0,0,0.6);
        font-weight: 700;
    }

    .cart-list-wrapper {
        display: flex;
        height: calc(90% - 30px);
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

export default function Cart() {
    const context = useContext(CartContext);

    return (
        <CartStyle className={context.isOpen ? 'isOpen' : 'isClosed'}>
            <h4>Cart</h4>

            <hr></hr>

            <div className='cart-list-wrapper'>
                {
                    context.itens.length === 0 
                    
                    ?
                    
                    <p className='empty'>Your cart is empty.</p>

                    :

                    <ul>

                    </ul>
                }
            </div>
        </CartStyle>
    )
}


