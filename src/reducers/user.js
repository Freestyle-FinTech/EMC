const initialState = {
  isLoggedIn: false,  
  portfolios: []
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
  // debugger
  switch (action.type) {
    case 'LOGIN': 
        return { ...action.payload, 
            isLoggedIn: true,
        }
    case 'LOGOUT':
        debugger
        return {isLoggedIn: false}
    default:
        return state;
  }
}

export default user