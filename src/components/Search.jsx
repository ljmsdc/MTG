import React, { useEffect, useState } from "react";
import classes from "../assets/sass/Search.module.sass";

const Search = ({ setCards }) => {
  const [cardName, setCardName] = useState("");
  const [cardSuggestedName, setCardSuggestedName] = useState([]);

  const getCards = async () => {
    const response = await fetch(
      "https://api.scryfall.com/cards/search?" +
        new URLSearchParams({ q: cardName })
    );
    const data = await response.json();
    setCards(data.data);
  };

  const getSuggestedNames = async () => {
    const response = await fetch(
      "https://api.scryfall.com/cards/autocomplete?" +
        new URLSearchParams({ q: cardName })
    );
    const data = await response.json();

    setCardSuggestedName(data.data);
  };

  useEffect(() => {
    setTimeout(() => {
      getSuggestedNames();
    }, 1500);
  }, [cardName]);

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="text"
        list="suggestedNames"
        onChange={(e) => setCardName(e.target.value)}
      />
      <button className={classes.btnSearch} onClick={getCards}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path
            fill="#544e68"
            d="M177,138.23v14a8,8,0,0,0,8,8h14a8,8,0,0,0,8-8v-14a8,8,0,0,0-8-8H185A8,8,0,0,0,177,138.23Zm6,14.6,6.3-6.3a5.85,5.85,0,0,1-.95-1.72,5.94,5.94,0,0,1-.35-2.08,6.53,6.53,0,1,1,6.5,6.5,5.94,5.94,0,0,1-2.08-.35,5.85,5.85,0,0,1-1.72-.95l-6.3,6.3Z"
            transform="translate(-176.96 -130.23)"
          />
          <path
            fill="#544e68"
            d="M194.46,138.23a4.49,4.49,0,1,1-3.19,1.32A4.3,4.3,0,0,1,194.46,138.23Z"
            transform="translate(-176.96 -130.23)"
          />
        </svg>
      </button>
      <datalist id="suggestedNames">
        {cardSuggestedName.map((suggestedName, index) => (
          <option key={index} value={suggestedName} />
        ))}
      </datalist>
    </div>
  );
};

export default Search;
