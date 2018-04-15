const initialState = {
  isLoggedIn: true,  
  userName: "Ryan Gary",
  userId: "4x3sf4g5w2r4ad",
  portfolios: [
    {
      id: 1,
      name: "AeroSpace",
      worth: 82.56,
      imgUrl: "",
      sotcks: [
        {
          id: 12313,
          name: "Nasa",
          priceHistory: [{date: "34.56"}]
        }
      ]
    },
    {
      id: 2,
      name: "Cryptos",
      worth: 29.56,
      imgUrl: "",
      sotcks: [
        {
          id: 12313,
          name: "BitCoin"
        }
      ]
    },
    {
      id: 3,
      name: "green tech",
      worth: 126.56,
      imgUrl: "",
      sotcks: [
        {
          id: 12313,
          name: "Tesla"
        }
      ]
    }
  ]
}

// var chartData=[]

// for( var i; i < initialState.portfolios.length; i++ ){
//   initialState.portfolios[i]
// }
// initialState.portfolios.map ( portfolio => {
//   portfolio.sotcks.map(  stock => {
//     stock.priceHistory[0]
//   })
// })

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