// @flow
import React from 'react';

type Params = {
  name: string,
  countFunc: (count: number) => void
};

const MyButton = ({ name, countFunc }: Params) => (
  <button type="button" onClick={() => countFunc(1)}>{name}</button>
);

export default MyButton;