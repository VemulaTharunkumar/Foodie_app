import React from 'react';
import './CartModal.css';

const CartModal = ({ cart, onUpdateCart, onClose }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-backdrop" onClick={onClose}>
            <div className="cart-modal" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2 className="cart-title">Your Cart</h2>
                    <button onClick={onClose} className="close-button">&times;</button>
                </div>
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <p className="empty-cart-text">Your cart is empty.</p>
                        <p>Add some delicious food to get started!</p>
                    </div>
                ) : (
                    <div className="cart-items-list">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4 className="cart-item-name">{item.name}</h4>
                                    <p className="cart-item-price">₹{item.price}</p>
                                </div>
                                <div className="quantity-control">
                                    <button onClick={() => onUpdateCart(item.id, -1)} className="quantity-button">-</button>
                                    <span className="quantity-display">{item.quantity}</span>
                                    <button onClick={() => onUpdateCart(item.id, 1)} className="quantity-button">+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-display">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;
