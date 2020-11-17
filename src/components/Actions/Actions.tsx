import React from 'react';
import './Actions.css';

const Actions = (props: any) => {
  return (
    <div className="Actions">
        <button onClick={props.randomize}>Randomize</button>
        <button onClick={props.reset}>Randomize</button>
    </div>
  );
}

export default Actions;
