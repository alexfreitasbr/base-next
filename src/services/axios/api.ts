import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});
