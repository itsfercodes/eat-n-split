import { useState } from 'react';
import Button from './Button';

/* eslint-disable react/prop-types */
function Friend({ friend: { name, image, balance } }) {
  return (
    <li>
      <img alt={name} src={image} />
      <h3>{name}</h3>
      {balance > 0 && (
        <p className="green">
          {name} owes you ${balance}
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You owe {name} ${balance * -1}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}
export default Friend;
