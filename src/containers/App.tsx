import React, {useState} from 'react';
import './App.css';
import Board from "../components/Board/Board";
import ResetButton from "../components/ResetButton/ResetButton";
import Tires from "../components/Tires/Tires";

let count = 0;

function App() {

  const createState = () => {
    const items = [];

    for (let i = 0; i < 36; i++) {
      const obj = {hasItem: false, clicked: false, id: i, onBodyClick: () => openCell(i)};
      items.push(obj);
    }

    const random = Math.floor(Math.random() * (items.length - 1));
    items[random].hasItem = true;

    return items;
  };

  const [items, setItems] = useState(createState());
  const [counter, setCounter] = useState(0);

  const resetGame = () => {
    count = 0;
    setCounter(count);
    const newArr = createState();
    const itemsCopy = [...items];
    for (let i = 0; i < itemsCopy.length; i++) {
      itemsCopy[i].hasItem = newArr[i].hasItem;
      itemsCopy[i].clicked = newArr[i].clicked;
    }
    setItems(itemsCopy);
  }

  const openCell = (id: number) => {
    const index = items.findIndex(i => i.id === id);
    const itemsCopy = [...items];

    if (!itemsCopy[index].clicked) {
      itemsCopy[index].clicked = true;
      count++;
    }

    if (itemsCopy[index].hasItem === true) {
      alert('You win')
      resetGame()
    }

    setCounter(counter);
    setItems(itemsCopy);
  };


  return (
    <div className="App">
      <Board board={items}/>
      <Tires count={count}/>
      <ResetButton onClickHandler={resetGame}/>
    </div>
  );
}

export default App;