underscoreJS = _;
KnockoutNewFunctions = ko;
var Card = (function () {
    function Card(id, name) {
        this.id = id;
        this.name = name;
    }
    return Card;
})();
var Country = (function () {
    function Country(id, name, cardIds, x, y) {
        this.id = id;
        this.name = name;
        this.cardIds = cardIds;
        this.x = x;
        this.y = y;
        var offsetX = 55;
        var offsetY = 38;
        this.coords = x + "," + y + "," + (x + offsetX) + "," + (y + offsetY);
    }
    return Country;
})();
var CardsCountries = (function () {
    function CardsCountries(cards, countries) {
        this.cards = cards;
        this.countries = countries;
        var _this = this;
        this.connectedCards = ko.observableArray([]);
        this.examinedCountry = ko.observable("");
        this.showForCountry = function (countryArea) {
            _this.getCards(countryArea.id);
        };
    }
    CardsCountries.prototype.getCards = function (countryId) {
        var country = underscoreJS.findWhere(this.countries, {
            id: countryId
        });
        var returningCards = _.filter(this.cards, function (card) {
            return _.contains(country.cardIds, card.id);
        });
        this.examinedCountry(country.name);
        this.connectedCards.valueWillMutate();
        this.connectedCards.removeAll();
        KnockoutNewFunctions.utils.arrayPushAll(this.connectedCards, returningCards);
        this.connectedCards.valueHasMutated();
        return returningCards;
    };
    return CardsCountries;
})();
