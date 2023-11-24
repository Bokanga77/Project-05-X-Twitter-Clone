import React from 'react';
import imge  from '../images/img.png'
import tweetImage  from '../images/tweet-image.png'



const TweetCon = () =>{
    return(
        <div className="tweet">
            <div className="tweet-avatar">
                <img src={imge} alt="profil_newyork_times" />
            </div>
            <div className='tweet-content'>
                <div className='tweet-body'>
                    <div className='tweet-title'>
                        <p> <strong>The new york Times</strong></p>

                    </div>
                    <div className='tweet-text'>
                            <p>Gardening boomed during the pandemic. Six Black writes share how has helped them re-establish, and reimagine, a connection to cultivation and land</p>

                    </div>
                    <div className='tweet-image'>
                        <img src={tweetImage} alt="" />

                    </div>
                    <div className='tweet-actions'>

                    </div>

                </div>



            </div>

        </div>
    );
};
export default TweetCon;