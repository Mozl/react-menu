import React from 'react';
import ReactDOM from 'react-dom';
import Starters from '../components/Starters';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Starters />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Starters />);
  expect(tree).toMatchSnapshot();
});
