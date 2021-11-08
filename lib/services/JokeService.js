const Joke = require('../models/Joke');
const { getJoke } = require('../utils/jokes');

module.exports = class JokeService {
  static async createJoke() {
    const dadJoke = await getJoke();
    console.log(dadJoke);
    const joke = await Joke.insert(dadJoke);

    return joke;
  }

  static async findOrderById(id) {
    await getJoke();
    const joke = await JOKE.getById(id);

    return joke;
  }
  static async update(id) {
    await getJoke();
    const joke = await Joke.update(id);

    return joke;
  }
  static async delete(id) {
    await getJoke();
    const joke = await Joke.deleteId(id);

    return joke;
  }
  static async getAll() {
    const joke = await Joke.getAllJokes();

    return joke;
  }
};

//all one class, adding static method to the class(line 16.5)
