import React from 'react';
import ReactDOM from 'react-dom';

import Main from './App';

describe('Main', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
