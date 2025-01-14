import React from 'react';
import Footer from '../components/Footer';
import '../components/Common.css';

const Home: React.FC = () => {
    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    return (
        <div className="container" onContextMenu={handleRightClick}>
            <p>Welecome to Mins Portfolio</p>
            <Footer/>
        </div>
    );
};

export default Home;