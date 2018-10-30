import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/Menu';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Menu />);
  expect(tree).toMatchSnapshot();
});

it('renders wrapper for menu', () => {
  const wrapper = shallow(<Menu />);
  expect(wrapper.find('MenuWrapper').length).toEqual(1);
});
