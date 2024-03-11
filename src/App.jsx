import './App.scss';
import Header  from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import { Context as themeContext } from './Context/Theme';
import React from 'react';



function App() {

  const {theme} = React.useContext(themeContext)

  return (
    < div className={`body body--${theme}`}>
    < div className={`container app-flex`}>
      <Header />
      <hr className="line"/>
      <Hero />
      <hr className="linefinish"/>
      <Footer />
    </div>
    </div>
  );
}

export default App;
