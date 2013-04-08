var cards = [new Card(1, "Defectors"), new Card(2, "Europe")];

var countries = [
    new Country(1, "Canada", [2], 230, 195),
    new Country(2, "UK", [1,2], 460, 147)
];

var cc = new CardsCountries(cards, countries, countries);

ko.applyBindings(cc);