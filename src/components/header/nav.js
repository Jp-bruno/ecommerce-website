import styled from 'styled-components';

const NavStyled = styled.nav`
    padding: 0 0 0 40px;
    display: flex;
    height: 100%;

    ul {
        list-style-type: none;
        display: flex;
        height: 100%;

        li {
            margin: 0 17px;
            display: flex;
            color: hsl(220, 14%, 75%);
            transition: color 0.2s ease, border-bottom 0.2s ease;
            height: 100%;
            align-items: center;
            
            &:hover {
                color: hsl(219, 9%, 45%);
                border-bottom: solid 3px red;

                a {
                    transition: transform 0.4s ease;
                    transform: translateY(2px);
                }
            }
        }
    }
`;


export default function Nav() {
    return (
        <NavStyled>
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
