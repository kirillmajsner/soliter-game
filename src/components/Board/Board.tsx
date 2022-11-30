import React from 'react';
import Cell from "./Cell";

interface Props {
  board: Items[];
}

interface Items {
  hasItem: boolean;
  clicked: boolean;
  onBodyClick: React.MouseEventHandler;
  id: number
}

const Board: React.FC<Props> = ({board}) => {
  return (
    <div className='items'>
      {board.map((item, index) => (
       <Cell
         key={index}
         hasItem={item.hasItem}
         clicked={item.clicked}
         onBodyClick={item.onBodyClick}
         id={index}
       />
      ))}
    </div>
  );
};

export default Board;