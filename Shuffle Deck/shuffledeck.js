var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

var shuffleDeck = function(deck) {
  let current = deck.length;
  let temp;
  let random;

  while (0 !== current) {
    random = Math.floor(Math.random() * current);
    current -= 1;

    temp = deck[current];
    deck[current] = deck[random];
    deck[random] = temp;
  }

  return deck;
}