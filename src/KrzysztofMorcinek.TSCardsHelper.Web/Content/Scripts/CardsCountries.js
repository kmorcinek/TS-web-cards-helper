

var CardsCountries = (function () {
    function CardsCountries(cards, countries) {
        this.cards = cards;
        this.countries = countries;
    }
    CardsCountries.prototype.getCards = function (countryId) {
        return [
            this.cards[0]
        ];
    };
    return CardsCountries;
})();
exports.CardsCountries = CardsCountries;
