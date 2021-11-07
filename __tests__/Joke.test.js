const pool = require('../lib/utils/pool');
const setup = require('../data/setup.js');
const Joke = require('../lib/models/Joke.js');
const JokeService = require('../lib/services/JokeService.js');

jest.mock('Joke', () => () => ({
  jokes: {
    create: jest.fn(),
  },
}));

describe('Joke Test', () => {
  beforeEach(() => {
    return setup(pool);
  });
  beforeEach(async () => {
    await JokeService.createJoke(2);
  });
  it('creates a joke', async () => {
    const joke = await Joke.insert(4);
    expect(joke).toEqual({
      id: expect.any(String),
      joke: expect.any(String),
    });
  });
  it('update by id', async () => {
    const joke = await Joke.update(1, 2);
    expect(joke).toEqual({ id: '1', joke: expect.any(String) });
  });
  it('should get by id', async () => {
    const joke = await Joke.getById(1);
    expect(joke).toEqual({ id: '1', joke: expect.any(String) });
  });
  it('should delete by id', async () => {
    const joke = await Joke.deleteId(1);
    expect(joke).toEqual({ id: '1', joke: expect.any(String) });
  });
  it('should get all', async () => {
    const joke = await Joke.getAllJokes();
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
