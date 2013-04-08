var cards = [new Card(1, "Defectors"), new Card(2, "Europe")];
var idx = [2];
var returningCards = _.filter(cards, function (card) {
    return _.contains(idx, card.id);
});

var countries = [new Country(11,"UK", [2])];

var cc = new CardsCountries(cards, countries);

var a = cc.getCards(11);

function showForCountry(countryId) {
    document.myform.stage.value = countryId;
}