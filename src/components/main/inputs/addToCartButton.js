import styled from 'styled-components';
import cartIcon from '../../../assets/icon-cart.svg'


const ButtonWrapper = styled.div`
    margin-left: 20px;

    button {
        background: var(--orange);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 150px);
        border: none;
        border-radius: 8px;
        position: absolute;
        color: var(--white);
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 10px 10px var(--paleOrange);
        transition: filter 0.3s ease;

        img {
            transform: scale(0.8);
            filter: brightness(0) invert(1);
            margin-right: 10px;
        }

        :hover {
            filter: opacity(0.8);
        }
    }

`;

export default function AddToCart() {
    return (
        <ButtonWrapper>
            <button><img src={cartIcon} alt='add to cart' />Add to cart</button>
        </ButtonWrapper>
    )
}