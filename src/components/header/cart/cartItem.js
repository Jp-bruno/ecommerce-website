import styled from 'styled-components';
import deleteIcon from '../../../assets/icon-delete.svg';
import imageProduct from '../../../assets/image-product-1-thumbnail.jpg';
import { CartContext } from '../../../context/cartContext';
import { useContext, useRef } from 'react';

const CartItemStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    .cart-item-img {
        width: 50px;
        border-radius: 4px;
    }

    .delete-icon-button {
        background: none;
        border: 0;
        cursor: pointer;

        img {
            pointer-events: none;
        }
    }

    .delete-icon-cart {
        width: 15px;
        height: 17px;
    }
`;

export default function CartItem({ price, quantity, id, key2 }) {
    const context = useContext(CartContext);

    const CardElement = useRef();

    return (
        <CartItemStyled key={key2} ref={CardElement} id={id}>
            <img className='cart-item-img' src={imageProduct} alt='' />

            <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>{`$${price} x ${quantity} `}<strong>{`$${price * quantity}`}</strong></p>
            </div>

            <button className='delete-icon-button' onClick={context.removeFromCart}><img className='delete-icon-cart' src={deleteIcon} alt=''/></button>
        </CartItemStyled>
    )
}