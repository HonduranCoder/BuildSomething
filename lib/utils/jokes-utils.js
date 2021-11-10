const request = require('superagent');

const getJoke = async () => {
  const dadJoke = await request.get('https://icanhazdadjoke.com/slack');

  return dadJoke.body.attachments[0].text;
};

module.exports = { getJoke };
