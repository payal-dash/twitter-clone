import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) 
 {
    return (
      <div className="post" >
        <div className="post__avatar">
          <Avatar src="https://manage.wix.com/_serverless/brand-maker/api/v1/design/c6ff87f6-c9a3-4ee4-a67e-0d31e4811fe0/preview-redirect?preset=thumbnail" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Payal Dash{" "}
                <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @payaldash22
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>This is my first post</p>
            </div>
          </div>
          <img src=" https://media.giphy.com/media/Zd0DYHlBmZTGaiIFRY/giphy.gif" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
         </div>
      </div>
    );
  }


export default Post;
