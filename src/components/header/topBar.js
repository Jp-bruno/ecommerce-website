import styled from 'styled-components';
import Nav from './nav.js';
import Logo from './logo.js';
import CartButton from './cartButton.js';
import UserIcon from './userIcon.js';
import Cart from './cart/cart.js';

const TopBarStyled = styled.div`
    border-bottom: solid 1px var(--lightGrayishBlue);
    display: flex;
    justify-content: space-between;
    margin: 0% 10% 0 10%;
    height: auto;

    .top-bar-separator {
        display: flex;
        align-items: center;
    }

    #logo {
        height: 20px;
        width: 140px;
    }

    #user-icon {
        width: 50px;
        cursor: pointer;
        border-radius: 100px;
        transition: outline-width 0.1s ease;

        &:hover {
            outline: solid 2px var(--orange);
        }
    }
`

export default function TopBar() {
    return (
        <TopBarStyled>
            <div className='top-bar-separator'>
                <Logo />
                <Nav />
            </div>

            <div className='top-bar-separator'>
                <CartButton />
                <UserIcon />
            </div>

            <Cart />
        </TopBarStyled>
    )
}
