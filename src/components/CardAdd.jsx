import React, { useState } from "react";
import classes from "../assets/sass/CardAdd.module.sass";

const CardAdd = ({ image, name, id, handleDeckCard }) => {
  const [addStatus, setAddStatus] = useState(["messsage"]);

  return (
    <div className={classes.card}>
      <img src={image} className={classes.img} />
      <div className={classes.name}>
        <p>{name}</p>
      </div>
      <div className={classes.add}>
        <button
          className={classes.button}
          onClick={() => {
            setAddStatus([...addStatus, "join"]);

            setTimeout(() => {
              setAddStatus(["messsage"]);
            }, 1500);

            handleDeckCard({
              image_uris: { art_crop: image },
              name: name,
              id: id,
            });
          }}
        >
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <polygon
              fill="#8d697a"
              points="24 18 18 18 18 24 12 24 12 18 6 18 6 12 12 12 12 6 18 6 18 12 24 12 24 18"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          addStatus.length == 1
            ? classes[addStatus[0]]
            : `${classes[addStatus[0]]} ${classes[addStatus[1]]}`
        }
      >
        <h3 className={classes.text}>Carta a&#241;adida</h3>
      </div>
    </div>
  );
};

export default CardAdd;
