import React from 'react';
import styled from 'styled-components';

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
    return <StartersWrapper />;
  }
}
export default Starters;
