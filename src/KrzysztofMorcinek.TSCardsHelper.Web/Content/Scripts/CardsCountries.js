underscoreJS = _;
KnockoutNewFunctions = ko;
var Card = (function () {
    function Card(id, name, picturePath, countryIds, regionIds) {
        this.id = id;
        this.name = name;
        this.picturePath = picturePath;
        this.countryIds = countryIds;
        this.regionIds = regionIds;
    }
    return Card;
})();
var Region = (function () {
    function Region(name, firstCountryId, lastCountryId) {
        this.name = name;
        this.firstCountryId = firstCountryId;
        this.lastCountryId = lastCountryId;
        this.countryIds = [];
        for(var i = firstCountryId; i < lastCountryId + 1; i++) {
            this.countryIds.push(i);
        }
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
    function CardsCountries(cards, countries, regions) {
        this.cards = cards;
        this.countries = countries;
        this.regions = regions;
        var _this = this;
        this.connectedCards = ko.observableArray([]);
        this.examinedCountry = ko.observable("Hover over a country (Europe)");
        this.showForCountry = function (country) {
            var cardsConnectedById = _.filter(_this.cards, function (card) {
                return _.contains(card.countryIds, country.id);
            });
            var cardsConnectedByRegion = _.filter(_this.cards, function (card) {
                var resultFromRegion = false;
                if(card.regionIds !== undefined) {
                    for(var i = 0; i < card.regionIds.length; i++) {
                        var idsFromRegion = this.regions[card.regionIds[i]].countryIds;
                        resultFromRegion = resultFromRegion || _.contains(idsFromRegion, country.id);
                    }
                }
                return resultFromRegion;
            });
            var returningCards = _.uniq(cardsConnectedById.concat(cardsConnectedByRegion));
            _this.examinedCountry(country.name);
            var removedPile = ko.utils.parseJson(localStorage.getItem('ts-cards')).removedPile;
            returningCards = _.filter(returningCards, function (item) {
                return _.filter(removedPile, function (removedItem) {
                    return removedItem.Name === item.name;
                }).length === 0;
            });
            _this.connectedCards.valueWillMutate();
            _this.connectedCards.removeAll();
            KnockoutNewFunctions.utils.arrayPushAll(_this.connectedCards, returningCards);
            _this.connectedCards.valueHasMutated();
        };
    }
    return CardsCountries;
})();
