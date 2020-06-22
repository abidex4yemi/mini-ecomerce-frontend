import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import {
  borderRadius,
  medium_space,
  white,
  boxShadow,
  SmallStyled,
} from '../../atom';

import { Button, Input } from '..';
import FlashMessages from '../FlashMessages';

/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
const Profile = (props) => {
  const { errors, profile, inputChange, profileStatus, handleSubmit } = props;

  return (
    <FormContainer>
      <h3>{'Create Account'}</h3>
      <form>
        <Input
          type="text"
          name="firstName"
          inputChange={inputChange}
          error={errors.firstName}
          value={profile.firstName}
          labelText="First name"
        />

        <Input
          type="text"
          name="lastName"
          inputChange={inputChange}
          error={errors.lastName}
          value={profile.lastName}
          labelText="Last name"
        />

        <Input
          type="email"
          name="email"
          inputChange={inputChange}
          error={errors.email}
          value={profile.email}
          labelText="Email"
        />

        <Input
          type="password"
          name="password"
          inputChange={inputChange}
          error={errors.password}
          value={profile.password}
          labelText="Password"
        />

        <Input
          type="password"
          name="confirmPassword"
          inputChange={inputChange}
          error={errors.confirmPassword}
          value={profile.confirmPassword}
          labelText="Re-Type Password"
        />

        <Input
          type="text"
          name="phoneNumber"
          inputChange={inputChange}
          error={errors.phoneNumber}
          value={profile.phoneNumber}
          labelText="Phone Number"
        />

        <FlashMessages />
        {props.sessionExpired && (
          <StyledSessionExpire>
            <SmallStyled style={{ textAlign: 'center' }}>
              {props.sessionExpired}
            </SmallStyled>
          </StyledSessionExpire>
        )}
        <Button
          buttonText={
            (profileStatus && (
              <Loader type="TailSpin" color="#f4f4f4" height={35} width={35} />
            )) ||
            'Submit'
          }
          onClick={handleSubmit}
          type="button"
        />
      </form>
    </FormContainer>
  );
};

export default Profile;

const FormContainer = styled.div`
  width: 400px;
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  padding: 4rem;
  background: ${white};

  h3 {
    margin-bottom: ${medium_space};
    text-align: center;
  }

  button[type='submit'] {
    line-height: 20px;
  }
`;

const StyledSessionExpire = styled.p`
  text-align: center;
  margin-bottom: 5px;
`;
