import { useState } from 'react';
import styled from 'styled-components';

import image1 from '../../../assets/image-product-1.jpg';
import image2 from '../../../assets/image-product-2.jpg';
import image3 from '../../../assets/image-product-3.jpg';
import image4 from '../../../assets/image-product-4.jpg';

import image1thumbnail from '../../../assets/image-product-1-thumbnail.jpg';
import image2thumbnail from '../../../assets/image-product-2-thumbnail.jpg';
import image3thumbnail from '../../../assets/image-product-3-thumbnail.jpg';
import image4thumbnail from '../../../assets/image-product-4-thumbnail.jpg';

const ImageSliderStyle = styled.div`
    #main-img-display {
        width: 100%;
        border-radius: 20px;
    }

    #img-nav {
        margin-top: 30px;
        ul {
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            width: 100%;

            .image-slider-li {
                flex-basis: 22%;
                min-width: 22%;
                cursor: pointer;
                border-radius: 10px;
                outline: solid 0px var(--orange);
                transition: outline 100ms ease;

                img {
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .image-slider-li.active {
        outline: solid 3px var(--orange) !important;
       
    }

    .image-slider-li.active img{
        filter: opacity(50%);
    }
`;

export default function ImageSlider() {
    const [state, setState] = useState(image1);

    function change(ev) {
        let newImgIndex = Number(ev.target.alt.slice(-1)) - 1;

        const images = [image1, image2, image3, image4];
        
        if (state === images[newImgIndex]) {
            return false
        } else {
            const listItems = Array.from(document.querySelectorAll('.image-slider-li'));
            listItems.find(el => el.classList.contains('active') ? el.classList.remove('active') : false);
            setState(images[newImgIndex]);
            ev.target.parentElement.classList.add('active');
        }
    }

    return (
        <ImageSliderStyle>
            <img id='main-img-display' src={state} alt='main-img' />

            <nav id='img-nav'>
                <ul>
                    <li className='image-slider-li active'>
                        <img src={image1thumbnail} alt='image-product-1' onClick={change} />
                    </li>

                    <li className='image-slider-li '>
                        <img src={image2thumbnail} alt='image-product-2' onClick={change} />
                    </li>
                    
                    <li className='image-slider-li '>
                        <img src={image3thumbnail} alt='image-product-3' onClick={change} />
                    </li>
                                        
                    <li className='image-slider-li '>
                        <img src={image4thumbnail} alt='image-product-4' onClick={change} />
                    </li>
                </ul>
            </nav>
        </ImageSliderStyle>
    )
}
