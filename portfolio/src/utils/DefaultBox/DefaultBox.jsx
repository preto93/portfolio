import React, { useState, useEffect } from "react";
import { Box, Fab, Button, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./DefaultBox.scss";
import cn from "classnames";
import { FaReact } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const DefaultBox = ({ card }) => {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="flip-card-outer" onClick={handleClick}>
        <div
          className={cn("flip-card-inner", {
            showBack,
            "hover-trigger": card.variant === "hover",
          })}
        >
          <div className="card front">
            <div className="card-body">
              <img src={card.photo} alt="" width="100%" />
              <div className="card-footer">
                <Fab color="info" aria-label="add">
                  <AddIcon />
                </Fab>
              </div>
            </div>
          </div>
          <div className="card back">
            <Container>
            <div className="card-body">
              <p className="card-text">{card.back}</p>
              {/* <p className="card-text">{card.stack}</p> */}
              <div className='card-icons'>
                {card.linkGit && (
                  <Button onClick={() => openInNewTab(card.linkGit)}>
                    <GitHubIcon color="info" />
                  </Button>
                )}
                {card.linkWeb && (
                  <Button onClick={() => openInNewTab(card.linkWeb)}>
                  
                    <LanguageIcon color="info" />
                  </Button>
                )}
              </div>
              
              {/*  <p className="card-text">{card.icon}</p>
              <p className="card-text">{card.link}</p> */}
            </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultBox;
