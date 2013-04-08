/// <reference path="../../Scripts/typings/underscore/underscore-typed-1.4.3.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />

// Workaround for not having all _ methods in definitions.
declare var underscoreJS: any;
underscoreJS = _;
declare var KnockoutNewFunctions: any;
KnockoutNewFunctions = ko;

class Card {
    constructor(public id: number, public name: string) { }
}

class Country {
    public coords: string;
    constructor(public id: number, public name: string, public cardIds: number[], private x: number, private y: number) {
        var offsetX = 55;
        var offsetY = 38;

        this.coords = x + "," + y + "," + (x + offsetX) + "," + (y + offsetY);
    }
}

class CardsCountries {
    connectedCards = ko.observableArray([]);
    examinedCountry = ko.observable("");
    public showForCountry: (countryArea) => void;

    constructor(public cards: Card[], public countries: Country[]) {

        this.showForCountry = (country) => {
            var returningCards = _.filter(this.cards, function (card) {
                return _.contains(country.cardIds, card.id);
            });

            this.examinedCountry(country.name);

            this.connectedCards.valueWillMutate();
            this.connectedCards.removeAll();
            KnockoutNewFunctions.utils.arrayPushAll(this.connectedCards, returningCards);
            this.connectedCards.valueHasMutated();
        }
    }
}