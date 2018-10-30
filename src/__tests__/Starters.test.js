import React from 'react';
import ReactDOM from 'react-dom';
import Starters from '../components/Starters';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import menuData from '../menu-data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Starters dishes={menuData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Starters dishes={menuData} />);
  expect(tree).toMatchSnapshot();
});

it('renders starter dishes', () => {
  const wrapper = mount(<Starters dishes={menuData} />);
  expect(wrapper.find('Dish').length).toEqual(4);
});
