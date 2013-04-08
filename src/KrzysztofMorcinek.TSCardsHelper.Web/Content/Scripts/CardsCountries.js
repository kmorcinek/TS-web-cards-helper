var Card = (function () {
    function Card(id, name) {
        this.id = id;
        this.name = name;
    }
    return Card;
})();
var Country = (function () {
    function Country(id, name, cardIds) {
        this.id = id;
        this.name = name;
        this.cardIds = cardIds;
    }
    return Country;
})();
underscoreJS = _;
var CardsCountries = (function () {
    function CardsCountries(cards, countries) {
        this.cards = cards;
        this.countries = countries;
    }
    CardsCountries.prototype.getCards = function (countryId) {
        var country = underscoreJS.findWhere(this.countries, {
            id: countryId
        });
        var returningCards = _.filter(this.cards, function (card) {
            return _.contains(country.cardIds, card.id);
        });
        return returningCards;
    };
    return CardsCountries;
})();
