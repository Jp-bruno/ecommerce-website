import { useState } from 'react';
import styled from 'styled-components';
import Modal from './modal';
import ImageNav from './imageNav';

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
`;

export default function ImageSlider() {
    const [state, setState] = useState({
        activeImage: image1,
        modalIsOpen: false
    });

    function change(ev) {
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
            <img className='main-img-display' src={state.activeImage} alt='main-img' onClick={toggleModal} />

            <ImageNav change={change} activeImage={state.activeImage}/>

            {state.modalIsOpen ? <Modal toggleModal={toggleModal} activeImage={state.activeImage}/> : null}
        </ImageSliderStyle>
    )
}
