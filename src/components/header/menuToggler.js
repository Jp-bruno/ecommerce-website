import styled from 'styled-components';
import MenuIcon from '../../assets/icon-menu.svg';

const TogglerStyle = styled.div`
    @media (min-width: 990px) {
        display: none;
    }

    margin: 0 0 0 20px;
    width: 16px;
    height: 18px;
    background-repeat: no-repeat;
    background: url(${MenuIcon});
    background-size: cover;
    position: relative;

    input[type='checkbox'] {
        width: 100%;
        filter: opacity(0);
    }
`;

export default function MenuToggler({ToggleMobileMenu}) {
    return (
        <TogglerStyle>
            <input type='checkbox' onClick={ToggleMobileMenu}/>
        </TogglerStyle>
    )
}