const hobbies = require('./data/hobbies.json');

function random() {
  const randomNum = Math.floor(Math.random() * Math.floor(hobbies.length));

  return hobbies[randomNum];
}

module.exports = random;
