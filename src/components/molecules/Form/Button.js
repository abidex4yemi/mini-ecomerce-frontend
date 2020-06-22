import React from 'react';
import PropTypes from 'prop-types';
import { ButtonPrimaryStyled } from '../../atom';

export const Button = ({ buttonText, type, onClick, ...rest }) => {
  return (
    <ButtonPrimaryStyled onClick={onClick} type={type} {...rest}>
      {buttonText}
    </ButtonPrimaryStyled>
  );
};

Button.propTypes = {
  buttonText: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
};
