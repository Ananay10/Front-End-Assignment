import React from "react";
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton} from 'react-twitter-embed';
import { FaTwitter } from "react-icons/fa";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import classes from "./Twitter.css";
import Holder from "../../Hoc/holder";



const Twitter = () => {
  let TwitterArr = ['realDonaldTrump','PMOIndia','WHO','TOIIndiaNews'];
  return (
    <div className={classes.TwitterFeeds}>
      <Holder>
        <div className={classes.TwitterFeedsHeading}>
        <p>Latest Feeds</p>
        <span><FaTwitter /></span>
        </div>
        <div className={classes.TweetList}>
        {TwitterArr.map(handler => (
          <div key={handler}>
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName={handler}
          options={{ height: 300, tweetLimit: 1 }}
          noHeader
          noFooter
        />
        </div>
        ))}
        </div>
      </Holder>
    </div>
  );
};

export default Twitter;
