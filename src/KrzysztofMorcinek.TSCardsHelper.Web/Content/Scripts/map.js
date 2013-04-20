var cards = [
    new Card(2, "Europe"),
    new Card(10, "Blockade"),
    new Card(17, "De Gaulle*"),
    new Card(28, "Suez Crisis*"),
    new Card(105, "Special Relationship"),
    ];

var Region = (function () {
    function Region(id, name, firstCountryId, lastCountryId) {
        this.id = id;
        this.name = name;
        this.firstCountryId = firstCountryId;
        this.lastCountryId = lastCountryId;
    }
    return Region;
})();

var regions = [
    new Region(1, "Europe", 0, 20),
    new Region(11, "West Europe", 0, 14),
    new Region(12, "East Europe", 13, 20),
//    new Region(2, "Middle East"),
//    new Region(3, "Asia"),
//    new Region(31, "SE Asia"),
//    new Region(4, "Africa"),
//    new Region(5, "Central America"),
//    new Region(6, "South America"),
    ];

var countries = [
    new Country(0, "Canada", [2], 230, 195),
    new Country(1, "UK", [2, 28, 105], 460, 147),
    new Country(2, "Spain/Portugal", [], 450, 295),
    new Country(3, "France", [17, 28], 494, 239),
    new Country(4, "Benelux", [105], 506, 190),
    new Country(5, "Norway", [], 525, 68),
    new Country(6, "Denmark", [], 538, 110),
    new Country(7, "W.Germany", [10], 566, 190),
    new Country(8, "Italy", [], 576, 273),
    new Country(9, "E.Germany", [], 586, 150),
    new Country(10, "Sweden", [], 607, 102),
    new Country(11, "Greece", [], 652, 318),
    new Country(12, "Turkey", [], 758, 279),
    new Country(13, "Austria", [], 591, 231),
    new Country(14, "Finland", [], 686, 70),
    new Country(15, "Yugoslavia", [], 637, 273),
    new Country(16, "Chechoslovakia", [], 638, 190),
    new Country(17, "Poland", [], 649, 149),
    new Country(18, "Hungary", [], 651, 230),
    new Country(19, "Bulgaria", [], 699, 273),
    new Country(20, "Romania", [], 711, 230),
];

var cc = new CardsCountries(cards, countries, countries);

ko.applyBindings(cc);