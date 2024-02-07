import TweetList from './TweetList';


function ManagerTweet() {
  const tweets = TweetList.map((tweet) => {


    return (
      <div className="tweet" key={tweet.id}>
        <p>{tweet.text}</p>
      </div>  )
  }
  )
}
export default ManagerTweet;