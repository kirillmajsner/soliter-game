import React from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  onBodyClick: React.MouseEventHandler;
  id: number;
}

const Cell: React.FC<Props> = (props) => {
  const classNames = ['CellClosed'];

  if (props.hasItem) {
    classNames.push('LookFor');
  }

  if (props.clicked) {
    classNames.push('CellOpened');
  }

  return (
    <div className={classNames.join(' ')} onClick={props.onBodyClick}>
    </div>
  );
};

export default Cell;