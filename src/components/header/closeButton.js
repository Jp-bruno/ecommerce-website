import styled from 'styled-components';
import CloseButtonIcon from '../../assets/icon-close.svg';

const ButtonWrapperStyled = styled.div`
    @media (min-width: 990px) {
        display: none;
    }

    button {
        border: none;
        width: 20px;
        height: 20px;  
        margin: 0 0 50px 0; 

        svg {
            filter: invert(1);
            pointer-events: none;
        }
    }

`;

export default function CloseButtonMobileMenu({ToggleMobileMenu}) {
    return (
        <ButtonWrapperStyled>
            <button onClick={ToggleMobileMenu}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fill-rule="evenodd"/></svg>
            </button>
        </ButtonWrapperStyled>
    )
}