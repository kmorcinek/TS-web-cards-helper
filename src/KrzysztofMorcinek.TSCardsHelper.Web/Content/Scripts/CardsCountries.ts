class Card {
    constructor(public id: number, public name: string) { }
}

class Country {
    constructor(public id: number, public name: string, public cardIds: number[]) { }
}

declare var _: any;

class CardsCountries {
    constructor(public cards: Card[], public countries: Country) { }

    getCards(countryId: number) {
        var country = _.findWhere(this.countries, { id: countryId });
        var returningCards = _.filter(this.cards, function (card) {
            return _.contains(country.cardIds, card.id);
        });
        return returningCards;
    }
}