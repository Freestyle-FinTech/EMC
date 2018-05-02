const initialState = [
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
    "stocks": [
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
    "stocks": [
      {
        "id": 12313,
        "name": "BitCoin"
      }
    ]
  },
  {
    "id": 3,
    "name": "green tech",
    "creator": {
      "username": "@derp",
      "name": "Jane Bush",
      "portfolioUrl": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
    },
    "worth": 126.56,
    "priceChange": 0.01,
    "imgUrl": "https://dmi3w0goirzgw.cloudfront.net/gallery-images/840x560/406000/600/406638.jpg",
    "stocks": [
      {
        "id": 12313,
        "name": "Tesla"
      }
    ]
  },
  {
    "id": 4,
    "name": "Ducks",
    "worth": 82.56,
    "priceChange": 3.34,
    "creator": {
      "username": "@auntLydia",
      "name": "Sara Leah",
      "portfolioUrl": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
    },
    "imgUrl": "https://www.gtplanet.net/wp-content/uploads/2017/12/cobrabodygtsport-860x484.jpg",
    "stocks": [
      {
        "id": 12313,
        "name": "Uber"
      },
      {
        "id": 14313,
        "name": "Wag"
      }
    ]
  },
  {
    "id": 5,
    "name": "Kittens",
    "creator": {
      "username": "@lol",
      "name": "Just Tom",
      "portfolioUrl": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
    },
    "worth": 29.56,
    "priceChange": -0.72,
    "imgUrl": "https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/57cf3d2846c3c4d2933a9d28/1474332420480/DSC_5454.jpg",
    "stocks": [
      {
        "id": 12313,
        "name": "Lyft"
      }
    ]
  },
  {
    "id": 6,
    "name": "Puppies",
    "creator": {
      "username": "@jess",
      "name": "Jessica Green",
      "portfolioUrl": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
    },
    "worth": 136.56,
    "priceChange": 1.13,
    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmduMiNc-E9hkuApAJ8XnQVD1Sbexj3Xhq3kShwZC9hckWSRwOg",
    "stocks": [
      {
        "id": 12313,
        "name": "Tesla"
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