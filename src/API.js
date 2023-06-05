export const fetchData = (url, method = 'GET', body = null) => {
    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: method === 'POST' ? JSON.stringify(body) : null
    };

    return fetch(url, requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};