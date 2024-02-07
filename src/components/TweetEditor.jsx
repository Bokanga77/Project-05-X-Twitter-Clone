import React from 'react';
import media  from '../images/Media.png'
import Gif  from '../images/Gif.png'
import Group  from '../images/Group.png'
import emoji from '../images/Emoji.png'
import schedule  from '../images/Schedule.png'

const Form = () => {
  return (
  
      <div className="tweet-editor">
        <div>
            <img src ="src/images/profile-photo.png" className ="avatar" />
        </div>
        <div className='tweet-editor-form' >
            <input className='tweet-editor-input'  type="text" placeholder="What's happing" />
      
            <div className="tweet-editor-buttons" >
                  <div className="tweet-editor-actions">
                  <img src={media} alt="icon-div"  />
                  <img src={Gif} alt="icon-div"  />
                  <img src={Group} alt="icon-div"  />
                  <img src={emoji} alt="icon-div"  />
                  <img src={schedule} alt="icon-div"  />
            </div>
              {/* Création du button de validation Tweet */}
                  <button className="button" >Tweet</button>
        </div>
      </div>
          
      
    </div>
  );
};
export default Form;