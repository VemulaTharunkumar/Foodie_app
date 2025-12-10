import React from 'react';
import './Header.css';

const Header = ({ cart, onCartClick }) => {
    // Calculate the total number of items in the cart
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);

    return (
        <header className="header-container">
            <div className="header-content">
                {/* A new container to group the logo and title */}
                <div className="header-branding">
                    <img 
                        src="https://logodix.com/logo/1981940.jpg" 
                        alt="Foodie Finds Logo" 
                        className="header-logo" 
                    />
                    <h1 className="header-title">Foodie Finds</h1>
                </div>
                <button className="cart-button" onClick={onCartClick}>
                    Cart
                    {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </button>
            </div>
        </header>
    );
};

export default Header;

