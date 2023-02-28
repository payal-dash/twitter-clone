import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";


function TweetBox() {
 
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://manage.wix.com/_serverless/brand-maker/api/v1/design/c6ff87f6-c9a3-4ee4-a67e-0d31e4811fe0/preview-redirect?preset=thumbnail" />
          <input placeholder="What's happening?"
            type="text"/>
        </div>
        <input className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
