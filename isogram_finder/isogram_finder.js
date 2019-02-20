const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');

}

IsogramFinder.prototype.isIsogram = function () {
  const result = this.word.reduce((total,letter) => (!total.includes(letter) ? total+=letter: ""))
  return (result.length === this.word.length ? true : false)
}

module.exports = IsogramFinder;
