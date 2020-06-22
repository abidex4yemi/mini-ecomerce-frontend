import * as jwtDecode from 'jwt-decode';

const decodeToken = () => {
  try {
    const token = localStorage.getItem('mini-ecom-token');

    const user = jwtDecode(token);

    return user;
  } catch (error) {
    return error.message;
  }
};

export default decodeToken;
