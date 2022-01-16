import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';
import CartItem from './cartItem';

const CartStyle = styled.div`
    position: absolute;
    width: 350px;
    height: auto;
    max-height: 60vh;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    right: 6%;
    background: white;
    overflow: hidden;
        overflow-y: scroll;
    transition: filter 0.2s ease, top 0.5s ease;

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

    .empty {
        color: rgba(0,0,0,0.6);
        font-weight: 700;
    }

    .cart-list-wrapper {
        height: calc(90% - 35px);
    }

    ul {
        width: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: column;

        li {
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
            <h4>Cart</h4>

            <hr></hr>

            <div className='cart-list-wrapper'>
                {
                    context.items.length === 0 
                    
                    ?
                    
                    <p className='empty'>Your cart is empty.</p>

                    :

                    <ul>
                        {
                            context.items.map(el => {
                                return (
                                    <li>
                                        <CartItem price={el.price} quantity={el.quantity} key={context.items.indexOf(el)} key2={context.items.indexOf(el) + 'a'}/>
                                    </li>
                                )
                            })
                        }

                        <li>
                            <button>Checkout</button> {/*transformar em componente*/}
                        </li>
                    </ul>
                }
            </div>
        </CartStyle>
    )
}


