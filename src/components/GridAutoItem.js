import React from 'react'
import './GridAutoItem.css'
import { GetMercadoLibreitem } from '../helper/GetMercadoLibre'

export const GridAutoItem = ({id,title,url,dispatch} ) => { 
  
    
    const handleClick=(e)=> {
        e.preventDefault();
        
        
        
        GetMercadoLibreitem(id).then(imgs=>{
            const newtodo={
                id:id,
                title:title,
                pictures:imgs,
                done:true
            };
            const action={
                type:'add',
                payload:newtodo,
            }
                dispatch(action);
            
       });
       
     
        
    //console.log(e.currentTarget.id);
     
      }
    //console.log(id,title,url);
    return (
        <div id={id} onClick={handleClick} className="col-12 col-sm-3 col-md-3 sombra card animate__animated animate__fadeIn"   >
          
                <img className="Aimg" src={url} alt={title}/>
            <p>{title}</p>
            
        </div>
    )
}
