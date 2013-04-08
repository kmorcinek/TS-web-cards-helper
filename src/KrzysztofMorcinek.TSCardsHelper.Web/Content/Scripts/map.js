function showForCountry(countryId) {
    var cards = [new Card(1, "Defectors"), new Card(2, "Europe")];
    var idx = [2];
    var returningCards = _.filter(cards, function(card) {
        return _.contains(idx, card.id);
    });
    
    var d = new Card(1, "dd");
    alert(d.id);
    document.myform.stage.value = countryId;
}