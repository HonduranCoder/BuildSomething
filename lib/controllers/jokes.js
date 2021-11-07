const { Router } = require('express');
const JokeService = require('../services/JokeService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const joke = await JokeService.createJoke(req.body.quantity);

      res.send(joke);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const joke = await JokeService.getAll();

      res.send(joke);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const joke = await JokeService.findJokeById(id);

      res.send(joke);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const joke = await JokeService.update(id, req.body.quantity);

      res.send(joke);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const joke = await JokeService.delete(id);

      res.send(joke);
    } catch (err) {
      next(err);
    }
  });
