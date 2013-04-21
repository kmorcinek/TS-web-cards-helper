underscoreJS = _;
KnockoutNewFunctions = ko;
var Card = (function () {
    function Card(id, name, countryIds) {
        this.id = id;
        this.name = name;
        this.countryIds = countryIds;
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
    function Country(id, name, x, y) {
        this.id = id;
        this.name = name;
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
                return _.contains(card.countryIds, country.id);
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
