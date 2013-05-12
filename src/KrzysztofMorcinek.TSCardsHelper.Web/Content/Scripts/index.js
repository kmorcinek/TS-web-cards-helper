var indexPage = function (allCards) {

    var viewModel = function (allCards) {
        var self = this; // TODO remove it?

        self.midWarCards = allCards.midWar;
        self.lateWarCards = allCards.lateWar;

        self.cardsInDeck = ko.observableArray(allCards.earlyWar);

        self.sureInHands = ko.observableArray([]);
        self.discardedPile = ko.observableArray([]);
        self.removedPile = ko.observableArray([]);

        self.discard = function(card) {
            self.sureInHands.remove(card);
            self.cardsInDeck.remove(card);
            self.discardedPile.push(card);
        };
        
        self.remove = function (card) {
            self.sureInHands.remove(card);
            self.cardsInDeck.remove(card);
            self.removedPile.push(card);
        };

        self.reshuffleCards = function() {
            ko.utils.arrayForEach(self.cardsInDeck(), function (card) {
                self.sureInHands.push(card);
            });
            self.cardsInDeck.removeAll();

            ko.utils.arrayForEach(self.discardedPile(), function (card) {
                self.cardsInDeck.push(card);
            });
            self.discardedPile.removeAll();
        };

        self.enable3rdTurn = ko.observable(true);
        self.start3rdTurn = function () {
            self.reshuffleCards();

            self.enable3rdTurn(false);
            self.hasMidWarCards(true);
        };

        self.hasMidWarCards = ko.observable(false);
        self.addMidWarCards = function () {
            ko.utils.arrayForEach(self.midWarCards, function (card) {
                self.cardsInDeck.push(card);
            });
            
            self.hasMidWarCards(false);
            self.has7thTurn(true);
        };
        
        self.has7thTurn = ko.observable(false);
        self.start7thTurn = function () {
            self.reshuffleCards();

            self.has7thTurn(false);
            self.hasLateWarCards(true);
        };
        
        self.hasLateWarCards = ko.observable(false);
        self.addLateWarCards = function () {
            ko.utils.arrayForEach(self.lateWarCards, function (card) {
                self.cardsInDeck.push(card);
            });

            self.hasLateWarCards(false);
        };

        ko.computed(function () {
            var cards = {
                cardsInDeckIds: _.pluck(self.cardsInDeck(), "id"),
                sureInHandsIds: _.pluck(self.sureInHands(), "id"),
                discardedPileIds: _.pluck(self.discardedPile(), "id"),
                removedPileIds: _.pluck(self.removedPile(), "id"),
            };

            localStorage.setItem('ts-cards#2', ko.toJSON(cards));
        }).extend({
            throttle: 500
        });
    };

    ko.applyBindings(new viewModel(allCards));
};

$(function () {
    indexPage(cardsByStage);
});