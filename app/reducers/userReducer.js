const initialState = {
  id: undefined,
  name: undefined,
  email: undefined,
  token: undefined,
  refresh: undefined,
};

export default (user = initialState, {USER, ...newUser}) =>
  USER ? newUser : user;
