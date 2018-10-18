import { shallow } from 'enzyme';
import React from 'react';

import App from './app';


describe('my fucking component', () => {

  it('renders without crashing', () => {

    const app = shallow(<App />);
    expect(app).toBeTruthy();
  });
});
