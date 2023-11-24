import React from 'react';
import Header from '../components/Header.jsx';
import Form from '../components/Form.jsx';
import Tweets from '../components/Tweets.jsx';

function Home() {
  return (
    <main className="timeline">

      <Header />
      <Form />
      <Tweets />
    </main>
  );
}

export default Home;
