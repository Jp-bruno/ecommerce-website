import styled from 'styled-components';

const ArrowStyled = styled.button`
    position: absolute;
    top: 40%;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0;
    display: grid;
    place-items: center;
    cursor: pointer;

    &.left {
        left: -25px;
    }

    &.right {
        right: -25px;
    }

    svg {
        pointer-events: none;
    }

    &.no-modal {
        display: none;

        @media(max-width: 990px) {
            display: inline;
            position: absolute;
            top: 30%;

            &.left {
                left: 0;
            }

            &.right {
                right: 0;
           }
        }
    }
`;

export default function Arrow({ direction, modal, changeModalImageByArrow, changeMobileImageByArrow }) {
    return (
        <ArrowStyled
            className={`${direction === 'left' ? 'left' : 'right'} ${modal ? 'modal' : 'no-modal'}`}
            onClick={modal ? changeModalImageByArrow : changeMobileImageByArrow}
        >
            {
                direction === 'left' ?
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    :
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
            }
        </ArrowStyled>
    )
}