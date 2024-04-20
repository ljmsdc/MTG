import React from "react";
import reverseCard from "../assets/img/reverseCard.jpeg";
import classes from "../assets/sass/Splash.module.sass";

const Splash = () => {
  return (
    <div className={classes.container}>
      <img src={reverseCard} className={classes.img}/>
    </div>
  );
};

export default Splash;
