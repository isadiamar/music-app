import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [cardClicked, setCardClicked] = useState(false);

  const [isKpop, setIsKpop] = useState(true);
  const [isJpop, setIsJpop] = useState(false);
  const [isOpenings, setIsOpenings] = useState(false);
  const [isVideogames, setIsVideogames] = useState(false);

  let cardClasses = `${classes.card}  ${cardClicked ? classes["card-opened"] : ""}
    ${isJpop ? classes.isJpop : ""}
    ${isKpop ? classes.isKpop : ""}
    ${isOpenings ? classes.isOpenings : ""}
    ${isVideogames ? classes.isVideogames : ""}
  `;

  let cardInnerClasses = `${classes["inner-card"]}
    ${isJpop ? classes.isInnerJpop : ""}
    ${isKpop ? classes.isInnerKpop : ""}
    ${isOpenings ? classes.isInnerOpenings : ""}
    ${isVideogames ? classes.isInnerVideogames : ""}`

  useEffect(() => {
    (props.genre === 'jpop') ? setIsJpop(true) : setIsJpop(false);
    (props.genre === 'kpop') ? setIsKpop(true) : setIsKpop(false);
    (props.genre === 'openings') ? setIsOpenings(true) : setIsOpenings(false);
    (props.genre === 'videogames') ? setIsVideogames(true) : setIsVideogames(false);

  }, [props.genre])

  const openCardHandler = (event) => {
    event.preventDefault();
    if (cardClicked === true) {
      setCardClicked(false);
      console.log("I am desactivated");
      return;
    }
    setCardClicked(true);
    console.log("I am activated");
  };

  return (
    <React.Fragment>
      <div onClick={openCardHandler} className={cardClasses}>
        <div className={cardInnerClasses}>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default Card;
