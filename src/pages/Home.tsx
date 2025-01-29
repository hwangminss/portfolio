import React from 'react';
import '../components/Common.css';

const Home: React.FC = () => {
    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    return (
        <div className="container" onContextMenu={handleRightClick}>
            <p>Welcome to Min's Portfolio</p>
        </div>
    );
};

export default Home;