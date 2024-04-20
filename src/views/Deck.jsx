import React, { useEffect, useState } from "react";

import Search from "../components/Search";
import CardList from "../components/CardList";

import classes from "../assets/sass/Deck.module.sass";

const Deck = () => {
  const [card, setCard] = useState([]);
  const [deckCards, setDeckCards] = useState([]);

  const setCards = (cards) => {
    setCard(cards);
  };

  const addDeckCard = (newCard) => {
    const findit = deckCards.filter((cards) => cards.id === newCard.id);

    if (findit.length > 0) {
      newCard.id += Math.floor(Math.random() * 5000);
    }

    newCard.power = 0;
    newCard.toughness = 0;

    deckCards.length > 0
      ? setDeckCards([...deckCards, newCard])
      : setDeckCards([newCard]);
  };

  const removeDeckCard = (eliminateCard) => {
    setDeckCards(deckCards.filter((cards) => cards.id !== eliminateCard.id));
  };

  const modifyStats = (cardId, power, toughness) => {
    const card = deckCards.filter((cards) => cards.id === cardId);
    card[0].power = power;
    card[0].toughness = toughness;
  }

  useEffect(() => {}, [deckCards, card]);

  return (
    <div className={deckCards.length >= 1 ? `${classes.container} ${classes.half}` : `${classes.container} ${classes.boot}`}>
      <div className={classes.status}>
        <CardList cards={deckCards} handleDeckCard={removeDeckCard} handleCardStats={modifyStats} game={true} />
      </div>
      <div className={classes.search}>
        <Search setCards={setCards} />
      </div>
      <div className={classes.cards}>
        <CardList cards={card} handleDeckCard={addDeckCard} handleCardStats={() => {}} game={false}/>
      </div>
    </div>
  );
};

export default Deck;
