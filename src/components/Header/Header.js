import './Header.css';
import Navigation from '../Navigation/Navigation';


function Header({ loggedIn }) {

  // ---РАЗМЕТКА JSX---
  return (
      <header className='header'>
       <Navigation loggedIn={loggedIn}/>
      </header>
  );
};

export default Header;