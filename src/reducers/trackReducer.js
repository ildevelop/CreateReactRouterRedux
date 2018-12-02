const initialState = [
  'test1','test2'
];

 const  mainReducer =(state = initialState, action)=> {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    default: return state
  }
};
export default mainReducer