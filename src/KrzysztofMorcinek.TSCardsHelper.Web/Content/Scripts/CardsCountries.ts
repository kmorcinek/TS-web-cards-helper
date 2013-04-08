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
    constructor(public id: number, public name: string, public cardIds: number[]) { }
}

class CardsCountries {
    connectedCards = ko.observableArray([]);
    public showForCountry: (countryArea) => void;

    constructor(public cards: Card[], public countries: Country, private mapAreas) {

        this.showForCountry = (countryArea) => {
            this.getCards(countryArea.id);
        }
    }

    getCards(countryId: number) {
        var country = underscoreJS.findWhere(this.countries, { id: countryId });
        var returningCards = _.filter(this.cards, function (card) {
            return _.contains(country.cardIds, card.id);
        });

        this.connectedCards.valueWillMutate();
        this.connectedCards.removeAll();
        KnockoutNewFunctions.utils.arrayPushAll(this.connectedCards, returningCards);
        this.connectedCards.valueHasMutated();

        return returningCards;
    }
}