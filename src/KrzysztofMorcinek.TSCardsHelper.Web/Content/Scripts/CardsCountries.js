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
        this.examinedCountry = ko.observable();
        this.cardsPosition = ko.computed(function () {
            return "";
        });
        this.examinedCountryName = ko.computed(function () {
            if(_this.examinedCountry() === undefined) {
                return "Hover over a country";
            } else {
                return _this.examinedCountry().name;
            }
        });
        this.showForCountry = function (country) {
            _this.examinedCountry(country);
            var returningCards = _this.getConnectedCards(country);
            var cards = ko.utils.parseJson(localStorage.getItem('ts-cards'));
            var removedPile = cards.removedPile;
            returningCards = _.filter(returningCards, function (item) {
                return _.filter(removedPile, function (removedItem) {
                    return removedItem.id === item.id;
                }).length === 0;
            });
            ko.utils.arrayForEach(returningCards, function (card) {
                if(underscoreJS.findWhere(cards.sureInHands, {
                    name: card.name
                }) !== undefined) {
                    card.urgency = "sureInHands";
                } else if(underscoreJS.findWhere(cards.cardsInDeck, {
                    name: card.name
                }) !== undefined) {
                    card.urgency = "cardsInDeck";
                } else {
                    card.urgency = "empty";
                }
            });
            _this.connectedCards.valueWillMutate();
            _this.connectedCards.removeAll();
            KnockoutNewFunctions.utils.arrayPushAll(_this.connectedCards, returningCards);
            _this.connectedCards.valueHasMutated();
        };
        this.getConnectedCards = function (country) {
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
            return _.uniq(cardsConnectedById.concat(cardsConnectedByRegion));
        };
    }
    return CardsCountries;
})();
