import styled from 'styled-components';
import QuantityInput from '../inputs/quantityInput';
import AddToCart from '../inputs/addToCartButton';

const ItemDetailsStyle = styled.div`
    padding: 15% 0 0 20%;

    @media(max-width: 990px) {
        padding: 20px 15px;
    }

    .sneaker-company-p {
        font-size: 0.7rem;
        color: var(--orange);
        font-weight: 700;
        letter-spacing: 2px;

        @media(max-width: 990px) {
            font-size: 0.8rem;
        }
    }

    #item-title {
        margin: 10px 0 26px;

        @media(max-width: 990px) {
            margin: 10px 0 15px;
        }
    }

    .product-description {
        color: var(--darkGrayishBlue);
        line-height: 22px;

        
        @media(max-width: 990px) {
            margin: 10px 0 25px;
        }
    }

    #prices {
        display: flex;
        flex-direction: column;

        @media (max-width: 990px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    #price-with-discount {
        margin: 15px 0 5px;
        font-size: 1.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        
        @media (max-width: 990px) {
            margin: 0;
        }

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

            @media (max-width: 990px) {
                margin: 0 0 0 20px;
                border-radius: 5px;
            }
        }
    }

    #price {
        color: var(--grayishBlue);
        font-weight: 700;
        text-decoration-line: line-through;
    }

    #inputs-section {
        width: 100%;
        height: auto;
        display: flex;
        position: relative;
        margin-top: 50px;

        @media (max-width: 990px) {
            display: flex;
            flex-direction: column;
            width: 100%;
            row-gap: 20px;
            margin-bottom: 200px;
        }
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

            <div id='prices'>
                <p id='price-with-discount'>$125.00</p>
                <p id='price'>$250.00</p>
            </div>


            <div id='inputs-section'>
                <QuantityInput />
                <AddToCart />
            </div>
        </ItemDetailsStyle>
    )
}
