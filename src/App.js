import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import MenuPage from './components/MenuPage/MenuPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import CartModal from './components/CartModal/CartModal';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const foodData = {
    tiffin: [
        { id: 't1', name: "Idli with Sambar",price:40,Qnty:4,image:'https://image.freepik.com/free-photo/idly-sambar-idli-with-sambhar-green-red-chutney-popular-south-indian-breakfast_466689-29523.jpg', ingredients: ['Rice', 'Urad Dal', 'Fenugreek Seeds', 'Sambar Powder', 'Mixed Vegetables'] },
        { id: 't2', name: 'Masala Dosa', price: 60, Qnty:1,image: 'https://png.pngtree.com/background/20230612/original/pngtree-dosa-is-sitting-on-a-plate-and-sauce-picture-image_3176179.jpg', ingredients: ['Rice', 'Urad Dal', 'Potato Masala', 'Chutney', 'Sambar'] },
        { id: 't3', name: 'Poha', price: 35,Qnty:1, image: 'https://img.freepik.com/premium-photo/photography-tasty-indian-poha-plate_1288657-53149.jpg', ingredients: ['Flattened Rice', 'Onion', 'Peanuts', 'Turmeric', 'Lemon'] },
        { id: 't4', name: 'Upma', price: 45, Qnty:1,image: 'https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg', ingredients: ['Semolina', 'Mustard Seeds', 'Onion', 'Mixed Vegetables', 'Ghee'] },
        { id: 't5', name: 'Medu Vada', price: 50,Qnty:4, image: 'https://images.slurrp.com/prod/recipe_images/transcribe/breakfast/Medu-Vada.webp', ingredients: ['Urad Dal', 'Green Chillies', 'Ginger', 'Coconut Chutney', 'Sambar'] },
        {id:'t6',name:'Mysoore Bajji',price:30,Qnty:4,image:'https://i.ytimg.com/vi/ztRWK6kaLCk/maxresdefault.jpg',ingredients:['Maida','Oil','Water','Coconut','Groundnuts']},
        {id:'t7',name:'Puri',price:30,Qnty:2,image:'https://i.ytimg.com/vi/toUUS4VRTLQ/maxresdefault.jpg',ingredients:['Wheat-flour','Aloo','Freedom refined sunflower oil']}
    ],
    snacks: [
        { id: 's1', name: 'Samosa Chaat', price: 50,Qnty:1, image: 'https://cdn.grofers.com/assets/search/usecase/banner/samosa_chaat_01.png', ingredients: ['Samosa', 'Yogurt', 'Tamarind Chutney', 'Mint Chutney', 'Onions', 'Sev'] },
        { id: 's2', name: 'Pani Puri', price: 40, Qnty:6,image: 'https://img.freepik.com/premium-photo/photography-indian-tasty-pani-puri-plate_1288657-50095.jpg', ingredients: ['Puri', 'Spicy Water', 'Boiled Potato', 'Chickpeas', 'Tamarind Chutney'] },
        { id: 's3', name: 'Vada Pav', price: 30, Qnty:1,image: 'https://img.freepik.com/premium-photo/ulta-vada-pav-is-made-with-spicy-potato-stuffed-bun-called-pav-inside-vada-inside-out-wada-pao_466689-86240.jpg?w=2000', ingredients: ['Pav', 'Potato Vada', 'Dry Garlic Chutney', 'Green Chilli'] },
        { id: 's4', name: 'Bhel Puri', price: 45, Qnty:1,image: 'https://letsfixit.co.uk/wp-content/uploads/2020/02/Bhel-Puri-scaled.jpg', ingredients: ['Puffed Rice', 'Onion', 'Tomato', 'Tamarind Chutney', 'Sev'] },
        { id: 's5', name: 'Kachori', price: 35, Qnty:1,image: 'https://img.freepik.com/premium-photo/crunchy-dal-ki-kachori-white-background-indian-traditional-food-kachori-picture_1020697-132494.jpg?w=2000', ingredients: ['Flour', 'Moong Dal', 'Spices', 'Green Chutney'] },
    ],
    lunch: [
        { id: 'l1', name: 'Veg Thali', price: 120,Qnty:'1 person', image: 'https://haveliindiannepali.com/wp-content/uploads/2022/11/veg-thali.png', ingredients: ['Rice', 'Roti', 'Dal', 'Paneer Curry', 'Mixed Veg Sabzi', 'Raita', 'Salad'] },
        { id: 'l2', name: 'Paneer Butter Masala', Qnty:'250grm',price: 180, image: 'https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg', ingredients: ['Paneer', 'Tomato Gravy', 'Cream', 'Butter', 'Spices'] },
        { id: 'l3', name: 'Dal Makhani with Naan', Qnty:'2 naans & 250grm',price: 160, image: 'https://i.redd.it/jjcsmz9shrs91.jpg', ingredients: ['Black Lentils', 'Kidney Beans', 'Butter', 'Cream', 'Naan Bread'] },
        { id: 'l4', name: 'Chole Bhature', price: 140, Qnty:'250grm',image: 'https://as2.ftcdn.net/v2/jpg/08/02/87/15/1000_F_802871500_wzrTHDlr5aX3damkNQFf8jyNWXmeysmp.jpg', ingredients: ['Chickpeas', 'Flour', 'Yogurt', 'Spices', 'Onion Salad'] },
        { id: 'l5', name: 'Rajma Chawal', price: 130, Qnty:'250grm',image: 'https://img.freepik.com/premium-photo/photography-tasty-indian-rajma-chawal-plate_1288657-54129.jpg?w=2000', ingredients: ['Kidney Beans', 'Basmati Rice', 'Tomato-Onion Gravy', 'Spices'] },
    ],
    dinner: [
        { id: 'd1', name: 'Chicken Biryani', price: 220,Qnty:'500grm', image: 'http://www.currychief.com/cdn/shop/articles/Banner_Image.jpg?v=1672411451', ingredients: ['Basmati Rice', 'Chicken', 'Spices', 'Yogurt', 'Fried Onions', 'Mint Leaves'] },
        { id: 'd2', name: 'Mutton Curry', price: 250,Qnty:'250grm', image: 'https://img.freepik.com/premium-photo/photography-indian-tasty-mutton-curry-plate_1288657-49834.jpg', ingredients: ['Mutton', 'Onion-Tomato Gravy', 'Ginger-Garric Paste', 'Spices'] },
        { id: 'd3', name: 'Egg Fried Rice', price: 150,Qnty:'500grm', image: 'https://www.seriouseats.com/thmb/BJjCEDw9OZe95hpZxmNcD3rJnHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg', ingredients: ['Rice', 'Eggs', 'Soy Sauce', 'Mixed Vegetables', 'Spring Onions'] },
        { id: 'd4', name: 'Kadai Paneer', price: 190,Qnty:'250grm', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Best-Kadai-Paneer-Recipe.jpg', ingredients: ['Paneer', 'Bell Peppers', 'Onion', 'Tomato', 'Kadai Masala'] },
        { id: 'd5', name: 'Fish Fry', price: 200, Qnty:'2 full fishes',image: 'https://1.bp.blogspot.com/-fU_ozvGFFG0/VlKh-powozI/AAAAAAAABVc/NR5v3vEy6h0/s1600/kerala+malabar+fish+crispy+fry+masala+spicy+curry+restaurant+style+fry.jpg', ingredients: ['Fish Fillets', 'Gram Flour', 'Spices', 'Lemon Juice'] },
    ]
};


