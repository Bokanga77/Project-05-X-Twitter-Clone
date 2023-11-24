import React from 'react';
import tweetImage from '../images/tweet-profile-photo.png'
import TweetCon from './TweetContent';

const Tweets= () => {
    return (
        <div className='tweets'>
            <div className='tweet'>
                <img src={tweetImage} alt="photo-profil-cnn" />
                <span>cnn</span>
                <p>President Joe biden touted a new agreement reached with the european union to ease Trump-era tariffs on aluminum and steel as a "major brakthrough" that would serve to both strengthen the us steel industry and combat the global climate crisis.</p>
            
            </div>
            < TweetCon />
            
            
        </div>

    );
};
export default Tweets;