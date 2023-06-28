import './ProfilePage.css';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';



function ProfilePage({ onSignOut, onUpdate, infoMessage }) {

  // ---РАЗМЕТКА JSX---
  return (
    <section className='profile-page'>
      <div className='container'>
        <Navigation loggedIn={true} />
        <Profile/>
      </div>
    </section>

  );
};

export default ProfilePage;