const Joke = require('../models/Joke');
const { getJoke } = require('../utils/jokes-utils');

module.exports = class JokeService {
  static async createJoke() {
    const dadJoke = await getJoke();
    console.log(dadJoke);
    const joke = await Joke.insert(dadJoke);

    return joke;
  }

  static async findJokeById(id) {
    const joke = await Joke.getById(id);

    return joke;
  }
  static async update(id, joke) {
    const newJoke = await Joke.update(id, joke);

    return newJoke;
  }
  static async delete(id) {
    const joke = await Joke.deleteId(id);

    return joke;
  }
  static async getAll() {
    const joke = await Joke.getAllJokes();

    return joke;
  }
};

//all one class, adding static method to the class(line 16.5)
