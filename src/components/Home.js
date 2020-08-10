import React, { useState } from 'react';
import Cats from '../images/cats.png'
import Muscles from '../images/muscles.jpg'
import Infinity from '../images/infinity.png'
import Newspaper from '../images/newspaper.jpg'
import { connect } from 'react-redux';
import addBasket from '../actions/addAction'

const Home = (props) => {


        console.log(props);
        
    return(
        <div className="container">
            <div className="image"> 
                <img src={Cats} alt="Cats T-shirt" />
                <h3>Crazy cats shirt</h3>
                <h4><i>25.00 €</i></h4>
                            <a className="addToCart cart1" href="#">Add to chart</a>                

            </div>
            
                        <div className="image"> 
                <img src={Newspaper} alt="Newspaper shirt" />
                <h3>Newspaperman shirt</h3>
                <h4><i>15.00 €</i></h4>
<a className="addToCart cart2" href="#">Add to chart</a>                

            </div>
            
                        <div className="image"> 
                <img src={Infinity} alt="Infinity shirt" />
                <h3>Holesome shirt</h3>
                <h4><i>33.00 €</i></h4>
<a className="addToCart cart3" href="#">Add to chart</a>                

            </div>
            
                        <div className="image"> 
                <img src={Muscles} alt="Muscles shirt" />
                <h3>Abs shirt</h3>
                <h4><i>20.00 €</i></h4>
<a className="addToCart cart4" href="#">Add to chart</a>                

                    </div>
  
                
        </div>
    
)

}

export default connect(null, { addBasket } (Home))