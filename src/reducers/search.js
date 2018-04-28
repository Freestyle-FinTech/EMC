initialState = {
  selectedPortfolio: {
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
    "stocks": [
      {
        "id": 12313,
        "name": "Nasa"
      }
    ]
  },
  selectedStock: {
    "id": "3",
    "heading": "NASA",
    "name": "Space stuff",
    "currentSharePrice": 54.00,
    "priceChange": "+0.03%"
  },
  stockResults: [],
  portfolioResults: []
}

export default stuff = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STOCK_RESULTS':
      console.log('set stock from search')
      // debugger
      return { ...state, stockResults: action.payload}
    case 'CREATE_PORTFOLIO':
      // debugger
      console.log('set selected portfolio')
      return { ...state, selectedPortfolio: action.payload}
    case 'SET_SELECTED_STOCK':
      console.log('set selected stock')
      // debugger
      return { ...state, selectedStock: action.payload}
    default:
      return state;
  }
  return state
}