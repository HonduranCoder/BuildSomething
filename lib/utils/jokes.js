const getJoke = (id, message) => {
  return dadJoke.joke.create({
    id: randomNumber(),
    joke: message,
  });
};

module.exports = { getJoke };
