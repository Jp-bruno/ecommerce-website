import styled from 'styled-components';
import QuantityInput from '../inputs/quantityInput';
import AddToCart from '../inputs/addToCartButton';

const ItemDetailsStyle = styled.div`
    padding: 15% 0 0 20%;

    .sneaker-company-p {
        font-size: 0.7rem;
        color: var(--orange);
        font-weight: 700;
        letter-spacing: 2px;
    }

    .product-description {
        color: var(--darkGrayishBlue);
        line-height: 22px;
    }

    #item-title {
        margin: 10px 0 26px;
    }

    #price-with-discount {
        margin: 15px 0 5px;
        font-size: 1.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;

        ::after {
            content: '50%';
            font-size: 0.9rem;
            display: grid;
            place-items: center;
            padding: 0 8px;
            border-radius: 8px;
            color: var(--orange);
            background: var(--paleOrange);
            height: 24px;
            margin-left: 13px;
        }
    }

    #price {
        color: var(--grayishBlue);
        font-weight: 700;
        text-decoration-line: line-through; 
    }

    #inputs-section {
        width: 100%;
        display: flex;
        position: relative;
        margin-top: 50px;
    }
`;


export default function ItemDetails() {
    return (
        <ItemDetailsStyle>
            <p className='sneaker-company-p'>SNEAKER COMPANY</p>

            <h1 id='item-title'>Fall Limited Edition Sneakers</h1>

            <p className='product-description'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
                they'll withstand everything the weather can offer.
            </p>

            <p id='price-with-discount'>$125.00</p>
            <p id='price'>$250.00</p>

            <div id='inputs-section'>
                <QuantityInput />
                <AddToCart />
            </div>
        </ItemDetailsStyle>
    )
}
