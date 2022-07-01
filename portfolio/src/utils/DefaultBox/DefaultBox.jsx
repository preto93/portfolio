import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./DefaultBox.scss";
import cn from "classnames";
import { FaReact } from "react-icons/fa";

const DefaultBox = ({ card }) => {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

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
              <p className="card-text"><FaReact style={{fontSize: '10rem', color: 'red'}} /> {/* <img src={card.front} alt='front' width='50%' style={{backgroundColor: 'black'}}/> */}</p>
            </div>
            <div className="card-footer">
              <p className="card-text">VER MAS</p>
            </div>
          </div>
          <div className="card back">
            <div className="card-body">
              <p className="card-text">{card.back}</p>
              <p className="card-text">{card.stack}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultBox;
