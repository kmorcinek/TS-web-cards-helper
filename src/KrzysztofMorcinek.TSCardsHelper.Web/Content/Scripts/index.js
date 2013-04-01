var indexPage = function (cards) {

    var viewModel = function (cards) {
        var self = this; // TODO remove it?

        self.cards = ko.mapping.fromJS(cards);

        self.discarded = ko.observableArray([]);
    };

    ko.applyBindings(new viewModel(cards));
};