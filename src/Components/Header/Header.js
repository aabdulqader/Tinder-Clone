import React from "react";
import "./Header.css";
import logo from "../../logo.png";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";
const Header = ({ backButton, backToChat }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton>
          <ArrowBackIosIcon onClick={() => history.push("/")} />
        </IconButton>
      ) : backToChat ? (
        <IconButton>
          <ArrowBackIosIcon onClick={() => history.push("/chat")} />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon />
        </IconButton>
      )}
      <Link to="/">
        <img src={logo} alt="Tinder" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
