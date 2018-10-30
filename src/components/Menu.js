import React from 'react';
import styled from 'styled-components';

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

const Starters = styled.div`
  width: 50%;
  display: flex;
  border: 0.1rem solid black;
  flex-direction: column;
  text-color: black;
  border-radius: 1.25rem;
  padding: 1rem;
  margin-top: 1rem;
`;

Starters.displayName = 'Starters';

class Menu extends React.Component {
  render() {
    return (
      <MenuWrapper>
        <Starters />
      </MenuWrapper>
    );
  }
}
export default Menu;
