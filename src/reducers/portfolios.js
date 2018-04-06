const initialState = [
  {
    id: 1,
    name: "AeroSpace",
    worth: 82.56,
    imgUrl: "",
    sotcks: [
      {
        id: 12313,
        name: "Nasa"
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

export default portfolios = (state = initialState, action) => {
  // switch (action.type) {
  //   default:
  //     return state
  // }
  return state
}