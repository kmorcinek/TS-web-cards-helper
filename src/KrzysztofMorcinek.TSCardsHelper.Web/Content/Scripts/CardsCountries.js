underscoreJS = _;
KnockoutNewFunctions = ko;
var Card = (function () {
    function Card(id, name) {
        this.id = id;
        this.name = name;
    }
    return Card;
})();
var Region = (function () {
    function Region(id, name, firstCountryId, lastCountryId) {
        this.id = id;
        this.name = name;
        this.firstCountryId = firstCountryId;
        this.lastCountryId = lastCountryId;
    }
    return Region;
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
        this.showForCountry = function (country) {
            var returningCards = _.filter(_this.cards, function (card) {
                return _.contains(country.cardIds, card.id);
            });
            _this.examinedCountry(country.name);
            _this.connectedCards.valueWillMutate();
            _this.connectedCards.removeAll();
            KnockoutNewFunctions.utils.arrayPushAll(_this.connectedCards, returningCards);
            _this.connectedCards.valueHasMutated();
        };
    }
    return CardsCountries;
})();
