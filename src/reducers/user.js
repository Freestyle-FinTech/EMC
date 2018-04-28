const initialState = {
  "userName": "Ryan Gary",
  "password": "password",
  "pictureUrl": "https://randomuser.me/api/portraits/thumb/men/83.jpg",
  "portfolioWorth": 111.23,
  "portfolioGrowth": 3.23,
  "id": "1",
  "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem repellendus amet totam dolor nostrum ex impedit, autem quas, ullam, cumque quam doloribus a. Nobis ipsa aliquam eos eligendi tempora incidunt!",
  "portfolios": [
    {
      "id": 1,
      "name": "AeroSpace",
      "worth": 82.56,
      "priceChange": 2.34,
      "creator": {
        "username": "@uncleSam",
        "name": "George Bush",
        "portfolioUrl": "https://randomuser.me/api/portraits/thumb/men/81.jpg" 
      },
      "imgUrl": "https://i.guim.co.uk/img/media/7cd49fa81b1a41f1631902afdec6a2386ca38713/0_0_4000_3160/master/4000.jpg?w=700&q=55&auto=format&usm=12&fit=max&s=194fc11c9e124a94391d757dfd0562c7",
      "sotcks": [
        {
          "id": 12313,
          "name": "Nasa"
        }
      ]
    },
    {
      "id": 2,
      "name": "Cryptos",
      "creator": {
        "username": "@mikeTheFrog",
        "name": "Kim Lee",
        "portfolioUrl": "https://randomuser.me/api/portraits/thumb/men/73.jpg" 
      },
      "worth": 29.56,
      "priceChange": -1.13,
      "imgUrl": "https://i2-prod.manchestereveningnews.co.uk/incoming/article14379834.ece/ALTERNATES/s615/050318_LRR_MEN_WomenTech.jpg",
      "sotcks": [
        {
          "id": 12313,
          "name": "BitCoin"
        }
      ]
    }
  ],
  "isLoggedIn": true
}

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
      // debugger
      console.log('add new portfolio to users portfolios')      
      let newPortfolio = action.payload
      let portfolios = [...state.portfolios, newPortfolio]
      return { ...state}
    default:
      return state;
  }
}

export default user