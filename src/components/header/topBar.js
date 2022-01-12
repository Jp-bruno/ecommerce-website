import styled from 'styled-components';
import Nav from './nav.js';
import Logo from './logo.js';
import CartIcon from './cartIcon.js';
import UserIcon from './userIcon.js';

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

    #cart-icon {
        width: 20px;
        height: 20px;
        margin-right: 50px;
        cursor: pointer;
    }

    #user-icon {
        width: 45px;
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
                <CartIcon />
                <UserIcon />
            </div>
        </TopBarStyled>
    )
}
