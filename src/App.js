// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import WelcomeMessage from "./components/WelcomeMessage";
import TaskList from "./components/TaskList";
import ActivityFeed from "./components/ActivityFeed";
import TaskPriorities from "./components/TaskPriorities";

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Start with sidebar collapsed

    return (
        <div>
            <Navbar />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <div className={`content ${isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>
                <WelcomeMessage sidebarOpen={isSidebarOpen} />
                <div className="component-layout">
                    <TaskList sidebarOpen={isSidebarOpen} />
                    <div>
                        <ActivityFeed/>
                        <TaskPriorities/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
