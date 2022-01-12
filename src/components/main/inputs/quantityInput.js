import styled from 'styled-components';
import { useState } from 'react';

const InputWrapperStyled = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    background: var(--lightGrayishBlue);
    border-radius: 10px;

    button {
        background: var(--lightGrayishBlue);
        border: none;
        flex-grow: 1;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--orange);
        text-align: center;
        cursor: pointer;
        display: flex;
        justify-content: center;

        span {
            height: 100%;
            display: flex;
            align-items: center;
        }

        :hover {
            background: var(--paleOrange);
        }
    }

    .left {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        span {
            transform: translate(0px, -2px);
        }
    }

    .right {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;

        span {
            transform: translate(0px, -2px);
        }
    }

    input {
        background: var(--lightGrayishBlue);
        flex-grow: 1;  
        text-align: center;
        border: none;   
        font-size: 1rem;     
        font-weight: 700;

        ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

`;

export default function QuantityInput() {
    const [state, setState] = useState(0);

    return (
        <InputWrapperStyled>
            <button className='left' onClick={() => state <= 0 ? false : setState(state - 1)}><span>-</span></button>

            <input type='number' min={0} max={10} value={state}></input>

            <button className='right' onClick={() => state >= 15 ? false : setState(state + 1)}><span>+</span></button>
        </InputWrapperStyled>
    )
}
