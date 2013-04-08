var cards = [new Card(2, "Europe"), new Card(105, "Special Relationship")];

var countries = [
    new Country(1, "Canada", [2], 230, 195),
    new Country(2, "UK", [2, 105], 460, 147)
];

var cc = new CardsCountries(cards, countries, countries);

ko.applyBindings(cc);