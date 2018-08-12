function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generateLongList(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(getRandomInt(-1000, 1000))
  }
  return arr
}

module.exports = generateLongList
