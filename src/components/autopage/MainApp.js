import React from 'react'
import { Provider } from 'react-redux'
//import { authContext } from '../../auth/authContext'
//import { authReducer } from '../../auth/authReducer'
import { store } from '../../store/store'
import { AppRouter } from './AppRouter'

/*const init=()=>{
  return JSON.parse( localStorage.getItem('user'))|| {loged:false};
}*/

export const MainApp = () => {
  /*const [user, dispatch] = useReducer(authReducer, {}, init)
  useEffect(() => {
    localStorage.setItem('user',JSON.stringify(user));

  }, [user])*/
  return (
   // <authContext.Provider value={{user, dispatch}}>
  <Provider store={store}>
  <AppRouter />
  </Provider>
    
     
        
    //</authContext.Provider>
     
      
    
  )
}
