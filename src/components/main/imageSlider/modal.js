import styled from 'styled-components';
import ImageNav from './imageNav';
import Arrow from './arrow';
import { useState } from 'react';

import image1 from '../../../assets/image-product-1.jpg';
import image2 from '../../../assets/image-product-2.jpg';
import image3 from '../../../assets/image-product-3.jpg';
import image4 from '../../../assets/image-product-4.jpg';

const ModalStyled = styled.div`
    @media (max-width: 990px) {
        display: none;
    }

    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    display: grid;
    place-items: center;

    #modal-content-wrapper {
        width: 35%;
        display: grid;
        position: relative;
    }

    img {
        border-radius: 18px;
        width: 100%;
    }

    .close-button {
        width: 20px;
        place-self: end;
        height: 20px;
        background: 0;
        border: none;
        margin: 0 0 20px 0;
        cursor: pointer;

        svg {
            transform: scale(1.2);
        }

        :hover > svg path {
            fill: var(--orange);
        }
    }

    .modal-change-image-button {
        position: absolute;
        top: 40%;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        border: 0;
        display: grid;
        place-items: center;
        cursor: pointer;

        &.left {
            left: -25px;
        }

        &.right {
            right: -25px;
        }

        svg {
            pointer-events: none;
        }
    }
`;

export default function Modal({ toggleModal, activeImage }) {
    const [state, setState] = useState({
        modalActiveImage: activeImage,
        images: [image1, image2, image3, image4]
    })

    function change(ev) {
        let newImgIndex = Number(ev.target.alt.slice(-1)) - 1;

        if (state === state.images[newImgIndex]) {
            return false
        } else {
            const listItems = Array.from(document.querySelectorAll('.image-slider-li.modal'));

            listItems.find(el => el.classList.contains('active') ? el.classList.remove('active') : false);

            setState({ ...state, modalActiveImage: state.images[newImgIndex] });

            ev.target.parentElement.classList.add('active');
        }
    }

    function changeModalImageByArrow(ev) {
        let index = state.images.findIndex(el => el === state.modalActiveImage);

        const listItems = Array.from(document.querySelectorAll('.image-slider-li.modal'));

        let itemIndex = listItems.findIndex(el => el.classList.contains('active'));

        if (ev.target.classList.contains('left')) {
            setState({
                ...state,
                modalActiveImage: state.images[index - 1] ? state.images[index - 1] : state.images[state.images.length - 1] 
            })

            listItems.find(el => el.classList.contains('active') ? el.classList.remove('active') : false);

            listItems[itemIndex - 1] ? listItems[itemIndex - 1].classList.add('active') : listItems[listItems.length - 1].classList.add('active') 
        } else {
            setState({
                ...state,
                modalActiveImage: state.images[index + 1] ? state.images[index + 1] : state.images[0] 
            })
            
            listItems.find(el => el.classList.contains('active') ? el.classList.remove('active') : false);

            listItems[itemIndex + 1] ? listItems[itemIndex + 1].classList.add('active') : listItems[0].classList.add('active')
        }
    }

    return (
        <ModalStyled>
            <div id='modal-content-wrapper'>
                <button className='close-button' onClick={toggleModal}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#ffff" fillRule="evenodd" />
                    </svg>
                </button>

                <Arrow direction='left' modal={true} changeModalImageByArrow={changeModalImageByArrow} />

                <img src={state.modalActiveImage} alt='main-img' onClick={toggleModal} />

                <Arrow direction='right' modal={true} changeModalImageByArrow={changeModalImageByArrow} />


                <ImageNav change={change} modal={true} />
            </div>
        </ModalStyled>
    )
}