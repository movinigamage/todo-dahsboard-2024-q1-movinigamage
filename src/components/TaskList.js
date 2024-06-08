import React, { useState, useEffect } from 'react';

const TaskList = ({ sidebarOpen }) => {
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 8;

    useEffect(() => {
        fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

    const totalPages = Math.ceil(tasks.length / tasksPerPage);

    return (
        <div className={`task-list ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
            <h2>Tasks</h2>
            <ul>
                {currentTasks.map(task => (
                    <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
                        <span className={`priority ${task.priority.toLowerCase()}`}></span>
                        <span className="task-name">{task.todo}</span>
                        <span className={`status ${task.completed ? 'done' : 'in-progress'}`}>
                            {task.completed ? 'Done' : 'In-Progress'}
                        </span>
                        <span className="date">{new Date(task.createdAt).toLocaleDateString()}</span>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
                    &lt;
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default TaskList;
