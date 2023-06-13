import React, { useState, useEffect } from 'react';

const ServerTime = () => {
    const [serverTime, setServerTime] = useState('');

    useEffect(() => {
        const eventSource = new EventSource('https://socialize-backend-s1gy.onrender.com/api/showservertime');

        eventSource.addEventListener('message', (event) => {
            setServerTime(event.data);
        });

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div className="d-inline position-fixed bottom-0 start-50 translate-middle">
            <h2 className="d-inline">Server Time:</h2>
            <p>{serverTime}</p>
        </div>
    );
};

export default ServerTime;