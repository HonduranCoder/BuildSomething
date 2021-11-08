const pool = require('../lib/utils/pool');
const setup = require('../data/setup.js');
const JokeService = require('../lib/services/JokeService.js');

jest.mock('joke', () => () => ({
  jokes: {
    create: jest.fn(),
  },
}));

describe('Joke Service Test', () => {
  beforeEach(() => {
    return setup(pool);
  });
  beforeEach(async () => {
    await JokeService.createJoke(2);
  });
  it('should create an item', async () => {
    const joke = await JokeService.createJoke(2);
    expect(joke).toEqual({ id: '1', joke: expect.any(String) });
  });
  it('update by id', async () => {
    const joke = await JokeService.update(1, 2);
    expect(joke).toEqual({ id: '1', joke: expect.any(String) });
  });
  it('should get by id', async () => {
    const joke = await JokeService.createOrder(1);
    expect(joke).toEqual({ id: '1', joke: expect.any(String) });
  });
  it('should delete by id', async () => {
    const joke = await JokeService.delete(1);
    expect(joke).toEqual({ id: '1', joke: expect.any(String) });
  });
  it('should get all', async () => {
    const joke = await JokeService.getAll();
    expect(joke).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(String),
          joke: expect.any(String),
        },
      ])
    );
  });
});
