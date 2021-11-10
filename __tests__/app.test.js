const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('BuildSomething routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  beforeEach(async () => {
    await request(app).post('/jokes');
  });

  it('creates a new joke in our database', () => {
    return request(app)
      .post('/jokes')
      .then((res) => {
        // expect(createMessage).toHaveBeenCalledTimes(1);
        expect(res.body).toEqual({
          id: '2',
          joke: expect.any(String),
        });
      });
  });

  it('it gets an order in the db by id', () => {
    return request(app)
      .get('/jokes/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          joke: expect.any(String),
        });
      });
  });

  it('it gets all orders', () => {
    return request(app)
      .get('/jokes')
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            {
              id: expect.any(String),
              joke: expect.any(String),
            },
          ])
        );
      });
  });

  it('it updates an order by id', () => {
    return request(app)
      .put('/jokes/1')
      .send({ joke: 'haha' })
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          joke: expect.any(String),
        });
      });
  });

  it('it deletes an order in the db by id', () => {
    return request(app)
      .delete('/jokes/1')
      .then((res) => {
        expect(res.body).toEqual({ id: '1', joke: expect.any(String) });
      });
  });
});

afterAll(() => {
  pool.end();
});
