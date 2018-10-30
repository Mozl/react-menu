import React from 'react';
import styled from 'styled-components';
import Starters from './Starters';
import menuData from '../menu-data';

const MenuWrapper = styled.div`
  display: flex;
  border: 0.1rem solid black;
  flex-direction: column;
  text-color: black;
  border-radius: 1.25rem;
  padding: 1rem;
  margin-top: 1rem;
`;

MenuWrapper.displayName = 'MenuWrapper';

class Menu extends React.Component {
  render() {
    return (
      <MenuWrapper>
        <h1>Menu</h1>
        <Starters dishes={menuData} />
      </MenuWrapper>
    );
  }
}
export default Menu;
