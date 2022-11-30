import React from 'react';

interface Props {
  onClickHandler: React.MouseEventHandler
}

const ResetButton: React.FC<Props> = (props) => {
  return (
    <div>
      <button onClick={props.onClickHandler}>Reset</button>
    </div>
  );
};

export default ResetButton;