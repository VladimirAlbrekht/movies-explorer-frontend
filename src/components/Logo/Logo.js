import './Logo.css';
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';

function Logo() {

  // ---РАЗМЕТКА JSX---
  return (
    <Link to='/' className='button logo'>
      <img className='logo__image' src={logo} alt='Логотип приложения Movies' />
    </Link>
  );
};

export default Logo;