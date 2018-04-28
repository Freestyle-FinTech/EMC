// import axios from 'axios';
export const login = (user) => dispatch => {
  debugger  
  dispatch({
    type: "LOGIN",
    payload: user
  })
};

export const logout = () => dispatch => {
  dispatch({
      type: 'LOGOUT'
  });
};

export const signup = (username, password, info) => {
  return (dispatch) => {
  };
};

// export const createPortfolio = () => {

// }