import React from 'react'
import { CaruselAutos } from './CaruselAutos';


export const GridAutoItemDet = ({dispatch,todo}) => {

  const handleClick=(e)=> {
    e.preventDefault();
    const newtodo={
        id:e.currentTarget.id,
        title:'title',
        done:false
    };
    const action={
        type:'add',
        payload:newtodo,
    }
    dispatch(action);
   
//console.log(e.currentTarget.id);
 
  }
  return (
   <>
      <div className="overlay active" id="overlay">
        <div className="popup active" id="popup">
        <button className="btn-cerrar-popup" id="btn-cerrar-popup" 
        onClick={handleClick}
        >Close</button>
        <h3>{todo.title}</h3>
          <div id="principal"className="principal">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={todo.pictures[0].url} className="pimg" alt="..."/>
                </div>
              
                {todo.pictures.filter(x => x.id!==todo.pictures[0].id ).map((img )=> (
                                    <CaruselAutos key={img.id} {...img}  title={todo.title} />
                                    ))}
                
                
                
              </div>
              <button className="carousel-control-prev carus" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next carus" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
            </div>
        
        
        
          
          </div>
        </div>
      </div>
    </>
  )
}
