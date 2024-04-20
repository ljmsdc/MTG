import React, { useState } from "react";
import classes from "../assets/sass/CardStatus.module.sass";

const CardStatus = ({
  image,
  name,
  id,
  power,
  toughness,
  handleDeckCard,
  handleCardStats,
}) => {
  const [cardPower, setCardPower] = useState(0);
  const [cardToughness, setCardToughness] = useState(0);
  const [edit, setEdit] = useState(false);

  const openEditPanel = () => {
    setEdit(!edit);
  };

  return (
    <div className={classes.container}>
      <aside
        className={edit ? `${classes.card} ${classes.edit}` : `${classes.card}`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <section className={`${classes.sections} ${classes.basic}`}>
          <div className={`${classes.tabs} ${classes.title}`}>
            <a className={classes.text}>
              <p>{name}</p>
            </a>
          </div>
          <div className={`${classes.tabs} ${classes.options}`}>
            <button
              className={classes.btns}
              onClick={() =>
                handleDeckCard({
                  image_uris: { art_crop: image },
                  name: name,
                  id: id,
                })
              }
            >
              <svg
                className={`${classes.svgs}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <rect fill="#f66" x="12" y="11" width="2" height="9" />
                <rect fill="#f66" x="16" y="11" width="2" height="9" />
                <path
                  fill="#f66"
                  d="M99.38,130.23h-14a8,8,0,0,0-8,8v14a8,8,0,0,0,8,8h14a8,8,0,0,0,8-8v-14A8,8,0,0,0,99.38,130.23Zm1,9h-1v13a2,2,0,0,1-2,2h-10a1.92,1.92,0,0,1-1.41-.58,2,2,0,0,1-.59-1.42v-13h-1v-2h5v-1h6v1h5Z"
                  transform="translate(-77.38 -130.23)"
                />
              </svg>
            </button>
            <p className={classes.names}>{name}</p>
          </div>
          <button className={classes.btns} onClick={openEditPanel}>
            <svg
              className={`${classes.svgs} ${classes.gear}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <path
                fill="#fff"
                d="M188.22,105.19l-.4-3.2a3.45,3.45,0,0,1-.61-.3l-.56-.37-3,1.25L181,97.82l2.56-1.95a2,2,0,0,1,0-.34v-.68a1.93,1.93,0,0,1,0-.33l-2.56-2,2.73-4.75,3,1.25c.19-.14.38-.26.58-.38a4.1,4.1,0,0,1,.59-.3l.4-3.2h5.47l.4,3.2a3.14,3.14,0,0,1,.61.3c.19.12.38.24.56.38l3-1.25L201,92.57l-2.56,2c0,.11,0,.23,0,.33v.68a1.4,1.4,0,0,1,0,.34l2.56,1.95-2.73,4.75-2.94-1.25c-.18.13-.37.25-.57.37a4.2,4.2,0,0,1-.6.3l-.4,3.2Zm2.79-6.5a3.35,3.35,0,0,0,2.46-1,3.4,3.4,0,0,0,1-2.48,3.36,3.36,0,0,0-1-2.47,3.48,3.48,0,0,0-4.94,0,3.39,3.39,0,0,0-1,2.47,3.43,3.43,0,0,0,1,2.48A3.35,3.35,0,0,0,191,98.69Z"
                transform="translate(-175.96 -80.19)"
              />
            </svg>
          </button>
        </section>
        <section className={`${classes.sections} ${classes.points}`}>
          <div className={classes.pointsContainer}>
            <button
              className={classes.btns}
              onClick={() => {
                setCardPower(cardPower - 1);
                handleCardStats(id, cardPower - 1, toughness);
              }}
            >
              <svg
                className={`${classes.svgs} ${classes.maths}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  fill="#fff"
                  d="M99.38,80.19h-14a8,8,0,0,0-8,8v14a8,8,0,0,0,8,8h14a8,8,0,0,0,8-8v-14A8,8,0,0,0,99.38,80.19Zm2,18h-18v-6h18Z"
                  transform="translate(-77.38 -80.19)"
                />
              </svg>
            </button>
            <h3>{cardPower}</h3>
            <button
              className={classes.btns}
              onClick={() => {
                setCardPower(cardPower + 1);
                handleCardStats(id, cardPower + 1, toughness);
              }}
            >
              <svg
                className={`${classes.svgs} ${classes.maths}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  fill="#fff"
                  d="M149.17,80.19h-14a8,8,0,0,0-8,8v14a8,8,0,0,0,8,8h14a8,8,0,0,0,8-8v-14A8,8,0,0,0,149.17,80.19Zm2,18h-6v6h-6v-6h-6v-6h6v-6h6v6h6Z"
                  transform="translate(-127.17 -80.19)"
                />
              </svg>
            </button>
          </div>
          <div className={classes.pointsSeparator}>
            <h3>/</h3>
          </div>
          <div className={classes.pointsContainer}>
            <button
              className={classes.btns}
              onClick={() => {
                setCardToughness(cardToughness - 1);
                handleCardStats(id, power, toughness - 1);
              }}
            >
              <svg
                className={`${classes.svgs} ${classes.maths}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  fill="#fff"
                  d="M99.38,80.19h-14a8,8,0,0,0-8,8v14a8,8,0,0,0,8,8h14a8,8,0,0,0,8-8v-14A8,8,0,0,0,99.38,80.19Zm2,18h-18v-6h18Z"
                  transform="translate(-77.38 -80.19)"
                />
              </svg>
            </button>
            <h3>{cardToughness}</h3>
            <button
              className={classes.btns}
              onClick={() => {
                setCardToughness(cardToughness + 1);
                handleCardStats(id, power, cardToughness + 1);
              }}
            >
              <svg
                className={`${classes.svgs} ${classes.maths}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  fill="#fff"
                  d="M149.17,80.19h-14a8,8,0,0,0-8,8v14a8,8,0,0,0,8,8h14a8,8,0,0,0,8-8v-14A8,8,0,0,0,149.17,80.19Zm2,18h-6v6h-6v-6h-6v-6h6v-6h6v6h6Z"
                  transform="translate(-127.17 -80.19)"
                />
              </svg>
            </button>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default CardStatus;
