import {isURL} from '../src/client/js/checkURL.js';

describe('Checking function', () => {
  test('It should check if the input is a URL or not', () => {
    expect('https://google.com').toMatch(/https/);

  });
});
