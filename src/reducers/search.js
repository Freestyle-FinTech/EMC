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
      return { ...state, selectedStock: action.payload, stockResults: []}
    case 'ADD_ASSET_TO_PORTFOLIO':
      console.log('clear selected stock on adding asset to portfolio')      
      return {...state, selectedStock: null, stockResults: []}
    case 'CLEAR_SELECTED_PORTFOLIO':
      console.log('clear selected porfolio')      
      return {...state, selectedPortfolio: null}
    case 'CLEAR_SELECTED_STOCK':
      console.log('clear selected stock')
      return {...state, selectedStock: null, stockResults: []}
    default:
      return state;
  }
  return state
}