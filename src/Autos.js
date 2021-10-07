import React from 'react'
import { GridAuto } from './components/GridAuto';
import './index.css';
import './Autos.css';

export const Autos = () => {
    
    //const url ='https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=P8ZSCwZ27eVrz9gR0T0g8SoROKkZlJIb';
    //const resp = await fetch(url);

    //console.log(resp);
  /* GetMercadoLibre().then(

   );*/
    //const svg = document.getElementById("parent_id").getSVGDocument();
    //console.log(svg);
    return (
        <div className="">
           
           <h1>Autos</h1> 
           
           <GridAuto/>
          
        </div>
    )
}
