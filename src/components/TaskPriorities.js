// TasksPriorities.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TasksPriorities = () => {
    const data = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [
            {
                data: [300, 50, 100],
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
