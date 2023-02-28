import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1624864266749886466"} />
        
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="payaldash22"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100090867513387"}
          options={{ text: "#reactjs is awesome", via: "payaldash" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
  