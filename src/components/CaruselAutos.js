import React from 'react'

export const CaruselAutos = ({title,url}) => {
  return (
    
    <div  className="carousel-item"  >
          
                <img className="pimg"  src={url} alt={title}/>
            
            
        </div>
  )
}
