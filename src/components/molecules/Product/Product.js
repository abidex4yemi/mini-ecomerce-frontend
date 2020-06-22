import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Product = (props) => {
  const { name, attributes, _id } = props.productDetails;
  const { imageUrl } = attributes[0];

  return (
    <StyledSingleProduct rel="bookmark">
      <Link to={`/products/${_id}`}>
        <img src={imageUrl} alt={name} />
      </Link>

      <StyledProductInfo>
        <h3>{name}</h3>
        <StyleButtonContainer>
          <StyledShopNowButton to={`/products/${_id}`}>
            <span>Shop Now</span>
          </StyledShopNowButton>
        </StyleButtonContainer>
      </StyledProductInfo>
    </StyledSingleProduct>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  attributes: PropTypes.arrayOf(PropTypes.object),
  _id: PropTypes.string,
};

export default Product;

const StyledSingleProduct = styled.article`
  width: calc(90% / 4 + 0px);
  margin-bottom: 40px;
  border: 1px solid #ccc;
`;

const StyledProductInfo = styled.div`
  padding: 16px 32px 10px 32px;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 36px;
    letter-spacing: 1;
  }
`;

const StyleButtonContainer = styled.div`
  text-align: center;
`;

const StyledShopNowButton = styled(Link)`
  color: rgb(0, 0, 0);
  font-weight: bold;
  border: 2px solid rgb(0, 0, 0);
  padding: 10px 30px;
  text-align: center;
  background: rgb(255, 255, 255);
  display: inline-block;
  overflow: hidden;
  margin: 6px auto;
  max-height: 44px;
  max-width: 510px;
  width: auto;
  transition: 0.3s;

  :hover {
    background: rgb(0, 0, 0);
    color: #fff;
  }
`;
