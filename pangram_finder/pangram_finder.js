const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
 const result = this.alphabet.filter(letter => this.phrase.includes(letter));
 return result.length === 26 ? true : false;
}

module.exports = PangramFinder;
