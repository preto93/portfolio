import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./DefaultBox.scss";
import cn from "classnames";

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
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{card.front}</p>
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{card.back}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultBox;
