import { useState } from 'react';
import styled from 'styled-components';

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
                cursor: pointer;


                img {
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .image-slider-li.active {
        border: solid 3px var(--orange);
        border-radius: 15px;
    }

    .image-slider-li.active img{
        filter: opacity(50%);
    }
`;

export default function ImageSlider() {
    const [state, setState] = useState('./images/image-product-1.jpg');

    function change(ev) {
        let newImgSrc = './images/' + ev.target.alt + '.jpg';
        
        const mainDisplay = document.getElementById('main-img-display');

        const listItems = Array.from(document.querySelectorAll('.image-slider-li'));

        if (mainDisplay.src === newImgSrc) {
            return false
        } else {
            listItems.find(el => el.classList.contains('active') ? el.classList.remove('active') : false);
            mainDisplay.src = newImgSrc;
            ev.target.parentElement.classList.add('active');
        }
    }

    return (
        <ImageSliderStyle>
            <img id='main-img-display' src={state} alt='' />

            <nav id='img-nav'>
                <ul>
                    <li className='image-slider-li active'>
                        <img src='./images/image-product-1-thumbnail.jpg' alt='image-product-1' onClick={change} />
                    </li>

                    <li className='image-slider-li '>
                        <img src='./images/image-product-2-thumbnail.jpg' alt='image-product-2' onClick={change} />
                    </li>
                    
                    <li className='image-slider-li '>
                        <img src='./images/image-product-3-thumbnail.jpg' alt='image-product-3' onClick={change} />
                    </li>
                                        
                    <li className='image-slider-li '>
                        <img src='./images/image-product-4-thumbnail.jpg' alt='image-product-4' onClick={change} />
                    </li>
                </ul>
            </nav>
        </ImageSliderStyle>
    )
}
