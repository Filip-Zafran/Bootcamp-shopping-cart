import React from 'react';
import Cats from '../images/cats.png'
import Muscles from '../images/muscles.jpg'
import Infinity from '../images/infinity.png'
import Newspaper from '../images/newspaper.jpg'

const Home = () => {
    return(
        <div className="container">
            <div className="image"> 
                <img src={Cats} alt="Cats T-shirt" />
                <h3>grey shirt</h3>
                <h3>25 EU</h3>
<a className="addToCart cart1" href="#">Add to chart</a>                

            </div>
            
                        <div className="image"> 
                <img src={Newspaper} alt="Newspaper shirt" />
                <h3>grey shirt</h3>
                <h3>15 EU</h3>
<a className="addToCart cart2" href="#">Add to chart</a>                

            </div>
            
                        <div className="image"> 
                <img src={Infinity} alt="Infinity shirt" />
                <h3>grey shirt</h3>
                <h3>33 EU</h3>
<a className="addToCart cart3" href="#">Add to chart</a>                

            </div>
            
                        <div className="image"> 
                <img src={Muscles} alt="Muscles shirt" />
                <h3>grey shirt</h3>
                <h3>20 EU</h3>
<a className="addToCart cart4" href="#">Add to chart</a>                

                </div>
        </div>
    
)

}

export default Home;