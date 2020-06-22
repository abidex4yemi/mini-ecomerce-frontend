import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createProfile } from '../../state/actions';
import Profile from '../../components/molecules/ProfileForm/Profile';
import validateProfileForm from '../../utils/validateProfileForm';
import styled from 'styled-components';
import { ContainerStyled } from '../../components/atom';

/**
 * Profile `Container component`
 * Note: container component only contains logic no `JSX`
 * this pattern of composing component allows separation of
 * logic from views
 *
 * @param {*} props
 * @returns {Object}
 */
const Signup = (props) => {
  const { creatingProfile } = props.auth;

  const [profile, setProfileValue] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const errors = validateProfileForm(profile);

    setErrors(() => errors);

    if (Object.values(errors).length) {
      window.scrollTo(0, 0);
      return;
    }

    const newProfile = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      password: profile.password,
      email: profile.email,
      phoneNumber: profile.phoneNumber,
    };

    props.createProfile(newProfile).then((res) => {
      if (res.data !== undefined && res.status === 201) {
        return props.history.push('/');
      }

      if (res.response.status === 409) {
        setErrors((prevState) => ({
          ...prevState,
          email: 'email already in use, please login to continue',
        }));

        window.scrollTo(0, 0);
      }
    });
  };

  const inputChange = (field, value) => {
    setProfileValue({
      ...profile,
      [field]: value,
    });
  };

  return (
    <ContainerStyled>
      <MainWrapper>
        <Profile
          errors={errors}
          profile={profile}
          inputChange={inputChange}
          profileStatus={creatingProfile}
          handleSubmit={handleSubmit}
        />
      </MainWrapper>
    </ContainerStyled>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { createProfile })(Signup);

const MainWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem;
`;
