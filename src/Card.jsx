import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <>
         <div className="col-md-4 col-10 mx-auto">
                  
                 <div className="card">
             <img className="card-img-top" src={props.imagesrc} alt="Card image cap" />
                
                <div className="card-body">
                 <h5 className="card-title">{props.cardtitle}</h5>
             <p className="card-text">{props.carddescription}</p>
             </div>
            </div>
         </div> 
    
        </>
    )
}

export default Card;