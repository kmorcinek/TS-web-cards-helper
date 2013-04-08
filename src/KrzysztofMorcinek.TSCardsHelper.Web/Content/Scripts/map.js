var cards = [new Card(1, "Defectors"), new Card(2, "Europe")];

var countries = [
    new Country(1, "Canada", [2]),
    new Country(2, "UK", [1,2])
];

var cc = new CardsCountries(cards, countries);

ko.applyBindings(cc);

//function showForCountry(countryId) {
//    cc.getCards(countryId);
//}