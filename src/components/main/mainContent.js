import styled from 'styled-components';
import ImageSlider from './imageSlider/imageSlider';
import ItemDetails from './itemDetails/itemDetails';

const MainStyled = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 7% 12%;
`;

export default function MainContent() {
    return (
        <MainStyled>
            <ImageSlider />
            <ItemDetails />
        </MainStyled>
    )
}
