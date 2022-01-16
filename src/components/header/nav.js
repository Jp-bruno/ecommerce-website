import styled from 'styled-components';

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
