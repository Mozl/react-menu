import React from 'react';
import ReactDOM from 'react-dom';
import Dish from '../components/Dish';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

const dish = { name: 'Soup' };

it('renders correctly', () => {
  const tree = renderer.create(<Dish dishName={dish.name} />);
  expect(tree).toMatchSnapshot();
});

it('renders starter dishes', () => {
  const wrapper = mount(<Dish dishName={dish.name} />);
  expect(wrapper.find('Dish').length).toEqual(1);
});
