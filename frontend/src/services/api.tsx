const API_URL = 'http://localhost:3001';

let token = localStorage.token;

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(2);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const getCategories = () =>
  fetch(`${API_URL}/categories`, { headers })
    .then(response => response.json())