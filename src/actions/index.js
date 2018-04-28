import axios from 'axios';

export const login = (username, password, navigate) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    setTimeout(() => {axios.get("http://localhost:3000/users")
      .then(response => {
        let user = response.data.find( user => user.userName === username && user.password === password)
        if(user) {
          dispatch({
            type: "LOGIN",
            payload: user
          })
          navigate("App")
        } else {
          dispatch({
            type: "LOGIN_ERROR"
          })
        }
      })
      .catch( err => {
        console.log(err)
      })}, Math.random() * 5000)
  }
}

export const logout = () => dispatch => {
  dispatch({
      type: 'LOGOUT'
  });
};

// export const signup = (username, password, info) => {
//   return (dispatch) => {
//   };
// };
