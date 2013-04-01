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

        self.start3rdTurn = function () {
            ko.utils.arrayForEach(self.cards(), function(card) {
                self.sureInHands.push(card);
            });
            self.cards.removeAll();
            
            ko.utils.arrayForEach(self.discardedPile(), function (card) {
                self.cards.push(card);
            });
            self.discardedPile.removeAll();
        };
    };

    ko.applyBindings(new viewModel(cards));
};