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

    const indexes = getRandomIndexes(6);
    setRandomIndexes(indexes);
  }, []);

  if (inventory.length === 0 || randomIndexes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <div className="home__container">
        <img src={alexaImage} alt="Alexa" className="home__image" />
        <div className="home__row">
          <Product
            id={inventory[randomIndexes[0]].id}
            title={inventory[randomIndexes[0]].title}
            image={inventory[randomIndexes[0]].image}
            price={inventory[randomIndexes[0]].price}
            rating={inventory[randomIndexes[0]].rating}
          />
          <Product
            id={inventory[randomIndexes[1]].id}
            title={inventory[randomIndexes[1]].title}
            image={inventory[randomIndexes[1]].image}
            price={inventory[randomIndexes[1]].price}
            rating={inventory[randomIndexes[1]].rating}
          />
        </div>
        <div className="home__row">
          <Product
            id={inventory[randomIndexes[2]].id}
            title={inventory[randomIndexes[2]].title}
            image={inventory[randomIndexes[2]].image}
            price={inventory[randomIndexes[2]].price}
            rating={inventory[randomIndexes[2]].rating}
          />
          <Product
            id={inventory[randomIndexes[3]].id}
            title={inventory[randomIndexes[3]].title}
            image={inventory[randomIndexes[3]].image}
            price={inventory[randomIndexes[3]].price}
            rating={inventory[randomIndexes[3]].rating}
          />
          <Product
            id={inventory[randomIndexes[4]].id}
            title={inventory[randomIndexes[4]].title}
            image={inventory[randomIndexes[4]].image}
            price={inventory[randomIndexes[4]].price}
            rating={inventory[randomIndexes[4]].rating}
          />
        </div>
        <div className="home__row">
          <Product
            id={inventory[randomIndexes[5]].id}
            title={inventory[randomIndexes[5]].title}
            image={inventory[randomIndexes[5]].image}
            price={inventory[randomIndexes[5]].price}
            rating={inventory[randomIndexes[5]].rating}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
