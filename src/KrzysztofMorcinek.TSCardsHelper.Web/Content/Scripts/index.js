var indexPage = function (cards) {

    var viewModel = function (cards) {
        var self = this; // TODO remove it?

        self.cards = ko.observableArray([{ "Name": "Fylke" }]);
//        self.cards.push({ "Name": "Fylke" });
//        ko.mapping.fromJS(dataModel, mapping, this);
    };

    ko.applyBindings(new viewModel(cards));
};