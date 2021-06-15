import React from "react";
import classes from "./Header.module.css";

import KpopButton from "./KpopButton/KpopButton";
import OpeningButton from "./OpeningButton/OpeningButton";
import JpopButton from "./JpopButton/JpopButton";
import VideogamesButton from "./VideogamesButton/VideogamesButton";
import UserButton from "../UI/Button/UserButton";
//import { useState } from "react/cjs/react.production.min";

const Header = (props) => {
 // const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = (event) => {
    event.preventDefault();
    console.log('pera')
  };

  return (
    <div className={classes.header}>
      <div className={classes["search-header"]}>
        <KpopButton />
        <OpeningButton />
        <JpopButton />
        <VideogamesButton />
      </div>
      <div className={classes["user-header"]}>
        <UserButton className={classes["help-button"]} />
        <UserButton className={classes["help-button"]} onclick={showMenuHandler} />
        
      </div>
    </div>
  );
};

export default Header;
