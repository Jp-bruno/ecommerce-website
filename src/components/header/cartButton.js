import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import cartIcon from '../../assets/icon-cart.svg';

const ButtonStyled = styled.button`
  background: url(${cartIcon});
  background-size: contain;
  background-repeat: no-repeat;
  height: 25px;
  width: 25px;
  border: none;
  margin-right: 40px;
  cursor: pointer;
`

export default function CartButton() {
  const context = useContext(CartContext);


  return (
    <>
      <ButtonStyled onClick={context.toggleCart} />
    </>
  )
}
