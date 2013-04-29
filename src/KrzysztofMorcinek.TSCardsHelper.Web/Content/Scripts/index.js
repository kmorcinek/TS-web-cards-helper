var indexPage = function (allCards) {

    var viewModel = function (allCards) {
        var self = this; // TODO remove it?

        self.midWarCards = allCards.MidWar;
        self.lateWarCards = allCards.LateWar;

        self.cardsInDeck = ko.observableArray(allCards.EarlyWar);

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
            var a = {
                cardsInDeck: self.cardsInDeck(),
                sureInHands: self.sureInHands(),
                discardedPile: self.discardedPile(),
                removedPile: self.removedPile(),
            };

            localStorage.setItem('ts-cards', ko.toJSON(a));
        }).extend({
            throttle: 500
        });
    };

    ko.applyBindings(new viewModel(allCards));
};