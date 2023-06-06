export const fetchData = (url, method = 'GET', body = null) => {
    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: method === 'POST' ? JSON.stringify(body) : null,
    };

    return fetch(url, requestOptions)
        .then((response) => {
            return response.json().then((data) => {
                return {
                    status: response.status,
                    data: data,
                };
            });
        })
        .catch((error) => {
            console.error('Błąd podczas pobierania danych:', error);
            throw error;
        });
};