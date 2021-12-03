import { types } from "../../types/types";
const initialState={
  Loading:true,
  msgError:null,
}
export const uiReducer=(state=initialState,action)=>{
  switch (action.type) {
    case types.uiSetError:
      
      return{
        ...state,
        msgError:action.payload
      };
      case types.uiRemoveErro:
      
      return{
        ...state,
        msgError:null
      };
  
    default:
      return state;
  }
}