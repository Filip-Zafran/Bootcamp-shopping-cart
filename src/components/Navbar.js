import React from 'react';


function Navbar() {
    return (
        <header>
            <div className="overlay"></div>
            <nav>
                <h2>Shop</h2>
                <ul>
                    <li>
                        <a h href="#">Home</a>
                    </li>
                    <li>
                        <a h href="#">About</a>
                    </li>
                    <li className="cart">
                        <a h href="#"><ion-icon name="basket-outline"></ion-icon>Cart<span>0</span></a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

    export default Navbar;