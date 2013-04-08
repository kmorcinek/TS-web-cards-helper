var cards = [new Card(1, "Defectors"), new Card(2, "Europe")];

var countries = [
    new Country(1, "Canada", [2]),
    new Country(2, "UK", [1])
];

var cc = new CardsCountries(cards, countries);

function showForCountry(countryId) {
    var cards = cc.getCards(countryId);
    document.myform.stage.value = cards[0].name;
}