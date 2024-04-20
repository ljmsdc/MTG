import CardAdd from "./CardAdd";
import CardStatus from "./CardStatus";
import classes from "../assets/sass/CardList.module.sass";

const CardList = ({ cards, handleDeckCard, handleCardStats, game }) => {
  return (
    <div className={classes.container}>
      {cards.map((card, index) =>
        game ? (
          <CardStatus
            key={index}
            image={card?.image_uris?.art_crop}
            name={card?.name}
            id={card?.id}
            power={card?.power}
            toughness={card?.toughness}
            handleDeckCard={handleDeckCard}
            handleCardStats={handleCardStats}
          />
        ) : (
          card?.image_uris?.art_crop != undefined && (
            <CardAdd
              key={index}
              image={card?.image_uris?.art_crop}
              name={card?.name}
              id={card?.id}
              handleDeckCard={handleDeckCard}
            />
          )
        )
      )}
    </div>
  );
};

export default CardList;
