
import React from 'react';

const WelcomeMessage = ({ sidebarOpen }) => {
    return (
        <div className={`welcome-message ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
            <button className="close-button">×</button>
            <div className="message-content">
                <h1>Welcome back, John Doe</h1>
                <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
                <a href="#" className="info-link">Look here for more information</a>
            </div>
        </div>
    );
};

export default WelcomeMessage;
