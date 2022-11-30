import React, {useState} from 'react';
import './App.css';
import Board from "../components/Board/Board";
import ResetButton from "../components/ResetButton/ResetButton";
import Tires from "../components/Tires/Tires";


function App() {
  const createState = () => {
    const items = [];

    for (let i = 0; i < 36; i++) {
      const obj = {hasItem: false, clicked: false, id: i};
      items.push(obj);
    }

    const random = Math.floor(Math.random() * (items.length - 1));
    items[random].hasItem = true;

    return items;
  };

  let count = 0;

  const [items, setItems] = useState(createState());


  return (
    <div className="App">
      <div className='items'>
        {items.map(item => (
          <Board key={item.id}/>
        ))}
      </div>
      <Tires count={count}/>
      <ResetButton/>
    </div>
  );
}

export default App;