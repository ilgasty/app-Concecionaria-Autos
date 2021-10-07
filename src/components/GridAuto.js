import React, { useEffect, useReducer, useState } from 'react'
import { GetMercadoLibre } from '../helper/GetMercadoLibre'
import { GridAutoItem } from './GridAutoItem';

import { GridAutoItemDet } from './GridAutoItemDet';
import { todoReducer } from './useReduce/todoReducer';
const init=()=>{
    //return JSON.parse(localStorage.getItem('todos')) || [];
    return{
        
    id:new Date().getTime(),
    desc:'Prueba gaston',
    done:false
    }
}
export const GridAuto = () => {
    const [todos,dispatch] = useReducer(todoReducer, [],init)
    
    const [state, setstate] = useState({
        autos:[],
        
    });
    
    useEffect(() => {
        //console.log('prueba 1')
        GetMercadoLibre().then(imgs=>{
            setstate({
                autos:imgs,
              });    
           });
    }, [])

    useEffect(() => {
        console.log(todos)
        //setShwo(true);
        //localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
  
//console.log(autos)
    return (
        <>
            
            {todos.done && <GridAutoItemDet dispatch={dispatch} todo={todos} />}
            
             <div className="card-grid justify-content-center">
                        
                        {state.autos.map((img)=> (
                        <GridAutoItem key={img.id} {...img}  dispatch={dispatch} />
                        ))}
                             
              
            </div>
            
        </>
    )
}
