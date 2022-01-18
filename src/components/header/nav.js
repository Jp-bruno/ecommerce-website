import styled from 'styled-components';
import CloseButtonMobileMenu from './closeButton.js';

const NavStyled = styled.nav`
    padding: 0 0 0 40px;
    display: flex;
    height: 120px;

    ul {
        list-style-type: none;
        display: flex;
        height: 100%;

        li {
            margin: 0 17px;
            display: flex;
            color: var(--grayishBlue);
            transition: color 0.2s ease, border-bottom 0.2s ease;
            height: 100%;
            align-items: center;
            
            a {
                height: 100%;
                display: grid;
                place-items: center;
            }

            &:hover {
                color: var(--black);
                border-bottom: solid 3px var(--orange);

            }
        }
    }

    
    @media (max-width: 990px) {
        position: fixed;
        z-index: 30;
        height: 100%;
        top: 0;
        padding: 0;
        background: white;
        padding: 20px 0 0 20px;
        flex-direction: column;
        left: -100%;
        transition: left 0.3s ease;
        
        ul {
            flex-direction: column;
            width: 60vw;

            li {
                margin: 15px 0;
                height: auto;
                font-weight: 700;
                color: black;
                font-size: 1.1rem;
                width: fit-content;
            }
        }

        &[data-mobileOpen=true] {
            left: 0;
        }
    }
`;


export default function Nav({ToggleMobileMenu, mobileMenuOpen}) {
    return (
        <NavStyled data-mobileOpen={mobileMenuOpen}>
            <CloseButtonMobileMenu ToggleMobileMenu={ToggleMobileMenu}/>
            <ul>
                <li>
                    <a>Collections</a>
                </li>

                <li>
                    <a>Men</a>
                </li>

                <li>
                    <a>Women</a>
                </li>

                <li>
                    <a>About</a>
                </li>

                <li>
                    <a>Contact</a>
                </li>
            </ul>
        </NavStyled>
    )
}
