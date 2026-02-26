import React, { useState } from "https://esm.sh/react@19";
import ReactDOM from "https://esm.sh/react-dom@19/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const tshirts = [
    {
      title: 'Blue T-Shirt',
      image: 'blue-t-shirt.jpg',
      price: 7.99,
      stock: 4,
      quantity: 1
    },
    {
      title: 'Bright Purple T-Shirt',
      image: 'bright-purple-t-shirt.jpg',
      price: 5.99,
      stock: 1,
      quantity: 1
    },
    {
      title: 'Cobalt Blue T-Shirt',
      image: 'cobalt-blue-t-shirt.jpg',
      price: 9.99,
      stock: 5,
      quantity: 1
    },
    {
      title: 'Green T-Shirt',
      image: 'green-t-shirt.jpg',
      price: 6.99,
      stock: 0,
      quantity: 1
    },
    {
      title: 'Grey T-Shirt',
      image: 'blue-t-shirt.jpg',
      price: 4.99,
      stock: 2,
      quantity: 1
    },
    {
      title: 'Light Green T-Shirt',
      image: 'light-green-t-shirt.jpg',
      price: 7.99,
      stock: 4,
      quantity: 1
    },
    {
      title: 'Purple T-Shirt',
      image: 'purple-t-shirt.jpg',
      price: 7.99,
      stock: 0,
      quantity: 1
    },
    {
      title: 'Red T-Shirt',
      image: 'red-t-shirt.jpg',
      price: 6.99,
      stock: 3,
      quantity: 1
    },
    {
      title: 'Teal T-Shirt',
      image: 'teal-t-shirt.jpg',
      price: 7.99,
      stock: 2,
      quantity: 1
    }
  ]

  const BuyButton = ({ onBuy, quantity }) => {
    return (
      <button onClick={() => onBuy(quantity)}>
        Buy
      </button>
    );
  };

  const BuyOption = ({ stock, quantity, onBuy }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(quantity)
    if (stock > 0) {
      const options = [];
      for (let i = 1; i <= stock; i++) {
        options.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
      }

      return (
        <div>
          <div>{stock} left!</div>
          <select
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(e.target.value)}
          >
            {options}
          </select>
          <BuyButton onBuy={onBuy} quantity={selectedQuantity} />
        </div>
      );
    }

    return <div>Out of stock</div>;
  };

  const TshirtItem = (props) => {
    const image = `images/${props.image}`;
    const [stock, setStock] = React.useState(props.stock);

    const decreaseStock = (quantity) => {
      if (stock > 0) {
        setStock(prevStock => prevStock - quantity);
      }
    };

    return (
      <div>
        <img src={image} width={250} />
        <h2>{props.title}</h2>
        <h3>$ {props.price}</h3>
        <BuyOption
          stock={stock}
          quantity={props.quantity}
          onBuy={decreaseStock}
        />
      </div>
    );
  };

  const ListTshirts = ({ tshirts }) => {
    return (
      <div>
        {tshirts.map((tshirt, index) => (
          <TshirtItem key={index} {...tshirt} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1> T-Shirts </h1>
      <ListTshirts tshirts={tshirts} />
    </div>
  );
};

root.render(<App />);