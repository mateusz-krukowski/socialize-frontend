import React, { useState, useEffect } from 'react';

const Home = () => {
    const [resp, setResp] = useState({});

    useEffect(() => {
        fetchStatus();
    }, []);

    const fetchStatus = () => {
        fetch('http://127.0.0.1:5000')
            .then(response => response.json())
            .then(data => {
                setResp(data);
            })
            .catch(error => {
                console.error('Error fetching status:', error);
            });
    }

    return (
        <div className="Home">
            {resp.Status}
        </div>
    );
}

export default Home;