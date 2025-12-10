import React, { useState } from 'react';
import './MenuPage.css';
import IngredientsModal from '../IngredientsModal/IngredientsModal';

const MenuPage = ({ category, items, onAddToCart, onBack }) => {
    const [quantities, setQuantities] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);

    const handleQuantityChange = (itemId, change) => {
        setQuantities(prev => ({
            ...prev,
            [itemId]: Math.max(1, (prev[itemId] || 1) + change)
        }));
    };

    const showIngredients = (item) => {
        setSelectedItem(item);
    };

    const hideIngredients = () => {
        setSelectedItem(null);
    };

    return (
        <div className="menu-page-container">
            <button onClick={onBack} className="back-button">← Back to Categories</button>
            <h1 className="menu-category-title">{category}</h1>

            <div className="menu-grid">
                {items.map(item => {
                    const quantity = quantities[item.id] || 1;
                    return (
                        <div key={item.id} className="menu-item-card">
                            <img src={item.image} alt={item.name} className="menu-item-image" />
                            <div className="menu-item-info">
                                <h3 className="menu-item-name">{item.name}</h3>
                                <p className="menu-item-price">₹{item.price}({item.Qnty})</p>
                                
                                <div className="quantity-selector">
                                    <button onClick={() => handleQuantityChange(item.id, -1)} className="quantity-button">-</button>
                                    <span className="quantity-value">{quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)} className="quantity-button">+</button>
                                </div>

                                {/* Buttons are now wrapped in a container for side-by-side layout */}
                                <div className="menu-item-buttons-container">
                                    <button onClick={() => showIngredients(item)} className="ingredients-button">
                                        Ingredients
                                    </button>
                                    <button 
                                        onClick={() => onAddToCart(item, quantity)} 
                                        className="add-to-cart-button"
                                    >
                                        Ready to Eat
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedItem && (
                <IngredientsModal 
                    ingredients={selectedItem.ingredients}
                    onClose={hideIngredients}
                />
            )}
        </div>
    );
};

export default MenuPage;

