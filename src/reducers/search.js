initialState = {
  selectedPortfolio: null,
  selectedStock: null,
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
    case 'SET_SELECTED_PORTFOLIO':
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