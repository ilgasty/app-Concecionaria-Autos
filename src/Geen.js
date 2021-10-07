import React from 'react'

export const Geen = () => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria)}&limit=10&api_key=P8ZSCwZ27eVrz9gR0T0g8SoROKkZlJIb`;
    //const url ='https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=P8ZSCwZ27eVrz9gR0T0g8SoROKkZlJIb';
    const resp = await fetch(url);
    console.log(resp);
    
    return (
        
        <div>
            <h1>geen</h1>
        </div>
    )
}
