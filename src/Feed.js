import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";

import "./Feed.css";


function Feed() {
  

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <TweetBox/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        
      </div>

    </div>
  );
}

export default Feed;
