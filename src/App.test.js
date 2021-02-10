import React from 'react';
import ReactDOM from 'react-dom';
import MyNetworkApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyNetworkApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
