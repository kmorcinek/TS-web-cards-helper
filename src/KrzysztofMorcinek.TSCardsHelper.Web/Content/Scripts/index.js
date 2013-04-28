var indexPage = function (allCards) {

    var viewModel = function (allCards) {
        var self = this; // TODO remove it?

        self.earlyWarCards = allCards.EarlyWar;
        self.midWarCards = allCards.MidWar;
        self.lateWarCards = allCards.LateWar;

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

        self.reshuffleCards = function() {
            ko.utils.arrayForEach(self.cards(), function (card) {
                self.sureInHands.push(card);
            });
            self.cards.removeAll();

            ko.utils.arrayForEach(self.discardedPile(), function (card) {
                self.cards.push(card);
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
                self.cards.push(card);
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
                self.cards.push(card);
            });

            self.hasLateWarCards(false);
        };

        ko.computed(function() {
            localStorage.setItem('ts-cards', ko.toJSON(self.removedPile));
        }).extend({
            throttle: 500
        });
    };

    ko.applyBindings(new viewModel(allCards));
};