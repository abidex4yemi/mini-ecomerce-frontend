import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const Footer = (props) => {
  const { handleSaveNewProduct, addingProduct } = props;

  const history = useHistory();

  return (
    <StyledFooter>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        Cancel
      </button>
      <button type="button" onClick={handleSaveNewProduct}>
        {addingProduct ? (
          <>
            <Loader type="TailSpin" color="#f4f4f4" height={35} width={35} />
          </>
        ) : (
          'Add'
        )}
      </button>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.header`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #dedede;
    height: 40px;
    
    

    button {
      display: block;
      font-size: 1.5rem;
      width: 100%;
      border: none;
      background: rgb(255, 255, 255);
      border-right:1px solid #dedede;
      cursor: pointer;
      text-transform: uppercase;
      outline: none;
      transition: 0.5;

      :hover {
        background: #28a745;
        color: #fff;
      }

      :last-child {
      border-right: 0;
    }
    }
  }
`;
