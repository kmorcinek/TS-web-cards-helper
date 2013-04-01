var indexPage = function (cards) {

    var viewModel = function (cards) {
        var self = this; // TODO remove it?

        self.cards = ko.mapping.fromJS(cards);

        self.discardedPile = ko.observableArray([]);
        self.removedPile = ko.observableArray([]);

        self.discard = function(card) {
            self.cards.remove(card);
            self.discardedPile.push(card);
        };
        
        self.remove = function (card) {
            self.cards.remove(card);
            self.removedPile.push(card);
        };
    };

    ko.applyBindings(new viewModel(cards));
};