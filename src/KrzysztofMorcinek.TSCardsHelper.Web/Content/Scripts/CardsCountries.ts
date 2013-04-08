import cardModule = module("./Card");
import countryModule = module("./Country");

declare var _: any;

export class CardsCountries {
    constructor(public cards: cardModule.Card[], public countries: countryModule.Country) { }

    getCards(countryId: number) {
        var returningCards = _.filter(this.cards, function (card) {
            return _.contains(this.countries[countryId].cardIds, card.id);
        });
        return returningCards;
    }
}