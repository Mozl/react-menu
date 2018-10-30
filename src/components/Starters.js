import React from 'react';
import styled from 'styled-components';
import Dish from './Dish';

const StartersWrapper = styled.div`
  width: 50%;
  display: flex;
  border: 0.1rem solid black;
  flex-direction: column;
  text-color: black;
  border-radius: 1.25rem;
  padding: 1rem;
  margin-top: 1rem;
`;

StartersWrapper.displayName = 'StartersWrapper';

class Starters extends React.Component {
  render() {
    const starters = this.props.dishes.starters;
    return (
      <StartersWrapper>
        <h2>Starters</h2>
        {starters.map(dish => (
          <Dish key={dish.id} dishName={dish.name} />
        ))}
      </StartersWrapper>
    );
  }
}
export default Starters;
