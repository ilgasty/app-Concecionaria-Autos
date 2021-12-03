import { firebase, googleAuthProvide } from "../firebase/firebase-config";
import { types } from "../types/types"


export const login=(uid,displayName)=>({
    type:types.login,
    payload: {
        uid,
        displayName
    }
  
});
export const register=(uid,displayName,password)=>({
    type:types.login,
    payload: {
        uid,
        displayName
    }
})

export const startRegisterWithEmailPasswordName =(email, password,name)=>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(({user})=>{
            console.log(user);
        })
    }
}

export const startGooglelogin=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvide)
                .then(({user})=>{
                    login(user.uid,user.displayName);
                })
    }
}