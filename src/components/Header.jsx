import React from 'react';
import TopTweets from "../images/Top-Tweets.png"

//Création de la composante Header qui sert de l'entête de la page.

const Header = () => {
  return (

    <header className="header" >
      <p className='page-title' >HOME</p>
      <button className='top-tweets '><img src={TopTweets} alt="icon_tweet" /></button>

    </header>

  );
};
export default Header;