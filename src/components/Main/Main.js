import './Main.css';
import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';

import Footer from '../Footer/Footer';

function Main() {
  return (
    <React.Fragment>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Main;
