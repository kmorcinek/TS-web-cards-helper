var cards = [
    new Card(2, "Europe"),
    new Card(10, "Blockade"),
    new Card(17, "De Gaulle*"),
    new Card(28, "Suez Crisis*"),
    new Card(105, "Special Relationship"),
    ];

var Region = (function () {
    function Region(id, name) {
        this.id = id;
        this.name = name;
    }
    return Region;
})();

var regions = [
    new Region(1, "Europe"),
    new Region(11, "West Europe"),
    new Region(12, "East Europe"),
    new Region(2, "Middle East"),
    new Region(3, "Asia"),
    new Region(31, "SE Asia"),
    new Region(4, "Africa"),
    new Region(5, "Central America"),
    new Region(6, "South America"),
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