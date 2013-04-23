var cards = [
    { "id": 1, "name": "Asia Scoring" }, { "id": 2, "name": "Europe Scoring"}, { "id": 3, "name": "Middle East Scoring" }, { "id": 4, "name": "Duck and Cover" }, { "id": 5, "name": "Five Year Plan" }, { "id": 6, "name": "The China Card" }, { "id": 7, "name": "Socialist Governments" }, { "id": 8, "name": "Fidel*" }, { "id": 9, "name": "Vietnam Revolts*" }, { "id": 10, "name": "Blockade*" }, { "id": 11, "name": "Korean War*" }, { "id": 12, "name": "Romanian Abdication*" }, { "id": 13, "name": "Arab-Israeli War" }, { "id": 14, "name": "Comecon*" }, { "id": 15, "name": "Nasser*" }, { "id": 16, "name": "Warsaw Pact Formed*" }, { "id": 17, "name": "De Gaulle Leads France*"}, { "id": 18, "name": "Captured Nazi Scientist*" }, { "id": 19, "name": "Truman Doctrine*" }, { "id": 20, "name": "Olympic Games" }, { "id": 21, "name": "NATO*" }, { "id": 22, "name": "Independent Reds*" }, { "id": 23, "name": "Marshall Plan*" }, { "id": 24, "name": "Indo-Pakistani War" }, { "id": 25, "name": "Containment*" }, { "id": 26, "name": "CIA Created*" }, { "id": 27, "name": "US/Japan Mutual Defense Pact*" }, { "id": 28, "name": "Suez Crisis*" }, { "id": 29, "name": "East European Unrest" }, { "id": 30, "name": "Decolonization" }, { "id": 31, "name": "Red Scare/Purge" }, { "id": 32, "name": "UN Intervention" }, { "id": 33, "name": "De-Stalinization*" }, { "id": 34, "name": "Nuclear Test Ban" }, { "id": 35, "name": "Formosan Resolution*" }, { "id": 103, "name": "Defectors" }, { "id": 104, "name": "The Cambridge Five" }, { "id": 105, "name": "Special Relationship" }, { "id": 106, "name": "NORAD*" }
    ];

var cardsForCountries = [
{ "id": 1, "countryIds": [], "regionIds": [] }, // Asia Scoring
{ "id": 2, "countryIds": [], "regionIds": [0] }, // Europe Scoring
{ "id": 3, "countryIds": [], "regionIds": [] }, // Middle East Scoring
{ "id": 4, "countryIds": [], "regionIds": [] }, // Duck and Cover
{ "id": 5, "countryIds": [], "regionIds": [] }, // Five Year Plan
{ "id": 6, "countryIds": [], "regionIds": [] }, // The China Card
{ "id": 7, "countryIds": [], "regionIds": [1] }, // Socialist Governments
{ "id": 8, "countryIds": [], "regionIds": [] }, // Fidel*
{ "id": 9, "countryIds": [], "regionIds": [] }, // Vietnam Revolts*
{ "id": 10, "countryIds": [7], "regionIds": [] }, // Blockade*
{ "id": 11, "countryIds": [], "regionIds": [] }, // Korean War*
{ "id": 12, "countryIds": [20], "regionIds": [] }, // Romanian Abdication*
{ "id": 13, "countryIds": [], "regionIds": [] }, // Arab-Israeli War
{ "id": 14, "countryIds": [], "regionIds": [2] }, // Comecon*
{ "id": 15, "countryIds": [], "regionIds": [] }, // Nasser*
{ "id": 16, "countryIds": [], "regionIds": [2] }, // Warsaw Pact Formed*
{ "id": 17, "countryIds": [3], "regionIds": [] }, // De Gaulle Leads France*
{ "id": 18, "countryIds": [], "regionIds": [] }, // Captured Nazi Scientist*
{ "id": 19, "countryIds": [], "regionIds": [0] }, // Truman Doctrine*
{ "id": 20, "countryIds": [], "regionIds": [] }, // Olympic Games
{ "id": 21, "countryIds": [], "regionIds": [0] }, // NATO*
{ "id": 22, "countryIds": [15, 20, 19, 18, 16], "regionIds": [] }, // Independent Reds*
{ "id": 23, "countryIds": [], "regionIds": [1] }, // Marshall Plan*
{ "id": 24, "countryIds": [], "regionIds": [] }, // Indo-Pakistani War
{ "id": 25, "countryIds": [], "regionIds": [] }, // Containment*
{ "id": 26, "countryIds": [], "regionIds": [] }, // CIA Created*
{ "id": 27, "countryIds": [], "regionIds": [] }, // US/Japan Mutual Defense Pact*
{ "id": 28, "countryIds": [3,1], "regionIds": [] }, // Suez Crisis*
{ "id": 29, "countryIds": [], "regionIds": [2] }, // East European Unrest
{ "id": 30, "countryIds": [], "regionIds": [] }, // Decolonization
{ "id": 31, "countryIds": [], "regionIds": [] }, // Red Scare/Purge
{ "id": 32, "countryIds": [], "regionIds": [] }, // UN Intervention
{ "id": 33, "countryIds": [], "regionIds": [] }, // De-Stalinization*
{ "id": 34, "countryIds": [], "regionIds": [] }, // Nuclear Test Ban
{ "id": 35, "countryIds": [], "regionIds": [] }, // Formosan Resolution*
{ "id": 103, "countryIds": [], "regionIds": [] }, // Defectors
{ "id": 104, "countryIds": [], "regionIds": [] }, // The Cambridge Five
{ "id": 105, "countryIds": [], "regionIds": [1] }, // Special Relationship
{ "id": 106, "countryIds": [0], "regionIds": [] }, // NORAD*
];

// Apply cards with countries they reference
for (var i = 0; i < cardsForCountries.length; i++) {
    var forContries = cardsForCountries[i];
    var card = _.findWhere(cards, { id: forContries.id });
    card.countryIds = forContries.countryIds;
    card.regionIds = forContries.regionIds;
}

var regions = [
    new Region("Europe", 0, 20),
    new Region("West Europe", 0, 14),
    new Region("East Europe", 13, 20),
//    new Region(2, "Middle East"),
//    new Region(3, "Asia"),
//    new Region(31, "SE Asia"),
//    new Region(4, "Africa"),
//    new Region(5, "Central America"),
//    new Region(6, "South America"),
    ];

var countries = [
    new Country(0, "Canada", 230, 195),
    new Country(1, "UK", 460, 147),
    new Country(2, "Spain/Portugal", 450, 295),
    new Country(3, "France", 494, 239),
    new Country(4, "Benelux", 506, 190),
    new Country(5, "Norway", 525, 68),
    new Country(6, "Denmark", 538, 110),
    new Country(7, "W.Germany", 566, 190),
    new Country(8, "Italy", 576, 273),
    new Country(9, "E.Germany", 586, 150),
    new Country(10, "Sweden", 607, 102),
    new Country(11, "Greece", 652, 318),
    new Country(12, "Turkey", 758, 279),
    new Country(13, "Austria", 591, 231),
    new Country(14, "Finland", 686, 70),
    new Country(15, "Yugoslavia", 637, 273),
    new Country(16, "Chechoslovakia", 638, 190),
    new Country(17, "Poland", 649, 149),
    new Country(18, "Hungary", 651, 230),
    new Country(19, "Bulgaria", 699, 273),
    new Country(20, "Romania", 711, 230),
];

var cc = new CardsCountries(cards, countries, regions);

ko.applyBindings(cc);