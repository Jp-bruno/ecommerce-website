import logo from '../../assets/logo.svg';
import Link from 'react';

export default function Logo() {
    return (
        <>
          <a href='/'><img id='logo' src={logo} alt='sneakers-logo' /></a>
        </>
    )
}
