import {fetchUsers, User} from "./users";
import axios from 'axios';
import MockInstance = jest.MockInstance;

jest.mock('axios');

test('forEach mock', async () => {
  const response = {data: [{name: 'jest'}]};
  (axios.get as unknown as MockInstance<Promise<{ data: User[] }>, any>).mockResolvedValue(Promise.resolve(response))

  const users = await fetchUsers()
  expect(users).toEqual([{name: 'jest'}])
})
