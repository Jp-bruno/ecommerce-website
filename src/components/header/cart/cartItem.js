import styled from 'styled-components';
import deleteIcon from '../../../assets/icon-delete.svg';
import imageProduct from '../../../assets/image-product-1-thumbnail.jpg';

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
    }

    .delete-icon-cart {
        width: 15px;
        height: 17px;
    }
`;

export default function CartItem({ price, quantity, key2 }) {
    return (
        <CartItemStyled key={key2}>
            <img className='cart-item-img' src={imageProduct}/>

            <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>{`$${price} x ${quantity} `}<strong>{`$${price * quantity}`}</strong></p>
            </div>

            <button className='delete-icon-button'><img className='delete-icon-cart' src={deleteIcon}/></button>
        </CartItemStyled>
    )
}