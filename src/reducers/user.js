const initialState = {
  "userName": "Ryan Gary",
      "password": "password",
      "id": "1",
      "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem repellendus amet totam dolor nostrum ex impedit, autem quas, ullam, cumque quam doloribus a. Nobis ipsa aliquam eos eligendi tempora incidunt!",
      "portfolios": [
        {
          "id": 1,
          "name": "AeroSpace",
          "worth": 82.56,
          "imgUrl": "https://static.vecteezy.com/system/resources/previews/000/139/911/non_2x/vector-grey-gradient-abstract-background.jpg",
          "sotcks": [
            {
              "id": 1,
              "name": "Nasa"
            }
          ]
        },
        {
          "id": 1,
          "name": "AeroSpace",
          "worth": 82.56,
          "imgUrl": "https://images.pexels.com/photos/247671/pexels-photo-247671.jpeg?auto=compress&cs=tinysrgb&h=350",
          "sotcks": [
            {
              "id": 1,
              "name": "Nasa"
            }
          ]
        },
        {
          "name": "Shit",
          "imgUrl": "https://images.pexels.com/photos/247671/pexels-photo-247671.jpeg?auto=compress&cs=tinysrgb&h=350"
        },
        {
          "name": "Mn m",
          "imgUrl": "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350"
        }
      ],
      "isLoggedIn": true
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
      // debugger
      return state
    case 'CREATE_PORTFOLIO':
      let newPortfolio = action.payload
      let portfolios = [...state.portfolios, newPortfolio]
      return { ...state, portfolios}
    default:
      return state;
  }
}

export default user