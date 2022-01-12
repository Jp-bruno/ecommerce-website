import styled from 'styled-components';

const NavStyled = styled.nav`
    padding: 0 0 0 40px;
    display: flex;

    ul {
        list-style-type: none;
        display: flex;
        margin-top: 5px;

        li {
            margin: 0 17px;
            display: flex;
            color: hsl(220, 14%, 75%);
            transition: color 0.2s ease;
            
            &:hover {
                color: hsl(219, 9%, 45%);
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
