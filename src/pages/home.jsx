import React from 'react';
import Header from '../components/Header.jsx';
import Form from '../components/Form.jsx';
import TweetList from '../components/TweetList.js';
import ManagerTweet from '../components/ManagerTweet.jsx';
// import Tweets from '../components/Tweets.jsx';

function Home() {
  return (
    <main className="timeline">

      <Header />
      <Form />
      <ManagerTweet tweet={TweetList}/> 
    </main>
  );
}

export default Home;