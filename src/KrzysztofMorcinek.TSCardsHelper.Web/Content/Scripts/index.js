var indexPage = function (cards) {

    var viewModel = function (cards) {
        var self = this; // TODO remove it?

        self.cards = ko.mapping.fromJS(cards);

        self.discarded = ko.observableArray([]);

        self.discard = function(card) {
            self.cards.remove(card);
            self.discarded.push(card);
        };
    };

    ko.applyBindings(new viewModel(cards));
};