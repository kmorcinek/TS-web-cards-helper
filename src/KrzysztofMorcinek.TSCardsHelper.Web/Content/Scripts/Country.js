var Country = (function () {
    function Country(id, name, cardIds) {
        this.id = id;
        this.name = name;
        this.cardIds = cardIds;
    }
    return Country;
})();
exports.Country = Country;
