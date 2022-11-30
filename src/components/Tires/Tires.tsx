import React from 'react';

interface Props {
  count: number
}

const Tires: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Tires: {props.count}</p>
    </div>
  );
};

export default Tires;