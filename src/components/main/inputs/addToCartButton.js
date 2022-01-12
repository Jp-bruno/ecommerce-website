import styled from 'styled-components';

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

        img {
            transform: scale(0.8);
            filter: brightness(0) invert(1);
            margin-right: 10px;
        }
    }

`;

export default function AddToCart() {
    return (
        <ButtonWrapper>
            <button><img src='./images/icon-cart.svg' alt='add to cart' />Add to cart</button>
        </ButtonWrapper>
    )
}
