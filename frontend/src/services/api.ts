import axios from 'axios';
import { v1 as uuid } from 'uuid';

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

export const getPost = async (id: string) => {
  const result = await axios.get(`${API_URL}/posts/${id}`, { headers })
  return result.data;
}

export const addPost = async (title: string, body: string, author = "Kirankumar", category: string) => {
  const id = uuid();
  const timestamp = Date.now();
  const result = await axios.post(`${API_URL}/posts`, {
    id,
    timestamp,
    title,
    body,
    author,
    category
  }, { headers});
  return result.data;
}

export const updatePost = async (id: string, title: string, body: string) => {
  const result = await axios.put(`${API_URL}/posts/${id}`, { title, body }, { headers });
  return result.data;
}

export const deletePost = async (id: string) => {
  const result = await axios.delete(`${API_URL}/posts/${id}`, { headers })
  return result.data;
}

export const votePost = async (id: string, delta: number) => {
  let option = +delta > 0 ? "upVote" : "downVote";
  const result = await axios.post(`${API_URL}/posts/${id}`, { option }, { headers })
  return result.data;
};

export const getComments = async (id: string) => {
  const result = await axios.get(`${API_URL}/posts/${id}/comments`, { headers })
  return result.data;
}

export const addComment = async (parentId: string, author: string, body: string) => {
  const result = await axios.post(`${API_URL}/comments`, {
    id: uuid(),
    timestamp: Date.now(),
    parentId,
    author,
    body
  }, { headers });
  return result.data;
}

export const updateComment = async (id: string | null, body: string) => {
  const result = await axios.put(`${API_URL}/comments/${id}`, {
    timestamp: Date.now(),
    body
  }, { headers });
  return result.data;
}

export const deleteComment = async (id: string) => {
  const result = await axios.delete(`${API_URL}/comments/${id}`, { headers });
  return result.data;
}

export const voteComment = async (id: string, delta: number) => {
  let option = +delta > 0 ? "upVote" : "downVote";
  const result = await axios.post(`${API_URL}/comments/${id}`, {
    option,
  }, { headers })
  return result.data;
}
