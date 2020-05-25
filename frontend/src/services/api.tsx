import axios from 'axios';

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

export const getCategories = async () => {
  const result = await axios.get(`${API_URL}/categories`, { headers })
  return result.data;
}

export const getPosts = async (category = '') => {
  const url = category ? `/${category}/posts` : '/posts';
  const result = await axios.get(`${API_URL}${url}`, { headers })
  return result.data;
}
