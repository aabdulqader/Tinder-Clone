import React from "react";
import "./Footer.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <IconButton className="footer__repeat">
        <ReplyIcon />
      </IconButton>
      <IconButton className="footer__left">
        <CloseIcon />
      </IconButton>
      <IconButton className="footer__star">
        <StarRateIcon />
      </IconButton>
      <IconButton className="footer__right">
        <FavoriteIcon />
      </IconButton>
      <IconButton className="footer__lightning">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
};

export default Footer;
