import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';
import CartItem from './cartItem';
import CheckoutButton from './checkoutButton';

const CartStyle = styled.div`
    position: absolute;
    width: 350px;
    min-height: 250px;
    max-height: 45vh;
    border-radius: 10px;
    z-index: 10;
    right: 6%;
    background: white;
    transition: filter 0.2s ease, top 0.5s ease;

    #shadow-div {
        box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        border-radius: 8px;
        min-height: 250px;
    }

    h4 {
        padding: 7% 0 7% 7%;
    }

    hr {
        background-color: var(--lightGrayishBlue);
        height: 1px;
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

    .empty-text {
        color: rgba(0,0,0,0.6);
        font-weight: 700;
    }

    .cart-list-wrapper {
        position: relative;
        max-height: 300px;
        overflow-y: scroll;    
        scrollbar-width: none !important;
        background: white;

        &::-webkit-scrollbar {
            display: none;
        }


        &.list-empty {
            position: absolute;
            height: calc(90% - 40px);
            width: 100%;
            display: grid;
            place-items: center;
            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;
        }
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;

        li:not(#last-li) {
            margin: 15px 10px;
        }

        li:first-of-type {
            margin-top: 25px;
        }

    }
`;

export default function Cart() {
    const context = useContext(CartContext);

    return (
        <CartStyle key='cart' className={context.isOpen ? 'isOpen' : 'isClosed'}>
            <div id='shadow-div'>
                <div id='first-section'>
                    <h4>Cart</h4>

                    <hr></hr>
                </div>


                <div className={`cart-list-wrapper ${context.items.length === 0 ? 'list-empty' : ''}`}>
                    {
                        context.items.length === 0

                            ?

                            <p className='empty-text'>Your cart is empty.</p>

                            :

                            <ul>
                                {
                                    context.items.map(el => {
                                        return (
                                            <li key={context.items.indexOf(el)}>
                                                <CartItem
                                                    price={el.price}
                                                    quantity={el.quantity}
                                                    key2={context.items.indexOf(el) + 'a'}
                                                    id={'id' + context.items.indexOf(el)}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                    }
                </div>

                <CheckoutButton />
            </div>
        </CartStyle>
    )
}


