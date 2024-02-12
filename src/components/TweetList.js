import cnn from '../images/cnn.png';
import twitterlogo from '../images/twitterlogo.png';
import nyt from '../images/nyt.png';
// import groupe from '../images/Group.png';
// import Emoji from '../images/Emoji.png';
import React from '../images/React.png';
import Share from '../images/Share.png';
import Retweet from '../images/Retweet.png';
import Reply from '../images/Reply.png';
import imgFeuille from '../images/imgFeuille.png';
import certif from '../images/certif.png';



const TweetList = [
  {
    id: 0,
    userImg: cnn,
    userName: 'CNN',
    iscertfified: certif,
    tagUserName: '@cnn',
    lastTime: "7m",
    text: `President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis`,
    image: null,
    nbrs: [
      {
        iconImage : Reply,
        number: 57,
      },
      {
        iconImage: Retweet,
        number: 144,
      },
      {
        iconImage : Share,
        number: 182,
      },
      {
        iconImage : React,
      }
    ]
  },
  {
    id: 1,
    userImg: nyt,
    userName: 'The New York Times',
    iscertified: certif,
    tagUserName: '@nytimes',
    lastTime: "2h",
    text: `\"I knew my marriage was over. I knew I would need to use my half of the savings to hire a lawyer. And I vowed — a loaded verb choice, I know, given the context — never to be financially dependent on a man again,\" Maggie Smith writes in Modern Love.`,
    image: imgFeuille,
    nbrs: [
      {
        iconImage : Reply,
        number: 57,
      },
      {
        iconImage: Retweet,
        number: 9,
      },
      {
        iconImage : Share,
        number: 19,
      },
      {
        iconImage : React,
        number: 113,
      }
    ]

  },
  {
    id: 2,
    userImg:twitterlogo,
    userName: 'twitter',
    iscertified: certif,
    tagUserName: '@Twitter',
    lastTime: "1 août",
    text: `Free expression is fundamental to a healthy functioning global society - and if it's taken away, it's almost impossible to get back. That's why we will continue to stand up for people's rights, including the over half a billion of you who turn to our platform continually.`,
    image: null,
    nbrs: [
      {
        iconImage : Reply,
        number: 57,
      },
      {
        iconImage: Retweet,
        number: 9,
      },
      {
        iconImage : Share,
        number: 19,
      },
      {
        iconImage : React,
        number: 113,
      }
    ]
  },
  {
    id: 3,
    userImg:twitterlogo,
    userName: 'Twitter',
    iscertified: certif,
    tagUserName: '@Twitter',
    lastTime: "2h",
    text: `En direct, guerre Israël-Hamas : les Etats-Unis mettent leur veto à une résolution du Conseil de sécurité des Nations unies appelant à un cessez-le-feu à Gaza`,
    image: null,
    nbrs: [
      {
        iconImage : Reply,
        number: 57,
      },
      {
        iconImage: Retweet,
        number: 144,
      },
      {
        iconImage : Share,
        number: 182,
      },
      {
        iconImage : React,
      }
    ]
  },
  {
    id: 4,
    userImg:twitterlogo,
    userName: 'Twitter',
    iscertified: certif,
    tagUserName: '@Twitter',
    lastTime: "2h",
    text: `Missed out on a bargain last Friday? Don't make the same mistake twice. <br>Get up to 25% off a home delivery subscription to the Guardian and Observer today, for a limited time. Last chance: http://theguardian.com/autumn23-tw`,
    image: null,
    nbrs:[
      {
        iconImage : Reply,
        number: 57
      },
      {
        iconImage: Retweet,
        number: 144,
      },
      {
        iconImage : Share,
        number: 182
      },
      {
        iconImage : React,
        number: ""
      }
    ]
  },
  {
    id: 5,
    userImg:twitterlogo,
    userName: 'Twitter',
    iscertified: certif,
    tagUserName: '@Twitter',
    lastTime: "2h",
    text: `Ryan O’Neal has died at 82. <br><br><a href="http://theguardian.com/autumn23-tw" target="_blank">http://theguardian.com/autumn23-tw</a>`,
    image: null,
    nbrs: [
      {
        iconImage : Reply,
        number: 57
      },
      {
        iconImage: Retweet,
        number: 144,
      },
      {
        iconImage : Share,
        number: 182
      },
      {
        iconImage : React,
        number: ""
      }
    ]
  },
];

export default TweetList;