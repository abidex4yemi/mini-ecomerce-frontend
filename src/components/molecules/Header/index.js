import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import './styles.css';
import { primary_color } from '../../atom';
import decodeToken from '../../../utils/decodeToken';

const Header = () => {
  const user = decodeToken();

  return (
    <header className="page-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-image">
            <Link to="/">Home</Link>
          </div>

          {user.id && (
            <StyledCreateNewProduct to={`/add-product`}>
              <span>Add Product</span>
            </StyledCreateNewProduct>
          )}

          <div className="widget">
            <div className="widgets-content">
              <div className="widget-header">
                <a href="#!" className="cart-icon">
                  <i className="fa fa-shopping-cart"></i>
                </a>
                <span className="badge">0</span>
              </div>
              {/* widget-header */}

              <div className="widget-header icontext">
                <a href="#!" className="user-icon">
                  <i className="fa fa-user"></i>
                </a>
                <div className="text">
                  <span>Welcome!</span>
                  <div>
                    {user.id ? (
                      <button
                        className="logout"
                        type="button"
                        onClick={() => {
                          localStorage.removeItem('mini-ecom-token');
                          window.location.href = '/';
                        }}
                      >
                        logout
                      </button>
                    ) : (
                      <>
                        <a href="/login">Sign in</a> |{' '}
                        <a href="/signup"> Register</a>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* widget-header */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Header);

const StyledCreateNewProduct = styled(Link)`
  font-weight: bold;
  border: 2px solid rgb(0, 0, 0);
  padding: 8px 20px;
  text-align: center;
  display: inline-block;
  overflow: hidden;
  width: auto;
  transition: 0.3s;
  border-radius: 5px;
  color: ${primary_color};
  border: 1px solid ${primary_color};

  :hover {
    background: ${primary_color};
    color: #f4f4f4;
  }
`;
