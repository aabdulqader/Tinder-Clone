import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "../../Firebase";
import "./TinderCards.css";

const TinderCards = () => {
  const [peoples, setPeoples] = useState([]);
  console.log(peoples);

  useEffect(() => {
    const unsubscribe = db
      .collection("cards")
      .onSnapshot((snapshot) =>
        setPeoples(snapshot.docs.map((card) => card.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {peoples.map(({ imageURL, name }) => (
          <TinderCard
            key={name}
            className="swipe"
            // preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${imageURL})` }}
              className="card"
            >
              <h3>{name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
