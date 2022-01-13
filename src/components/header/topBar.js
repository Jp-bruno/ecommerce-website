import styled from 'styled-components';
import Nav from './nav.js';
import Logo from './logo.js';
import CartButton from './cartButton.js';
import UserIcon from './userIcon.js';
import Cart from './cart.js';

const TopBarStyled = styled.div`
    border-bottom: solid 1px hsl(223, 64%, 98%);
    display: flex;
    justify-content: space-between;
    margin: 0 10%;
    height: 100px;

    .top-bar-separator {
        display: flex;
        align-items: center;
    }

    #logo {
        height: 25px;
        width: 158px;
    }

    #user-icon {
        width: 45px;
        cursor: pointer;
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
