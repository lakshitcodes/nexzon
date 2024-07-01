import React, { useEffect, useState } from "react";
import "./Home.css";
import alexaImage from "./assets/alexa.jpeg";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ inventory }, dispatch] = useStateValue();
  const [randomIndexes, setRandomIndexes] = useState([]);

  useEffect(() => {
    function getRandomIndexes(length) {
      let n = inventory.length;
      const indexes = [];
      while (indexes.length < length) {
        const randomIndex = Math.floor(Math.random() * n);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }
      return indexes;
    }

    const indexes = getRandomIndexes(12);
    setRandomIndexes(indexes);
  }, [inventory]);

  if (inventory.length === 0 || randomIndexes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <div className="home__container">
        <img src={alexaImage} alt="Alexa" className="home__image" />
        <div className="home__row">
          {randomIndexes.slice(0, 4).map((index) => (
            <Product
              key={inventory[index].id}
              id={inventory[index].id}
              title={inventory[index].title}
              image={inventory[index].image}
              price={inventory[index].price}
              rating={inventory[index].rating}
            />
          ))}
        </div>
        <div className="home__row">
          {randomIndexes.slice(4, 8).map((index) => (
            <Product
              key={inventory[index].id}
              id={inventory[index].id}
              title={inventory[index].title}
              image={inventory[index].image}
              price={inventory[index].price}
              rating={inventory[index].rating}
            />
          ))}
        </div>
        <div className="home__row">
          {randomIndexes.slice(8, 11).map((index) => {
            return (
              <Product
                key={inventory[index].id}
                id={inventory[index].id}
                title={inventory[index].title}
                image={inventory[index].image}
                price={inventory[index].price}
                rating={inventory[index].rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
