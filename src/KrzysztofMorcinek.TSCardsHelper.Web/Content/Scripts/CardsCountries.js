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
        this.hoveredCountry = ko.observable();
        ko.utils.arrayForEach(cards, function (card) {
            card.backgroundPosition = "0 " + (card.id - 1) * -113;
        });
        this.selectedCountry = ko.computed(this.hoveredCountry).extend({
            throttle: 500
        });
        this.cardsPosition = ko.computed(function () {
            if(_this.selectedCountry() !== undefined && _.contains(_this.regions[0].countryIds, _this.selectedCountry().id)) {
                return "down-cards";
            }
            return "";
        });
        this.selectedCountryName = ko.computed(function () {
            if(_this.selectedCountry() !== undefined) {
                return _this.selectedCountry().name;
            }
            return "Hover over a country";
        });
        this.clickMap = function () {
            _this.hoveredCountry(undefined);
        };
        this.showForCountry = function (country) {
            _this.hoveredCountry(country);
        };
        ko.computed(function () {
            var country = _this.selectedCountry();
            if(country === undefined) {
                _this.connectedCards.removeAll();
                return;
            }
            var allConnectedCards = _this.getConnectedCards(country);
            var cards = ko.utils.parseJson(localStorage.getItem('ts-cards'));
            if(cards === null) {
                cards = {
                    removedPile: [],
                    sureInHands: [],
                    cardsInDeck: [],
                    discardedPile: []
                };
            }
            var removedPile = cards.removedPile;
            allConnectedCards = _.filter(allConnectedCards, function (item) {
                return _.filter(removedPile, function (removedItem) {
                    return removedItem.id === item.id;
                }).length === 0;
            });
            ko.utils.arrayForEach(allConnectedCards, function (card) {
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
            KnockoutNewFunctions.utils.arrayPushAll(_this.connectedCards, allConnectedCards);
            _this.connectedCards.valueHasMutated();
        });
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
