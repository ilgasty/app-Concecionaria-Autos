import { types } from "../types/types";

export const SetError=(err)=>({
  type:types.uiSetError,
  payload:err
});

export const RemoveError=()=>({
  type:types.uiSetError,
  payload:null
});