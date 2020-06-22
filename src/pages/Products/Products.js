/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchProducts } from '../../state/actions';
import Product from '../../components/molecules/Product/Product';

const Products = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const renderProducts = () => {
    if (props.data.fetchingProducts) {
      return <div>Fetching products...</div>;
    } else {
      return props.data.products.map((product) => (
        <Product key={product._id} productDetails={product} />
      ));
    }
  };

  return (
    <StyledProductPage>
      <h3 className="page-title">Welcome to digital Hub store!</h3>

      <StyledContainer>
        <StyledProductContainer>{renderProducts()}</StyledProductContainer>
      </StyledContainer>
    </StyledProductPage>
  );
};

const mapSateToProps = (state) => state;

export default connect(mapSateToProps, { fetchProducts })(Products);

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const StyledProductContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledProductPage = styled.main`
  padding-top: 30px;
  text-align: center;

  .page-title {
    text-align: center;
    margin: 20px;
  }
`;
