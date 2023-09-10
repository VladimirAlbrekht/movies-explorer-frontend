import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


function Header({ loggedIn }) {
  // ---РАЗМЕТКА JSX---
  return (
    <header className='header'>
      <Logo />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
};

export default Header;