import { types } from "../types/types";

export const authReducer=(state={}, action)=>{
  switch (action.type) {
    case types.login:
      return {...action.payload, loged:true};
    case types.logout:
      return {loged:false};
    default:
      return state;
  }
}