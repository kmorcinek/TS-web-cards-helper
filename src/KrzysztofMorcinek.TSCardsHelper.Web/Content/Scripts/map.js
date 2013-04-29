var cards = [
    { "id": 1, "name": "Asia Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/asia-scoring.jpg", "href": "http://twilightstrategy.com/2011/12/14/regions-asia/" }, { "id": 2, "name": "Europe Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/europe-scoring.jpg", "href": "http://twilightstrategy.com/2011/12/12/regions-europe/" }, { "id": 3, "name": "Middle East Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/middle-east-scoring.jpg", "href": "http://twilightstrategy.com/2012/02/13/regions-middle-east/" }, { "id": 4, "name": "Duck and Cover", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/duck-and-cover.jpg", "href": "http://twilightstrategy.com/2011/12/12/duck-and-cover/" }, { "id": 5, "name": "Five Year Plan", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/five-year-plan.jpg", "href": "http://twilightstrategy.com/2011/12/12/five-year-plan/" }, { "id": 6, "name": "The China Card", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/the-china-card.jpg", "href": "http://twilightstrategy.com/2012/10/31/the-china-card/" }, { "id": 7, "name": "Socialist Governments", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/socialist-governments.jpg", "href": "http://twilightstrategy.com/2011/12/13/socialist-governments/" }, { "id": 8, "name": "Fidel*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/fidel.jpg", "href": "http://twilightstrategy.com/2011/12/14/fidel/" }, { "id": 9, "name": "Vietnam Revolts*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/vietnam-revolts.jpg", "href": "http://twilightstrategy.com/2011/12/16/vietnam-revolts/" }, { "id": 10, "name": "Blockade*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/blockade.jpg", "href": "http://twilightstrategy.com/2011/12/19/blockade/" }, { "id": 11, "name": "Korean War*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/korean-war.jpg", "href": "http://twilightstrategy.com/2011/12/25/korean-war/" }, { "id": 12, "name": "Romanian Abdication*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/romanian-abdication.jpg", "href": "http://twilightstrategy.com/2012/01/02/romanian-abdication/" }, { "id": 13, "name": "Arab-Israeli War", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/arab-israeli-war.jpg", "href": "http://twilightstrategy.com/2012/01/16/arab-israeli-war/" }, { "id": 14, "name": "Comecon*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/comecon.jpg", "href": "http://twilightstrategy.com/2012/01/24/comecon/" }, { "id": 15, "name": "Nasser*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/nasser.jpg", "href": "http://twilightstrategy.com/2012/02/06/nasser/" }, { "id": 16, "name": "Warsaw Pact Formed*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/warsaw-pact-formed.jpg", "href": "http://twilightstrategy.com/2012/02/20/warsaw-pact-formed/" }, { "id": 17, "name": "De Gaulle Leads France*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/de-gaulle-leads-france.jpg", "href": "http://twilightstrategy.com/2012/02/24/de-gaulle-leads-france/" }, { "id": 18, "name": "Captured Nazi Scientist*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/captured-nazi-scientist.jpg", "href": "http://twilightstrategy.com/2012/02/27/captured-nazi-scientist/" }, { "id": 19, "name": "Truman Doctrine*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/truman-doctrine.jpg", "href": "http://twilightstrategy.com/2012/03/02/truman-doctrine/" }, { "id": 20, "name": "Olympic Games", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/olympic-games.jpg", "href": "http://twilightstrategy.com/2012/03/12/olympic-games/" }, { "id": 21, "name": "NATO*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/nato.jpg", "href": "http://twilightstrategy.com/2012/03/12/nato/" }, { "id": 22, "name": "Independent Reds*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/independent-reds.jpg", "href": "http://twilightstrategy.com/2012/03/13/independent-reds/" }, { "id": 23, "name": "Marshall Plan*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/marshall-plan.jpg", "href": "http://twilightstrategy.com/2012/03/16/marshall-plan/" }, { "id": 24, "name": "Indo-Pakistani War", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/indo-pakistani-war.jpg", "href": "http://twilightstrategy.com/2012/03/19/indo-pakistani-war/" }, { "id": 25, "name": "Containment*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/containment.jpg", "href": "http://twilightstrategy.com/2012/03/20/containment/" }, { "id": 26, "name": "CIA Created*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/cia-created.jpg", "href": "http://twilightstrategy.com/2012/03/26/cia-created/" }, { "id": 27, "name": "US/Japan Mutual Defense Pact*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/us-japan-mutual-defense-pact.jpg", "href": "http://twilightstrategy.com/2012/03/27/usjapan-mutual-defense-pact/" }, { "id": 28, "name": "Suez Crisis*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/suez-crisis.jpg", "href": "http://twilightstrategy.com/2012/03/29/suez-crisis/" }, { "id": 29, "name": "East European Unrest", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/east-european-unrest.jpg", "href": "http://twilightstrategy.com/2012/04/02/east-european-unrest/" }, { "id": 30, "name": "Decolonization", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/decolonization.jpg", "href": "http://twilightstrategy.com/2012/04/05/decolonization/" }, { "id": 31, "name": "Red Scare/Purge", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/red-scare-purge.jpg", "href": "http://twilightstrategy.com/2012/04/23/red-scarepurge/" }, { "id": 32, "name": "UN Intervention", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/un-intervention.jpg", "href": "http://twilightstrategy.com/2012/05/07/un-intervention/" }, { "id": 33, "name": "De-Stalinization*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/de-stalinization.jpg", "href": "http://twilightstrategy.com/2012/05/29/de-stalinization/" }, { "id": 34, "name": "Nuclear Test Ban", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/nuclear-test-ban.jpg", "href": "http://twilightstrategy.com/2012/06/11/nuclear-test-ban/" }, { "id": 35, "name": "Formosan Resolution*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/formosan-resolution.jpg", "href": "http://twilightstrategy.com/2012/07/02/formosan-resolution/" }, { "id": 103, "name": "Defectors", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/defectors.jpg", "href": "http://twilightstrategy.com/2012/07/09/defectors/" }, { "id": 104, "name": "The Cambridge Five", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/the-cambridge-five.jpg", "href": "http://twilightstrategy.com/2012/07/11/the-cambridge-five/" }, { "id": 105, "name": "Special Relationship", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/special-relationship.jpg", "href": "http://twilightstrategy.com/2012/07/18/special-relationship/" }, { "id": 106, "name": "NORAD*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/norad.jpg", "href": "http://twilightstrategy.com/2012/07/25/norad/" }
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
{ "id": 105, "countryIds": [1], "regionIds": [1] }, // Special Relationship
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
    new Region("Middle East", 21, 30),
    new Region("Asia", 31, 45),
    new Region("SE Asia", 34, 40),
    new Region("Africa", 46, 63),
    new Region("Central America", 64, 73),
    new Region("South America", 74, 80),
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
    new Country(21, "Lebanon", 723, 320),
    new Country(22, "Syria", 782, 320),
    new Country(23, "Israel", 713, 360),
    new Country(24, "Iraq", 782, 360),
    new Country(25, "Iran", 841, 360),
    new Country(26, "Libya", 624, 396),
    new Country(27, "Eqypt", 685, 402),
    new Country(28, "Jordan", 752, 401),
    new Country(29, "Gulf States", 819, 400),
    new Country(30, "Saudi Arabia", 803, 441),
    new Country(31, "Afganistan", 911, 333),
    new Country(32, "Pakistan", 911, 385),
    new Country(33, "India", 977, 414),
    new Country(34, "Burma", 1050, 421),
    new Country(35, "Laos/Cambodia", 1108, 427),
    new Country(36, "Thailand", 1083, 470),
    new Country(37, "Vietnam", 1144, 470),
    new Country(38, "Malaysia", 1111, 534),
    new Country(39, "Indonesia", 1210, 582),
    new Country(40, "Philippines", 1232, 469),
    new Country(41, "Australia", 1211, 655),
    new Country(42, "Japan", 1280, 357),
    new Country(43, "Taiwan", 1206, 406),
    new Country(44, "S. Korea", 1232, 319),
    new Country(45, "N. Korea", 1220, 278),
    new Country(46, "Tunisia", 589, 348),
    new Country(47, "Algeria", 527, 354),
    new Country(48, "Morocco", 467, 372),
    new Country(49, "West African States", 461, 425),
    new Country(50, "Ivory Coast", 500, 504),
    new Country(51, "Saharan States", 552, 439),
    new Country(52, "Nigeria", 575, 497),
    new Country(53, "Cameroon", 602, 544),
    new Country(54, "Zaire", 673, 564),
    new Country(55, "Angola", 620, 614),
    new Country(56, "South Africa", 645, 721),
    new Country(57, "Botswana", 674, 678),
    new Country(58, "Zimbabwe", 694, 635),
//    new Country(59, "SE African States", 753, ),
//    new Country(60, "Kenya", , ),
//    new Country(61, "Somalia", , ),
//    new Country(62, "Ethiogia", , ),
    new Country(63, "Sudan", 695, 450),
    new Country(64, "Mexico", 49, 364),
//    new Country(65, "Guatemala", , ),
//    new Country(66, "El Salvador", , ),
//    new Country(67, "Honduras", , ),
    new Country(68, "Costa Rica", 136, 489),
    new Country(69, "Panama", 203, 488),
//    new Country(70, "Nicaragua", , ),
    new Country(71, "Cuba", 205, 394),
//    new Country(72, "Haiti", , ),
//    new Country(73, "Dominican Rep", , ),
    new Country(74, "Colombia", 242, 538),
    new Country(75, "Venezuela", 274, 494),
    new Country(76, "Brazil", 378, 598),
    new Country(77, "Uruguay", 328, 735),
    new Country(78, "Paraquay", 309, 685),
    new Country(79, "Argentina", 262, 768),
    new Country(80, "Chila", 241, 689),
//    new Country(81, "Peru", , ),
//    new Country(82, "Bolivia", , ),
//    new Country(83, "Ecuador", , ),
];

var cc = new CardsCountries(cards, countries, regions);

ko.applyBindings(cc);