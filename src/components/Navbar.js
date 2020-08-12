import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom'

function Navbar(props) {

    useEffect(() => {
        getNumbers();
    },[])

    return (
        <header>
            <div className="overlay"></div>
            <nav>
                <h2 id="titleText">Ficho's little Shop of horrors</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li className="cart">
                        <Link to="/cart"><ion-icon name="basket-outline"></ion-icon>Cart &nbsp;(<span>{props.basketProps.basketNumbers})&nbsp;</span></Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

const mapStateToProps = state => ({basketProps: state.basketState})

export default connect(mapStateToProps)(Navbar);