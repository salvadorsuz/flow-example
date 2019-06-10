import React from 'react';

const MyButton = ({ name, countFunc }) => (
  <button type="button" onClick={() => countFunc()}>{name}</button>
);

export default MyButton;