import axios from 'axios';

const generateId = () => Math.floor(Math.random()*16777215).toString(16);

export const login = (username, password, navigate) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    setTimeout(() => {axios.get("http://localhost:3000/users")
      .then(response => {
        let user = response.data.find( user => user.username === username && user.password === password)
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

export const clearSelectedPortfolio = () => dispatch => (
  dispatch({type: 'CLEAR_SELECTED_PORTFOLIO'})
)

export const clearSelectedStock = () => dispatch => {
  debugger
  return dispatch({type: 'CLEAR_SELECTED_STOCK'})
}


export const buyAsset = (investmentValue, numberOfShares) => (dispatch, getState) => {
  let currentState = getState();
  let user = {...currentState.user}
  let selectedPortfolio = currentState.search.selectedPortfolio
  let selectedStock = currentState.search.selectedStock  
  let asset = {...selectedStock, investmentValue, numberOfShares}
  let portfolioIndex;
  user.portfolios.map( (portfolio, i) => {
    portfolio.id === selectedPortfolio.id ? portfolioIndex = i : null 
  })
  if(portfolioIndex) {
    user.portfolios[portfolioIndex].stocks.push(asset)
    return axios({
      url: `http://localhost:3000/users/${user.id}`,
      data: user,
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => { 
      dispatch({type: 'ADD_ASSET_TO_PORTFOLIO', payload: user.portfolios})
    }).catch( err => {
      console.log(err)
    })
  }
};

export const logout = () => dispatch => {
  dispatch({
      type: 'LOGOUT'
  });
};

export const createPortfolio = (newPortfolio, navigate) => (dispatch, getState) => {
  let user = getState().user
  let hello = {...newPortfolio,
    "id": generateId(),
    "creator": {
      "username": user.username,
      "name": user.name,
      "portfolioUrl": user.portfolioUrl
    },
    "stocks": [],
    "worth": 29.56,
    "priceChange": Math.round(Math.random()/100) * 100 + 1
  }
  let portfolios = [...user.portfolios, hello]
  let newUser = {...user, portfolios}
  
  return axios({
    url: `http://localhost:3000/users/${user.id}`,
    data: newUser,
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then( res => {
    dispatch({type: 'CREATE_PORTFOLIO', payload: hello})
    navigate('Home')
  }).catch( err => {
    console.log(err)
  })
}

export const setSelectedStock = (stock) => dispatch => {
  dispatch({
    type: 'SET_SELECTED_STOCK',
    payload: stock
  })
}

export const selectPortfolio = (portfolio) => dispatch => {
  dispatch({
    type: 'SET_SELECTED_PORTFOLIO',
    payload: portfolio
  })
}
// export const signup = (username, password, info) => {
//   return (dispatch) => {
//   };
// };
