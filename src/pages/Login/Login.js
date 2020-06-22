import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../components/molecules';
import {
  ContainerStyled,
  borderRadius,
  white,
  boxShadow,
  SmallStyled,
} from '../../components/atom';

/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
const Login = (props) => {
  const {
    handleSubmit,
    inputChange,
    user,
    errors,
    loginIn,
    invalidCredentials,
  } = props;

  return (
    <main>
      <ContainerStyled>
        <MainWrapper>
          <FormContainer>
            <h3>Welcome Back!</h3>
            {invalidCredentials && (
              <p>
                <SmallStyled>{invalidCredentials}</SmallStyled>
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="email"
                inputChange={inputChange}
                error={errors.email}
                value={user.email}
                labelText="Email"
              />

              <Input
                type="password"
                name="password"
                inputChange={inputChange}
                error={errors.password}
                value={user.password}
                labelText="Password"
              />
              <StyledLoginLink to="/reset-password">
                Forgot your password ?
              </StyledLoginLink>
              <Button
                disabled={loginIn ? true : false}
                buttonText={
                  (loginIn && (
                    <Loader
                      type="TailSpin"
                      color="#f4f4f4"
                      height={35}
                      width={35}
                    />
                  )) ||
                  'login'
                }
                onClick={handleSubmit}
                type="submit"
              />
            </form>
          </FormContainer>
        </MainWrapper>
      </ContainerStyled>
    </main>
  );
};

export default Login;

const MainWrapper = styled.section`
  display: flex;
  padding: 10rem 0;
  justify-content: space-around;
  align-items: center;
  min-height: calc(100vh - 100px);
`;

const FormContainer = styled.div`
  width: 300px;
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  padding: 2rem;
  background: ${white};

  h3,
  p {
    text-align: center;
  }

  button[type='submit'] {
    line-height: 20px;
  }
`;

const StyledLoginLink = styled(Link)`
  display: block;
  color: #306efe;
  font-size: 1.5rem;
  text-align: right;
  margin: -5px 0 15px 0;
  font-style: italic;
`;
