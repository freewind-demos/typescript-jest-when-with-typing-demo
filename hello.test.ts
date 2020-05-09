import {fetchUsers, User} from "./users";
import axios from 'axios';
import MockInstance = jest.MockInstance;

jest.mock('axios');

test('module mock', async () => {
  const response = {data: [{name: 'jest'}]};
  const axiosMock = axios.get as unknown as MockInstance<Promise<{ data: User[] }>, any>;
  axiosMock.mockResolvedValue(Promise.resolve(response))

  const users = await fetchUsers()

  expect(axiosMock).toHaveBeenLastCalledWith('/users.json');
  expect(users).toEqual([{name: 'jest'}])
})
