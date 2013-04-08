var cards = [new Card(1, "Defectors"), new Card(2, "Europe")];

var countries = [
    new Country(1, "Canada", [2]),
    new Country(2, "UK", [1,2])
];

var mapAreas = [
    { id: 1, x: 230, y: 195 },
    { id: 2, x: 460, y: 147 }
];

var offsetX = 55;
var offsetY = 38;

_.forEach(mapAreas, function(area) {
    var foo = area.x + "," + area.y + "," + (area.x + offsetX) + "," + (area.y + offsetY);
    area.coords = foo;
});

var cc = new CardsCountries(cards, countries, mapAreas);

ko.applyBindings(cc);