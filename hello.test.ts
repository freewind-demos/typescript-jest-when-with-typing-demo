import {forEach} from './hello';

test('forEach mock', () => {
  const callback = jest.fn(x => x + 100)
  forEach([1, 2], callback);

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(1);
  expect(callback.mock.results[0].value).toBe(101);
})
