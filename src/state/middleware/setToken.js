export const setToken = (store) => (next) => (action) => {
  // Get token from browser local storage
  let token = '';

  if (action.type === 'logged_in' || action.type === 'create_profile') {
    token = action.payload.token;

    localStorage.setItem('mini-ecom-token', token);
  }

  next(action);
};
