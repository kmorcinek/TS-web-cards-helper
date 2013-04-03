var indexPage = function (cards) {

    var viewModel = function (cards) {
        var self = this; // TODO remove it?

        self.cards = ko.mapping.fromJS(cards);

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
        self.midWarCards = function () {

            self.hasMidWarCards(false);
        };
    };

    ko.applyBindings(new viewModel(cards));
};