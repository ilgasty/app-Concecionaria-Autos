export const todoReducer =(state=[], action)=>{

  switch (action.type) {
    case 'add':
      return action.payload
      case 'remove':
        return action.payload  
    default:
      return state;
  }
}