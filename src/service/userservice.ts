import { api } from '@/lib/api';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async (): Promise<User[]> => {
  // Aqui é onde você coloca a lógica de busca
  const response = await api.get<User[]>('/users');
  return response.data;
};
