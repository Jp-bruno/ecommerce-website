import styled from 'styled-components';
import Nav from './nav.js';
import Logo from './logo.js';
import CartButton from './cartButton.js';
import UserIcon from './userIcon.js';
import Cart from './cart/cart.js';
import MenuToggler from './menuToggler.js';
import { useState } from 'react';

const TopBarStyled = styled.div`
    border-bottom: solid 1px var(--lightGrayishBlue);
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    @media (max-width: 990px) {
        margin: 0;
        height: 70px;
        justify-content: none;

        #user-icon {
            width: 25px;
            margin: 0 20px;
        }

        #logo {
            margin: 0 0 0 10px;
        }
    }

`

export default function TopBar() {
    const [state, setState] = useState({
        mobileMenuOpen: false
    })

    function ToggleMobileMenu() {
        setState({
            mobileMenuOpen: !(state.mobileMenuOpen)
        })
    }

    return (
        <TopBarStyled>
            <div className='top-bar-separator'>
                <MenuToggler ToggleMobileMenu={ToggleMobileMenu}/>
                <Logo />
                <Nav ToggleMobileMenu={ToggleMobileMenu} mobileMenuOpen={state.mobileMenuOpen} />
            </div>

            <div className='top-bar-separator'>
                <CartButton />
                <UserIcon />
            </div>

            <Cart />
        </TopBarStyled>
    )
}
