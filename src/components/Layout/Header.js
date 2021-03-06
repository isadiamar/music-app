import React from "react";
import classes from "./Header.module.css";

import SearchHeader from './SearchHeader/SearchHeader';
import UserHeader from './UserHeader/UserHeader';

const Header = (props) => {
  const genreHandler = (genre) =>{
    props.onGenre(genre)
  }
  return (
    <nav className={classes.header}>
      <div className={classes["search-header"]}>
        <SearchHeader onSent = {genreHandler}/>
      </div>
      <div className = {classes['user-header']}>
        <UserHeader/>
      </div>
    </nav>
  );
};

export default Header;
