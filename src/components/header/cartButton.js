import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import cartIcon from '../../assets/icon-cart.svg';

const ButtonStyled = styled.button`
  background: url(${cartIcon});
  background-size: contain;
  background-repeat: no-repeat;
  height: 23px;
  width: 23px;
  border: none;
  margin-right: 40px;
  cursor: pointer;
  position: relative;

  &.stuffed-cart-button {
      ::after {
      content: attr(data-length);
      color: white;
      font-size: 0.5rem;
      width: 15px;
      height: 11px;
      transform: scale(1.1);
      position: absolute;
      border-radius: 50px;
      background: var(--orange);
      top: -5px;
      right: -5px;
    }
  }

  @media (max-width: 990px) {
    margin: 0;
  }

`

export default function CartButton() {
  const context = useContext(CartContext);

  return (
    <>
      <ButtonStyled 
        data-length={context.items.length} 
        onClick={context.toggleCart} 
        id='cart-button-top-bar' 
        className={context.items.length > 0 ? 'stuffed-cart-button' : 'empty-cart-button'}
      />
    </>
  )
}
