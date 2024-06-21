// TasksPriorities.js
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TasksPriorities = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    // Count the number of tasks for each priority
    const countPriorities = (tasks) => {
        const priorityCounts = { High: 0, Medium: 0, Low: 0 };
        tasks.forEach(task => {
            if (task.priority === "HIGH") priorityCounts.High++;
            if (task.priority === "MEDIUM") priorityCounts.Medium++;
            if (task.priority === "LOW") priorityCounts.Low++;
        });
        return priorityCounts;
    };

    const priorityCounts = countPriorities(tasks);

    const data = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [
            {
                data: [priorityCounts.High, priorityCounts.Medium, priorityCounts.Low],
                backgroundColor: ['#d0021b', '#f8e71c', '#4a90e2'],
                hoverBackgroundColor: ['#d0021b', '#f8e71c', '#4a90e2'],
            },
        ],
    };

      const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };

    return (
        <div className="tasks-priorities">
            <h2>Tasks Priorities</h2>
            <div className="chart-container">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );

};

export default TasksPriorities;
