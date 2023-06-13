import React, { useState, useEffect } from 'react';
import EventSource from 'eventsource';

const ServerTime = () => {
    const [serverTime, setServerTime] = useState('');

    useEffect(() => {
        const eventSource = new EventSource('http://127.0.0.1:5000/get_server_time');

        eventSource.addEventListener('message', (event) => {
            setServerTime(event.data);
        });

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h2>Server Time:</h2>
            <p>{serverTime}</p>
        </div>
    );
};

export default ServerTime;