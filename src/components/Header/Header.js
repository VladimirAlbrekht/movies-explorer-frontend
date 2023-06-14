import './Header.css';
import Navigation from '../Navigation/Navigation';


function Header({ loggedIn }) {

  // ---РАЗМЕТКА JSX---
  return (
      <header className='header'>
        <div className='container'>
       <Navigation loggedIn={loggedIn}/>
       </div>
      </header>
  );
};

export default Header;