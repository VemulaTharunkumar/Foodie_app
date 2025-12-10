import React from 'react';
import './IngredientsModal.css';

// This corrected version only asks for the 'ingredients' and 'onClose' props,
// which is exactly what MenuPage provides.
const IngredientsModal = ({ ingredients, onClose }) => {
    // It's also a good practice to add a check in case ingredients are not available.
    if (!ingredients) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">&times;</button>
                <h3 className="modal-title">Ingredients</h3>
                <ul className="ingredients-list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default IngredientsModal;

