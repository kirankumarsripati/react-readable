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

export const getComments = async (id: string) => {
  const result = await axios.get(`${API_URL}/posts/${id}/comments`, { headers })
  return result.data;
}

export const addComment = async ({ postId, author, body }) => {
  const result = await axios.post(`${API_URL}/comments`, {
    id: uuid(),
    timestamp: Date.now(),
    parentId: postId,
    author,
    body
  }, { headers });
  return result.data;
}

export const updateComment = async ({ commentId, body }) => {
  const result = await axios.put(`${API_URL}/comments/${commentId}`, {
    timestamp: Date.now(),
    body
  }, { headers });
  return result.data;
}

export const deleteComment = async (commentId) => {
  const result = await axios.delete(`${API_URL}/comments/${commentId}`, { headers });
  return result.data;
}

export const voteComment = async ({ commentId, delta }) => {
  let option = +delta > 0 ? "upVote" : "downVote";
  const result = await axios.post(`${API_URL}/comments/${commentId}`, {
    option,
  }, { headers })
  return result.data;
}
