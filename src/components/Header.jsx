import React from 'react';
import TopTweets from "../images/Top-Tweets.png"
const Header = () => {
  return (

    <header className="header" >
      <p className='page-title' >HOME</p>
      <img className='TopTweets' src={TopTweets} alt="icon_tweet" />

    </header>
  );
};
export default Header;