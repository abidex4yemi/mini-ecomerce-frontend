import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const ProductPreview = (props) => {
  const { name, description, attributes } = props.newProductDetails;
  const { imageUrl, sizes, price } = attributes;

  const renderSizes = () => {
    return (
      <StyledProductSizes>
        <p>Available sizes</p>
        <ul>
          {sizes.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </StyledProductSizes>
    );
  };

  const renderProductPreview = () => {
    return (
      <StyledProductContainer>
        <StyledImageContainer>
          <img src={imageUrl} alt="" />
        </StyledImageContainer>
        <StyledProductDetails>
          <h4>{name}</h4>
          {ReactHtmlParser(description)}
          {renderSizes()}
          <h4>{price && `$${price}`}</h4>
        </StyledProductDetails>
      </StyledProductContainer>
    );
  };

  return (
    <StyledProductPreview>
      <p className="preview-title">Product preview</p>
      {renderProductPreview()}
    </StyledProductPreview>
  );
};

export default ProductPreview;

const StyledProductPreview = styled.article`
  border: 1px solid #000;
  min-height: 530px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .preview-title {
    text-align: center;
    color: #8b8b8b;
    margin: 5px 0 10px 0;
    font-size: 1em;
    text-transform: uppercase;
  }

  h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const StyledProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImageContainer = styled.div`
  width: 50%;
`;

const StyledProductDetails = styled.div`
  padding: 1rem;
  width: 40%;
  overflow: auto;

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
    overflow-wrap: break-word;
  }

  h4 {
    margin: 20px 0;
  }
`;

const StyledProductSizes = styled.div`
  p {
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 5px;
      margin-right: 8px;
      text-align: center;
      min-width: 30px;
      border-radius: 2px;
      box-sizing: border-box;
      border: 1px solid #dedede;
    }
  }
`;
