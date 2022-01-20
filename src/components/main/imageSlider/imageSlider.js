import { useState } from 'react';
import styled from 'styled-components';
import Modal from './modal';
import ImageNav from './imageNav';
import Arrow from './arrow';

import image1 from '../../../assets/image-product-1.jpg';
import image2 from '../../../assets/image-product-2.jpg';
import image3 from '../../../assets/image-product-3.jpg';
import image4 from '../../../assets/image-product-4.jpg';

const ImageSliderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-img-display {
        width: 90%;
        border-radius: 20px;
        cursor: pointer;
    }

    @media(max-width: 990px) {
        
        .main-img-display {
            width: 100%;
            border-radius: 0;
        }
    }
`;

export default function ImageSlider() {
    const [state, setState] = useState({
        activeImage: image1,
        modalIsOpen: false
    });

    function changeImageByNav(ev) {
        let newImgIndex = Number(ev.target.alt.slice(-1)) - 1;

        const images = [image1, image2, image3, image4];

        if (state === images[newImgIndex]) {
            return false
        } else {
            const listItems = Array.from(document.querySelectorAll('.image-slider-li'));
            listItems.find(el => el.classList.contains('active') ? el.classList.remove('active') : false);
            setState({ ...state, activeImage: images[newImgIndex] });
            ev.target.parentElement.classList.add('active');
        }
    }

    function changeMobileImageByArrow(ev) {
        const images = [image1, image2, image3, image4];

        let activeImageIndex = images.findIndex(el => el === state.activeImage);

        if (ev.target.classList.contains('left')) {
            setState({
                ...state,
                activeImage: images[activeImageIndex - 1] ? images[activeImageIndex - 1] : images[images.length - 1]
            })
        } else {
            setState({
                ...state,
                activeImage: images[activeImageIndex + 1] ? images[activeImageIndex + 1] : images[0]
            })
        }
    }

    function toggleModal() {
        if (!(state.modalIsOpen)) {
            setState({
                ...state,
                modalIsOpen: !(state.modalIsOpen)
            })

            setTimeout(() => {
                const listItems = Array.from(document.querySelectorAll('.image-slider-li'));

                const listItemsModal = Array.from(document.querySelectorAll('.image-slider-li.modal'));

                let selectedItemIndex = listItems.find(el => el.classList.contains('active')).firstChild.alt.slice(-1) - 1;

                listItemsModal[selectedItemIndex].classList.add('active');
            }, 100)

        } else {
            setState({
                ...state,
                modalIsOpen: !(state.modalIsOpen)
            })
        }
    }

    return (
        <ImageSliderStyle>
            <Arrow direction='left' modal={false} changeMobileImageByArrow={changeMobileImageByArrow} />

            <img className='main-img-display' src={state.activeImage} alt='main-img' onClick={toggleModal} />
            
            <Arrow direction='right' modal={false} changeMobileImageByArrow={changeMobileImageByArrow} />

            <ImageNav changeImageByNav={changeImageByNav} activeImage={state.activeImage} />

            {state.modalIsOpen ? <Modal toggleModal={toggleModal} activeImage={state.activeImage} /> : null}
        </ImageSliderStyle>
    )
}
