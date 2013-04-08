/// <reference path="../../Scripts/typings/underscore/underscore-typed-1.4.3.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />

class Card {
    constructor(public id: number, public name: string) { }
}

class Country {
    constructor(public id: number, public name: string, public cardIds: number[]) { }
}

declare var underscoreJS: any;
underscoreJS = _;

class CardsCountries {
    constructor(public cards: Card[], public countries: Country) { }

    getCards(countryId: number) {
        var country = underscoreJS.findWhere(this.countries, { id: countryId });
        var returningCards = _.filter(this.cards, function (card) {
            return _.contains(country.cardIds, card.id);
        });
        return returningCards;
    }
}