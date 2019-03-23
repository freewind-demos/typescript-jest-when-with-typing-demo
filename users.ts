import axios from 'axios';

export type User = {
  name: string
}

export async function fetchUsers(): Promise<User[]> {
  const response = await axios.get('/users.json')
  return response.data as User[];
}
