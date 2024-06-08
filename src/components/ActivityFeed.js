// ActivityFeed.js
import React from 'react';

const ActivityFeed = () => {
    const activities = [
        {
            id: 1,
            user: 'Kushantha Charuka',
            action: 'created',
            target: 'Contract #00124 need John Beige’s signature',
            time: 'Sep 16, 2022 at 11:30 AM',
            avatar: 'https://i.pravatar.cc/40?img=1'
        },
        {
            id: 2,
            user: 'Jane Doe',
            action: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque',
            time: 'Sep 16, 2022 at 11:45 AM',
            avatar: 'https://i.pravatar.cc/40?img=2'
        },
        {
            id: 3,
            user: 'Jane Doe',
            action: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque',
            time: 'Sep 16, 2022 at 11:45 AM',
            avatar: 'https://i.pravatar.cc/40?img=2'
        },{
            id: 4,
            user: 'Jane Doe',
            action: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque',
            time: 'Sep 16, 2022 at 11:45 AM',
            avatar: 'https://i.pravatar.cc/40?img=2'
        },
    ];

    return (
        <div className="activity-feed">
            <h2>Activity Feed</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id} className="activity">
                        <img src={activity.avatar} alt={`${activity.user}'s avatar`} className="avatar" />
                        <div className="activity-details">
                            <p><strong>{activity.user}</strong> {activity.action} <a href="#" className="activity-link">{activity.target}</a></p>
                            <p className="time">{activity.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityFeed;
