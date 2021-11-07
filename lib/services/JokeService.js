const Joke = require('../models/Joke');
const { getJoke } = require('../utils/jokes');

module.exports = class OrderService {
  static async createJoke(joke) {
    await getJoke(`New Order received for ${joke}`);

    const joke = await Joke.insert(joke);

    return joke;
  }

  static async findOrderById(id) {
    await getJoke(`New Order received for ${id}`);
    const joke = await JOKE.getById(id);

    return joke;
  }
  static async update(id, joke) {
    await getJoke(`Update Order for ${id}, with ${joke}`);
    const joke = await Joke.update(id, joke);

    return joke;
  }
  static async delete(id) {
    await getJoke(`Delete Order for ${id}`);
    const joke = await Joke.deleteId(id);

    return joke;
  }
  static async getAll() {
    const joke = await Joke.getAllJokes();

    return joke;
  }
};

//all one class, adding static method to the class(line 16.5)
