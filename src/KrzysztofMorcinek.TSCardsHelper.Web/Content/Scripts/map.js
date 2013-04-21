var cards = [
    { "id": 1, "name": "Asia Scoring" }, { "id": 2, "name": "Europe Scoring" }, { "id": 3, "name": "Middle East Scoring" }, { "id": 4, "name": "Duck and Cover" }, { "id": 5, "name": "Five Year Plan" }, { "id": 6, "name": "The China Card" }, { "id": 7, "name": "Socialist Governments" }, { "id": 8, "name": "Fidel*" }, { "id": 9, "name": "Vietnam Revolts*" }, { "id": 10, "name": "Blockade*" }, { "id": 11, "name": "Korean War*" }, { "id": 12, "name": "Romanian Abdication*" }, { "id": 13, "name": "Arab-Israeli War" }, { "id": 14, "name": "Comecon*" }, { "id": 15, "name": "Nasser*" }, { "id": 16, "name": "Warsaw Pact Formed*" }, { "id": 17, "name": "De Gaulle Leads France*" }, { "id": 18, "name": "Captured Nazi Scientist*" }, { "id": 19, "name": "Truman Doctrine*" }, { "id": 20, "name": "Olympic Games" }, { "id": 21, "name": "NATO*" }, { "id": 22, "name": "Independent Reds*" }, { "id": 23, "name": "Marshall Plan*" }, { "id": 24, "name": "Indo-Pakistani War" }, { "id": 25, "name": "Containment*" }, { "id": 26, "name": "CIA Created*" }, { "id": 27, "name": "US/Japan Mutual Defense Pact*" }, { "id": 28, "name": "Suez Crisis*" }, { "id": 29, "name": "East European Unrest" }, { "id": 30, "name": "Decolonization" }, { "id": 31, "name": "Red Scare/Purge" }, { "id": 32, "name": "UN Intervention" }, { "id": 33, "name": "De-Stalinization*" }, { "id": 34, "name": "Nuclear Test Ban" }, { "id": 35, "name": "Formosan Resolution*" }, { "id": 103, "name": "Defectors" }, { "id": 104, "name": "The Cambridge Five" }, { "id": 105, "name": "Special Relationship" }, { "id": 106, "name": "NORAD*" }
    ];

var regions = [
    new Region(1, "Europe", 0, 20),
    new Region(11, "West Europe", 0, 14),
    new Region(12, "East Europe", 13, 20),
//    new Region(2, "Middle East"),
//    new Region(3, "Asia"),
//    new Region(31, "SE Asia"),
//    new Region(4, "Africa"),
//    new Region(5, "Central America"),
//    new Region(6, "South America"),
    ];

var countries = [
    new Country(0, "Canada", [2], 230, 195),
    new Country(1, "UK", [2, 28], 460, 147),
    new Country(2, "Spain/Portugal", [], 450, 295),
    new Country(3, "France", [17, 28], 494, 239),
    new Country(4, "Benelux", [], 506, 190),
    new Country(5, "Norway", [], 525, 68),
    new Country(6, "Denmark", [], 538, 110),
    new Country(7, "W.Germany", [10], 566, 190),
    new Country(8, "Italy", [], 576, 273),
    new Country(9, "E.Germany", [], 586, 150),
    new Country(10, "Sweden", [], 607, 102),
    new Country(11, "Greece", [], 652, 318),
    new Country(12, "Turkey", [], 758, 279),
    new Country(13, "Austria", [], 591, 231),
    new Country(14, "Finland", [], 686, 70),
    new Country(15, "Yugoslavia", [], 637, 273),
    new Country(16, "Chechoslovakia", [], 638, 190),
    new Country(17, "Poland", [], 649, 149),
    new Country(18, "Hungary", [], 651, 230),
    new Country(19, "Bulgaria", [], 699, 273),
    new Country(20, "Romania", [], 711, 230),
];

var cc = new CardsCountries(cards, countries, countries);

ko.applyBindings(cc);