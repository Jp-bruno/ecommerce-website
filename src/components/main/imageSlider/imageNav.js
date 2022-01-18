import styled from 'styled-components';

import image1thumbnail from '../../../assets/image-product-1-thumbnail.jpg';
import image2thumbnail from '../../../assets/image-product-2-thumbnail.jpg';
import image3thumbnail from '../../../assets/image-product-3-thumbnail.jpg';
import image4thumbnail from '../../../assets/image-product-4-thumbnail.jpg';

const NavStyled = styled.nav`
    margin-top: 30px;
        
    ul {
        margin: auto;
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        width: 90%;

        .image-slider-li {
            flex-basis: 22%;
            min-width: 22%;
            cursor: pointer;
            border-radius: 10px;
            outline: solid 0px var(--orange);
            transition: outline 100ms ease;
            background: white;

            img {
                border-radius: 10px;
                width: 100%;
                height: 100%;

                :hover {
                    filter: opacity(50%);
                }
            }
        }
            
        .image-slider-li.active {
            outline: solid 3px var(--orange) !important;
        }

        .image-slider-li.active img{
            filter: opacity(50%);
        }
    }
`;

export default function ImageNav({change, modal}) {
    return (
        <NavStyled id='img-nav'>
            <ul>
                <li className={`image-slider-li ${modal ? 'modal' : 'active'}`}>
                    <img src={image1thumbnail} alt='image-product-1' onClick={change} />
                </li>

                <li className={`image-slider-li ${modal ? 'modal' : ''}`}>
                    <img src={image2thumbnail} alt='image-product-2' onClick={change} />
                </li>

                <li className={`image-slider-li ${modal ? 'modal' : ''}`}>
                    <img src={image3thumbnail} alt='image-product-3' onClick={change} />
                </li>

                <li className={`image-slider-li ${modal ? 'modal' : ''}`}>
                    <img src={image4thumbnail} alt='image-product-4' onClick={change} />
                </li>
            </ul>
        </NavStyled>
    )
}