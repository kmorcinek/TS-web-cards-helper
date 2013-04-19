var cards = [
    new Card(2, "Europe"),
    new Card(10, "Blockade"),
    new Card(17, "De Gaulle*"),
    new Card(28, "Suez Crisis*"),
    new Card(105, "Special Relationship"),
    ];

var countries = [
    new Country(1, "Canada", [2], 230, 195),
    new Country(2, "UK", [2, 28, 105], 460, 147),
    new Country(3, "Spain/Portugal", [], 450, 295),
    new Country(4, "France", [17, 28], 494, 239),
    new Country(5, "Benelux", [105], 506, 190),
    new Country(6, "Norway", [], 525, 68),
    new Country(7, "Denmark", [], 538, 110),
    new Country(8, "W.Germany", [10], 566, 190),
    new Country(9, "Italy", [], 576, 273),
];

var cc = new CardsCountries(cards, countries, countries);

ko.applyBindings(cc);