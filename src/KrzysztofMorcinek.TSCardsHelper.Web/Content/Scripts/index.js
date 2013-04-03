var indexPage = function (allCards) {

    var viewModel = function (allCards) {
        var self = this; // TODO remove it?

        self.earlyWarCards = allCards.EarlyWar;
        self.midWarCards = allCards.MidWar;

        self.cards = ko.observableArray(self.earlyWarCards);

        self.sureInHands = ko.observableArray([]);
        self.discardedPile = ko.observableArray([]);
        self.removedPile = ko.observableArray([]);

        self.discard = function(card) {
            self.sureInHands.remove(card);
            self.cards.remove(card);
            self.discardedPile.push(card);
        };
        
        self.remove = function (card) {
            self.sureInHands.remove(card);
            self.cards.remove(card);
            self.removedPile.push(card);
        };

        self.enable3rdTurn = ko.observable(true);
        self.start3rdTurn = function () {
            ko.utils.arrayForEach(self.cards(), function(card) {
                self.sureInHands.push(card);
            });
            self.cards.removeAll();
            
            ko.utils.arrayForEach(self.discardedPile(), function (card) {
                self.cards.push(card);
            });
            self.discardedPile.removeAll();

            self.enable3rdTurn(false);
            self.hasMidWarCards(true);
        };

        self.hasMidWarCards = ko.observable(false);
        self.addMidWarCards = function () {
            ko.utils.arrayForEach(self.midWarCards, function (card) {
                self.cards.push(card);
            });
            
            self.hasMidWarCards(false);
        };
    };

    ko.applyBindings(new viewModel(allCards));
};