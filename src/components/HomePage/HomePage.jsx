import React from 'react';
import './HomePage.css';

const HomePage = ({ onCategorySelect, foodData }) => {
    const categories = [
        { name: 'tiffin', image:"https://www.sitaculturalcenter.com/wp-content/uploads/2021/11/Tiffins-at-lakshmi-Sitaculturalcenter.jpg" },
        { name: 'snacks', image:"https://img.freepik.com/premium-photo/coriander-kothimbir-vada-samosa-kachori-daal-vada-are-favourite-indian-tea-time-snacks-selective-focus_466689-11020.jpg?w=2000" },
        { name: 'lunch', image: "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-also-known-as-food-platter-is-complete-lunch-dinner-meal-closeup-selective-focus_466689-9137.jpg?w=2000" },
        { name: 'dinner', image: "https://img.taste.com.au/0_q-mPop/taste/2021/12/shawarma-lamb-dinner-plate-175978-2.jpg" },
    ];

    return (
        <div className="homepage-container">
            <div className="category-grid">
                {categories.map(cat => (
                    <div 
                        key={cat.name} 
                        onClick={() => onCategorySelect(cat.name)} 
                        className="category-card"
                    >
                        <img src={cat.image} alt={cat.name} className="category-image" />
                        <div className="category-overlay">
                            <span className="category-name">{cat.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
