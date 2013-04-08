

var CardsCountries = (function () {
    function CardsCountries(cards, countries) {
        this.cards = cards;
        this.countries = countries;
    }
    CardsCountries.prototype.getCards = function (countryId) {
        var returningCards = _.filter(this.cards, function (card) {
            return _.contains(this.countries[countryId].cardIds, card.id);
        });
        return returningCards;
    };
    return CardsCountries;
})();
exports.CardsCountries = CardsCountries;
