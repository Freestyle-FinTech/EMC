const initialState = {
  isLoggedIn: true,  
  userName: "Ryan Gary",
  userId: "4x3sf4g5w2r4ad",
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': 
        return { ...state, 
            isLoggedIn: true,
            username: action.username,
            password: action.password
        }
    case 'LOGOUT':
        return { ...state, 
            isLoggedIn: false,
            username: '',
            password: ''
        }
    default:
        return state;
  }
}

export default user