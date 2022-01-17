import styled from 'styled-components';

const CheckoutButtonStyledWrapper = styled.div`
    padding: 10px 5px 20px;
    background: white !important;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    button {
        display: block;
        width: 90%;
        margin: auto;
        padding: 20px 0;
        border-radius: 11px;
        background: var(--orange);
        border: none;
        color: var(--white);
        font-weight: 700;
        cursor: pointer;
    }
    
`;

export default function CheckoutButton() {
    return (
        <CheckoutButtonStyledWrapper>
            <button>Checkout</button>
        </CheckoutButtonStyledWrapper>
    )
}