function App() {
  const [page, setPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New global loading state

  // Wrapper function to show the spinner for any action
  const withLoading = (action) => {
    setIsLoading(true);
    setTimeout(() => {
      action();
      setIsLoading(false);
    }, 500); // Show spinner for 0.5 seconds for effect
  };

  const handleAddToCart = (itemToAdd, quantity) => {
    const numQuantity = Number(quantity);
    if (isNaN(numQuantity) || numQuantity <= 0) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + numQuantity } : item
        );
      }
      return [...prevCart, { ...itemToAdd, quantity: numQuantity }];
    });
    setShowCart(true);
  };
  
  const handleUpdateCart = (itemId, change) => {
    setCart(prevCart => {
      const itemToUpdate = prevCart.find(item => item.id === itemId);
      if (!itemToUpdate) return prevCart;
      const newQuantity = (Number(itemToUpdate.quantity) || 0) + change;
      if (newQuantity <= 0) return prevCart.filter(item => item.id !== itemId);
      return prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const handlePlaceOrder = () => {
    console.log("Order Placed!", cart);
    setCart([]);
    setShowCart(false);
    alert("Order Placed! Enjoy the taste.");
  };

  const handleCategorySelect = (category) => {
    withLoading(() => setSelectedCategory(category));
  };

  const handleBackToHome = () => {
    withLoading(() => setSelectedCategory(null));
  };

  const handleNavClick = (newPage) => {
    withLoading(() => {
      setPage(newPage);
      setSelectedCategory(null);
    });
  };

  const renderPage = () => {
    if (selectedCategory) {
      return <MenuPage 
                category={selectedCategory} 
                items={foodData[selectedCategory]} 
                onAddToCart={(item, qty) => withLoading(() => handleAddToCart(item, qty))}
                onBack={handleBackToHome}
              />;
    }
    switch (page) {
      case 'home':
        return <HomePage onCategorySelect={handleCategorySelect} foodData={foodData} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        // Typo corrected here: fooddData -> foodData
        return <HomePage onCategorySelect={handleCategorySelect} foodData={foodData} />;
    }
  };

  return (
    <div className="app-container">
      {/* Show the spinner if isLoading is true */}
      {isLoading && <LoadingSpinner />}
      
      <Header cart={cart} onCartClick={() => withLoading(() => setShowCart(true))} />

      <main className="main-content container">
        {renderPage()}
      </main>

      {showCart && <CartModal 
                    cart={cart} 
                    onUpdateCart={handleUpdateCart}
                    onClose={() => setShowCart(false)} 
                    onPlaceOrder={() => withLoading(handlePlaceOrder)} 
                  />}
      
      <Footer currentPage={page} onNavClick={handleNavClick} />
    </div>
  );
}

export default App;

