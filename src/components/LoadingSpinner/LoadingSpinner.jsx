import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-overlay">
            {/* The spinner div is now replaced with an image */}
            <img 
                src="https://img.freepik.com/premium-vector/healthy-food-logo-concept-logo-with-symbol-spoon-fork-leaf-can-be-restaurants-healthy-food-products-website-logos-food-consultants-others_332533-1691.jpg" 
                alt="Loading..." 
                className="loading-image"
            />
            <p className="loading-text">Foodie's way...</p>
        </div>
    );
};

export default LoadingSpinner;

