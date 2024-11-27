export function fetchData(url, callback, method, body) {
    const headers = {
      'Accept': 'application/json',
    };
  
    if (method === 'POST' || method === 'PUT') {
      headers['Content-Type'] = 'application/json';
    }
  
    const options = {
      method,
      headers,
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => {
        if (err.response) {
          console.error("Error response:", err.response.status, err.response.data);
        } else {
          console.error("Network error or no response:", err.message);
        }
      });
  }
  