import asMock from "./asMock";
import decorate from './decorate';
import hello from "./hello";
import {when} from 'jest-when';

// Note: we just return a `jest.fn()` for the default exported function,
// not `{ default: jest.fn() }`
jest.mock('./decorate', () => jest.fn())

describe('mock test', () => {
  const mockDecorate = asMock(decorate);

  beforeEach(mockDecorate.mockClear);

  it('good', () => {
    when(mockDecorate).calledWith('aaa').mockReturnValue('AAA');
    expect(hello('aaa')).toEqual('Hello, AAA!')

    expect(hello('others')).toEqual('Hello, undefined!')
  })

  it('typing failing', () => {
    when(mockDecorate).calledWith(123).mockReturnValue(456);
  })

})
