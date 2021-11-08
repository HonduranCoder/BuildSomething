const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('BuildSomething routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new joke in our database and sends a text message', () => {
    return request(app)
      .post('icanhazdadjoke.com/slack')
      .send({ joke: 'haha' })
      .then((res) => {
        // expect(createMessage).toHaveBeenCalledTimes(1);
        expect(res.body).toEqual({
          id: expect.any(String),
          joke: expect.any(String),
        });
      });
  });

  it('it gets an order in the db by id', () => {
    return request(app)
      .get('icanhazdadjoke.com/slack')
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          joke: expect.any(String),
        });
      });
  });

  it('it gets all orders', () => {
    return request(app)
      .get('icanhazdadjoke.com/slack')
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
      .put('icanhazdadjoke.com/slack')
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
      .delete('icanhazdadjoke.com/slack')
      .then((res) => {
        expect(res.body).toEqual({ id: '1', quantity: 12 });
      });
  });
});

afterAll(() => {
  pool.end();
});
