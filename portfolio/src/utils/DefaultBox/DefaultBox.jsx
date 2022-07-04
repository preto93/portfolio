import React, { useState, useEffect } from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
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
              <p className="card-text"><FaReact className="font-neon"/></p>
              <div className="card-footer" >
                <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>

              </div>
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
