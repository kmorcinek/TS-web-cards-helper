import cardModule = module("./Card");
import countryModule = module("./Country");

export class CardsCountries {
    constructor(public cards: cardModule.Card[], public countries: countryModule.Country) { }

    getCards(countryId: number) {
        return [this.cards[0]];
    }
}