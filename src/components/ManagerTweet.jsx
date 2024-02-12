

function ManagerTweet({tweet}) {
      return (
        <div className="tweets">
          {/* mappage du tweet */}
          {tweet.map((e) => (
            /* mappage par refference d'ID qu'on retrouve dans le tableau  */
            <div className="tweet" key={e.id}>
            <div className="tweet-avatar">
              {/* mappage de l'image de profit qu'on retrouve dans le tableau   */}
              <img src={e.userImg} alt="UserProfil"/>
            </div>
              {/* mappage du contenu du tweet qu'on retrouve dans le tableau   */}
            <div className="tweet-content">
              <div className="tweet-body">
              {/* mappage du contenu du tweet qu'on retrouve dans le tableau   */}
                <h2 className="tweet-title">
                  <span className="tweet-title-author">{e.userName}</span>
                  <img src={e.iscertfified} alt="" className="tweet-title-author" />
                  <span className="tweet-title-details">{e.tagUserName}</span>
                  <span className="tweet-title-details">{e.lastTime}</span>
                </h2>
                
                <div className="tweet-text">{e.text}</div>
                <div className="tweet-image">
                  <img src={e.image} alt="" />
                </div>
{/* Création d'une nouvelle map pour le tableau de la gestion de icon et nombre avec qui ils sont  lié */}
                <div className="tweet-actions">
                  {e.nbrs.map ((element, index) => (
                  <div key={index} className="tweet-action" >
                    <img src={element.iconImage} alt="action icon"/>
                    <span>{element.number}</span>
                    
                  </div>))}
                </div>
              </div>
            </div>
          </div>  
          ))}
       </div>
      )
  }
export default ManagerTweet;