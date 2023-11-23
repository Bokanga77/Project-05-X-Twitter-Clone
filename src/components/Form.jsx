import React from 'react';
const Form = () => {
  return (
  
      <form className="tweet-editor">
      <div>
        <img src="src/images/profile-photo.png" className="avatar" />
      </div>
      <div  >
          <input className="tweet-editor-input" type="text" placeholder="What's happing" />
      </div>
          
      <button className="button" >Tweet</button>
        
      </form>
  );
};
export default Form;