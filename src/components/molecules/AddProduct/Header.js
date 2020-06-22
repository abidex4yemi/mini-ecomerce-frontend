import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h3>Add digital product</h3>

      <ul>
        <li>Item</li>
        <li>Pricing & Upload</li>
        <li>Additional Info</li>
        <li>Form</li>
        <li>Options</li>
        <li>Social</li>
      </ul>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  h3 {
    text-align: center;
    margin: 5px 0 10px 0;
    color: #8b8b8b;
    font-weight: bold;
    font-size: 1em;
    text-transform: uppercase;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dedede;
    padding: 0.5em 2em;

    li {
      display: block;
      font-weight: normal;
      color: #8b8b8b;
      font-size: 1.5rem;
    }
  }
`;
