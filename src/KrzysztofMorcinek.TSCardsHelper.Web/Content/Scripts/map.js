var cards = [
    { "id": 1, "name": "Asia Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/asia-scoring.jpg", "href": "http://twilightstrategy.com/2011/12/14/regions-asia/" }, { "id": 2, "name": "Europe Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/europe-scoring.jpg", "href": "http://twilightstrategy.com/2011/12/12/regions-europe/" }, { "id": 3, "name": "Middle East Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/middle-east-scoring.jpg", "href": "http://twilightstrategy.com/2012/02/13/regions-middle-east/" }, { "id": 4, "name": "Duck and Cover", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/duck-and-cover.jpg", "href": "http://twilightstrategy.com/2011/12/12/duck-and-cover/" }, { "id": 5, "name": "Five Year Plan", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/five-year-plan.jpg", "href": "http://twilightstrategy.com/2011/12/12/five-year-plan/" }, { "id": 6, "name": "The China Card", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/the-china-card.jpg", "href": "http://twilightstrategy.com/2012/10/31/the-china-card/" }, { "id": 7, "name": "Socialist Governments", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/socialist-governments.jpg", "href": "http://twilightstrategy.com/2011/12/13/socialist-governments/" }, { "id": 8, "name": "Fidel*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/fidel.jpg", "href": "http://twilightstrategy.com/2011/12/14/fidel/" }, { "id": 9, "name": "Vietnam Revolts*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/vietnam-revolts.jpg", "href": "http://twilightstrategy.com/2011/12/16/vietnam-revolts/" }, { "id": 10, "name": "Blockade*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/blockade.jpg", "href": "http://twilightstrategy.com/2011/12/19/blockade/" }, { "id": 11, "name": "Korean War*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/korean-war.jpg", "href": "http://twilightstrategy.com/2011/12/25/korean-war/" }, { "id": 12, "name": "Romanian Abdication*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/romanian-abdication.jpg", "href": "http://twilightstrategy.com/2012/01/02/romanian-abdication/" }, { "id": 13, "name": "Arab-Israeli War", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/arab-israeli-war.jpg", "href": "http://twilightstrategy.com/2012/01/16/arab-israeli-war/" }, { "id": 14, "name": "Comecon*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/comecon.jpg", "href": "http://twilightstrategy.com/2012/01/24/comecon/" }, { "id": 15, "name": "Nasser*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/nasser.jpg", "href": "http://twilightstrategy.com/2012/02/06/nasser/" }, { "id": 16, "name": "Warsaw Pact Formed*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/warsaw-pact-formed.jpg", "href": "http://twilightstrategy.com/2012/02/20/warsaw-pact-formed/" }, { "id": 17, "name": "De Gaulle Leads France*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/de-gaulle-leads-france.jpg", "href": "http://twilightstrategy.com/2012/02/24/de-gaulle-leads-france/" }, { "id": 18, "name": "Captured Nazi Scientist*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/captured-nazi-scientist.jpg", "href": "http://twilightstrategy.com/2012/02/27/captured-nazi-scientist/" }, { "id": 19, "name": "Truman Doctrine*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/truman-doctrine.jpg", "href": "http://twilightstrategy.com/2012/03/02/truman-doctrine/" }, { "id": 20, "name": "Olympic Games", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/olympic-games.jpg", "href": "http://twilightstrategy.com/2012/03/12/olympic-games/" }, { "id": 21, "name": "NATO*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/nato.jpg", "href": "http://twilightstrategy.com/2012/03/12/nato/" }, { "id": 22, "name": "Independent Reds*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/independent-reds.jpg", "href": "http://twilightstrategy.com/2012/03/13/independent-reds/" }, { "id": 23, "name": "Marshall Plan*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/marshall-plan.jpg", "href": "http://twilightstrategy.com/2012/03/16/marshall-plan/" }, { "id": 24, "name": "Indo-Pakistani War", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/indo-pakistani-war.jpg", "href": "http://twilightstrategy.com/2012/03/19/indo-pakistani-war/" }, { "id": 25, "name": "Containment*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/containment.jpg", "href": "http://twilightstrategy.com/2012/03/20/containment/" }, { "id": 26, "name": "CIA Created*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/cia-created.jpg", "href": "http://twilightstrategy.com/2012/03/26/cia-created/" }, { "id": 27, "name": "US/Japan Mutual Defense Pact*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/us-japan-mutual-defense-pact.jpg", "href": "http://twilightstrategy.com/2012/03/27/usjapan-mutual-defense-pact/" }, { "id": 28, "name": "Suez Crisis*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/suez-crisis.jpg", "href": "http://twilightstrategy.com/2012/03/29/suez-crisis/" }, { "id": 29, "name": "East European Unrest", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/east-european-unrest.jpg", "href": "http://twilightstrategy.com/2012/04/02/east-european-unrest/" }, { "id": 30, "name": "Decolonization", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/decolonization.jpg", "href": "http://twilightstrategy.com/2012/04/05/decolonization/" }, { "id": 31, "name": "Red Scare/Purge", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/red-scare-purge.jpg", "href": "http://twilightstrategy.com/2012/04/23/red-scarepurge/" }, { "id": 32, "name": "UN Intervention", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/un-intervention.jpg", "href": "http://twilightstrategy.com/2012/05/07/un-intervention/" }, { "id": 33, "name": "De-Stalinization*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/de-stalinization.jpg", "href": "http://twilightstrategy.com/2012/05/29/de-stalinization/" }, { "id": 34, "name": "Nuclear Test Ban", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/nuclear-test-ban.jpg", "href": "http://twilightstrategy.com/2012/06/11/nuclear-test-ban/" }, { "id": 35, "name": "Formosan Resolution*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/formosan-resolution.jpg", "href": "http://twilightstrategy.com/2012/07/02/formosan-resolution/" }, { "id": 103, "name": "Defectors", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/defectors.jpg", "href": "http://twilightstrategy.com/2012/07/09/defectors/" }, { "id": 104, "name": "The Cambridge Five", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/the-cambridge-five.jpg", "href": "http://twilightstrategy.com/2012/07/11/the-cambridge-five/" }, { "id": 105, "name": "Special Relationship", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/special-relationship.jpg", "href": "http://twilightstrategy.com/2012/07/18/special-relationship/" }, { "id": 106, "name": "NORAD*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/norad.jpg", "href": "http://twilightstrategy.com/2012/07/25/norad/" },
    { "id": 36, "name": "Brush War", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/brush-war.jpg", "href": "http://twilightstrategy.com/2012/09/04/brush-war/" }, { "id": 37, "name": "Central America Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/central-america-scoring.jpg", "href": "http://twilightstrategy.com/2012/09/04/regions-central-america/" }, { "id": 38, "name": "Southeast Asia Scoring*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/southeast-asia-scoring.jpg", "href": "http://twilightstrategy.com/2012/09/04/regions-southeast-asia/" }, { "id": 39, "name": "Arms Race", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/arms-race.jpg", "href": "http://twilightstrategy.com/2012/09/05/arms-race/" }, { "id": 40, "name": "Cuban Missile Crisis*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/cuban-missile-crisis.jpg", "href": "http://twilightstrategy.com/2012/09/06/cuban-missile-crisis/" }, { "id": 41, "name": "Nuclear Subs*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/nuclear-subs.jpg", "href": "http://twilightstrategy.com/2012/09/10/nuclear-subs/" }, { "id": 42, "name": "Quagmire*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/quagmire.jpg", "href": "http://twilightstrategy.com/2012/09/12/quagmire/" }, { "id": 43, "name": "SALT Negotiations*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/salt-negotiations.jpg", "href": "http://twilightstrategy.com/2012/09/17/salt-negotiations/" }, { "id": 44, "name": "Bear Trap*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/bear-trap.jpg", "href": "http://twilightstrategy.com/2012/09/19/bear-trap/" }, { "id": 45, "name": "Summit", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/summit.jpg", "href": "http://twilightstrategy.com/2012/09/24/summit/" }, { "id": 46, "name": "How I Learned to Stop Worrying*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/how-i-learned-to-stop-worrying.jpg", "href": "http://twilightstrategy.com/2012/09/26/how-i-learned-to-stop-worrying/" }, { "id": 47, "name": "Junta", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/junta.jpg", "href": "http://twilightstrategy.com/2012/10/01/junta/" }, { "id": 48, "name": "Kitchen Debates*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/kitchen-debates.jpg", "href": "http://twilightstrategy.com/2012/10/03/kitchen-debates/" }, { "id": 49, "name": "Missile Envy", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/missile-envy.jpg", "href": "http://twilightstrategy.com/2012/10/08/missile-envy/" }, { "id": 50, "name": "“We Will Bury You”*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/“we-will-bury-you”.jpg", "href": "http://twilightstrategy.com/2012/10/10/we-will-bury-you/" }, { "id": 51, "name": "Brezhnev Doctrine*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/brezhnev-doctrine.jpg", "href": "http://twilightstrategy.com/2012/10/12/brezhnev-doctrine/" }, { "id": 52, "name": "Portuguese Empire Crumbles*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/portuguese-empire-crumbles.jpg", "href": "http://twilightstrategy.com/2012/10/15/portuguese-empire-crumbles/" }, { "id": 53, "name": "South African Unrest", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/south-african-unrest.jpg", "href": "http://twilightstrategy.com/2012/10/16/south-african-unrest/" }, { "id": 54, "name": "Allende*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/allende.jpg", "href": "http://twilightstrategy.com/2012/10/17/allende/" }, { "id": 55, "name": "Willy Brandt*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/willy-brandt.jpg", "href": "http://twilightstrategy.com/2012/10/18/willy-brandt/" }, { "id": 56, "name": "Muslim Revolution", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/muslim-revolution.jpg", "href": "http://twilightstrategy.com/2012/10/19/muslim-revolution/" }, { "id": 57, "name": "ABM Treaty", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/abm-treaty.jpg", "href": "http://twilightstrategy.com/2012/10/23/abm-treaty/" }, { "id": 58, "name": "Cultural Revolution*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/cultural-revolution.jpg", "href": "http://twilightstrategy.com/2012/10/24/cultural-revolution/" }, { "id": 59, "name": "Flower Power*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/flower-power.jpg", "href": "http://twilightstrategy.com/2012/10/25/flower-power/" }, { "id": 60, "name": "U2 Incident*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/u2-incident.jpg", "href": "http://twilightstrategy.com/2012/10/26/u-2-incident/" }, { "id": 61, "name": "OPEC", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/opec.jpg", "href": "http://twilightstrategy.com/2012/10/29/opec/" }, { "id": 62, "name": "“Lone Gunman”*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/“lone-gunman”.jpg", "href": "http://twilightstrategy.com/2012/10/30/lone-gunman/" }, { "id": 63, "name": "Colonial Rear Guards", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/colonial-rear-guards.jpg", "href": "http://twilightstrategy.com/2012/11/01/colonial-rear-guards/" }, { "id": 64, "name": "Panama Canal Returned*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/panama-canal-returned.jpg", "href": "http://twilightstrategy.com/2012/11/02/panama-canal-returned/" }, { "id": 65, "name": "Camp David Accords*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/camp-david-accords.jpg", "href": "http://twilightstrategy.com/2012/11/05/camp-david-accords/" }, { "id": 66, "name": "Puppet Governments*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/puppet-governments.jpg", "href": "http://twilightstrategy.com/2012/11/06/puppet-governments/" }, { "id": 67, "name": "Grain Sales to Soviets", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/grain-sales-to-soviets.jpg", "href": "http://twilightstrategy.com/2012/11/07/grain-sales-to-soviets/" }, { "id": 68, "name": "John Paul II Elected Pope*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/john-paul-ii-elected-pope.jpg", "href": "http://twilightstrategy.com/2012/11/08/john-paul-ii-elected-pope/" }, { "id": 69, "name": "Latin American Death Squads", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/latin-american-death-squads.jpg", "href": "http://twilightstrategy.com/2012/11/09/latin-american-death-squads/" }, { "id": 70, "name": "OAS Founded*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/oas-founded.jpg", "href": "http://twilightstrategy.com/2012/11/12/oas-founded/" }, { "id": 71, "name": "Nixon Plays the China Card*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/nixon-plays-the-china-card.jpg", "href": "http://twilightstrategy.com/2012/11/13/nixon-plays-the-china-card/" }, { "id": 72, "name": "Sadat Expels Soviets*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/sadat-expels-soviets.jpg", "href": "http://twilightstrategy.com/2012/11/14/sadat-expels-soviets/" }, { "id": 73, "name": "Shuttle Diplomacy", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/shuttle-diplomacy.jpg", "href": "http://twilightstrategy.com/2012/11/15/shuttle-diplomacy/" }, { "id": 74, "name": "The Voice of America", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/the-voice-of-america.jpg", "href": "http://twilightstrategy.com/2012/11/16/the-voice-of-america/" }, { "id": 75, "name": "Liberation Theology", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/liberation-theology.jpg", "href": "http://twilightstrategy.com/2012/11/19/liberation-theology/" }, { "id": 76, "name": "Ussuri River Skirmish*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/ussuri-river-skirmish.jpg", "href": "http://twilightstrategy.com/2012/11/20/ussuri-river-skirmish/" }, { "id": 77, "name": "“Ask Not What Your Country…”*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/“ask-not-what-your-country…”.jpg", "href": "http://twilightstrategy.com/2012/11/21/ask-not-what-your-country-can-do-for-you/" }, { "id": 78, "name": "Alliance for Progress*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/alliance-for-progress.jpg", "href": "http://twilightstrategy.com/2012/11/23/alliance-for-progress/" }, { "id": 79, "name": "Africa Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/africa-scoring.jpg", "href": "http://twilightstrategy.com/2012/04/11/regions-africa/" }, { "id": 80, "name": "“One Small Step…”", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/“one-small-step…”.jpg", "href": "http://twilightstrategy.com/2012/11/26/one-small-step/" }, { "id": 81, "name": "South America Scoring", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/south-america-scoring.jpg", "href": "http://twilightstrategy.com/2012/08/15/regions-south-america/" }, { "id": 107, "name": "Che", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/che.jpg", "href": "http://twilightstrategy.com/2012/11/27/che/" }, { "id": 108, "name": "Our Man in Tehran*", "picturePath": "http://twilightstrategy.files.wordpress.com/2012/01/our-man-in-tehran.jpg", "href": "http://twilightstrategy.com/2012/11/28/our-man-in-tehran/" },];

var cardsForCountries = [
{ "id": 1, "countryIds": [], "regionIds": [4] }, // Asia Scoring
{ "id": 2, "countryIds": [], "regionIds": [0] }, // Europe Scoring
{ "id": 3, "countryIds": [], "regionIds": [3] }, // Middle East Scoring
{ "id": 4, "countryIds": [], "regionIds": [] }, // Duck and Cover
{ "id": 5, "countryIds": [], "regionIds": [] }, // Five Year Plan
{ "id": 6, "countryIds": [31,36], "regionIds": [4] }, // The China Card
{ "id": 7, "countryIds": [], "regionIds": [1] }, // Socialist Governments
{ "id": 8, "countryIds": [71], "regionIds": [] }, // Fidel*
{ "id": 9, "countryIds": [37], "regionIds": [5] }, // Vietnam Revolts*
{ "id": 10, "countryIds": [7], "regionIds": [] }, // Blockade*
{ "id": 11, "countryIds": [42,43,44,45], "regionIds": [] }, // Korean War*
{ "id": 12, "countryIds": [20], "regionIds": [] }, // Romanian Abdication*
{ "id": 13, "countryIds": [21,22,23,27,28], "regionIds": [] }, // Arab-Israeli War
{ "id": 14, "countryIds": [], "regionIds": [2] }, // Comecon*
{ "id": 15, "countryIds": [27], "regionIds": [] }, // Nasser*
{ "id": 16, "countryIds": [], "regionIds": [2] }, // Warsaw Pact Formed*
{ "id": 17, "countryIds": [3], "regionIds": [] }, // De Gaulle Leads France*
{ "id": 18, "countryIds": [], "regionIds": [] }, // Captured Nazi Scientist*
{ "id": 19, "countryIds": [], "regionIds": [0] }, // Truman Doctrine*
{ "id": 20, "countryIds": [], "regionIds": [] }, // Olympic Games
{ "id": 21, "countryIds": [], "regionIds": [0] }, // NATO*
{ "id": 22, "countryIds": [15, 20, 19, 18, 16], "regionIds": [] }, // Independent Reds*
{ "id": 23, "countryIds": [], "regionIds": [1] }, // Marshall Plan*
{ "id": 24, "countryIds": [25,31,32,33,34], "regionIds": [] }, // Indo-Pakistani War
{ "id": 25, "countryIds": [], "regionIds": [] }, // Containment*
{ "id": 26, "countryIds": [], "regionIds": [] }, // CIA Created*
{ "id": 27, "countryIds": [42], "regionIds": [] }, // US/Japan Mutual Defense Pact*
{ "id": 28, "countryIds": [1,3,23], "regionIds": [] }, // Suez Crisis*
{ "id": 29, "countryIds": [], "regionIds": [2] }, // East European Unrest
{ "id": 30, "countryIds": [], "regionIds": [5,6] }, // Decolonization
{ "id": 31, "countryIds": [], "regionIds": [] }, // Red Scare/Purge
{ "id": 32, "countryIds": [], "regionIds": [] }, // UN Intervention
{ "id": 33, "countryIds": [], "regionIds": [0,3,4,6,7,8] }, // De-Stalinization*
{ "id": 34, "countryIds": [], "regionIds": [] }, // Nuclear Test Ban
{ "id": 35, "countryIds": [43], "regionIds": [] }, // Formosan Resolution*
{ "id": 36, "countryIds": [], "regionIds": [] },// Brush War 
{ "id": 37, "countryIds": [], "regionIds": [7] },// Central America Scoring 
{ "id": 38, "countryIds": [], "regionIds": [5] },// Southeast Asia Scoring* 
{ "id": 39, "countryIds": [], "regionIds": [] },// Arms Race 
{ "id": 40, "countryIds": [7,12,71], "regionIds": [] },// Cuban Missile Crisis* 
{ "id": 41, "countryIds": [], "regionIds": [] },// Nuclear Subs* 
{ "id": 42, "countryIds": [0], "regionIds": [] },// Quagmire* 
{ "id": 43, "countryIds": [], "regionIds": [] },// SALT Negotiations* 
{ "id": 44, "countryIds": [], "regionIds": [] },// Bear Trap* 
{ "id": 45, "countryIds": [], "regionIds": [] },// Summit 
{ "id": 46, "countryIds": [], "regionIds": [] },// How I Learned to Stop Worrying* 
{ "id": 47, "countryIds": [], "regionIds": [7,8] },// Junta 
{ "id": 48, "countryIds": [], "regionIds": [] },// Kitchen Debates* 
{ "id": 49, "countryIds": [], "regionIds": [] },// Missile Envy 
{ "id": 50, "countryIds": [], "regionIds": [] },// “We Will Bury You”* 
{ "id": 51, "countryIds": [], "regionIds": [] },// Brezhnev Doctrine* 
{ "id": 52, "countryIds": [55,59], "regionIds": [] },// Portuguese Empire Crumbles* 
{ "id": 53, "countryIds": [55,56,57], "regionIds": [] },// South African Unrest 
{ "id": 54, "countryIds": [80], "regionIds": [] },// Allende* 
{ "id": 55, "countryIds": [7], "regionIds": [] },// Willy Brandt* 
{ "id": 56, "countryIds": [22,24,25,26,27,28,30,63], "regionIds": [] },// Muslim Revolution 
{ "id": 57, "countryIds": [], "regionIds": [] },// ABM Treaty 
{ "id": 58, "countryIds": [], "regionIds": [4] },// Cultural Revolution* 
{ "id": 59, "countryIds": [], "regionIds": [] },// Flower Power* 
{ "id": 60, "countryIds": [], "regionIds": [] },// U2 Incident* 
{ "id": 61, "countryIds": [24,25,26,27,29,30,75], "regionIds": [] },// OPEC 
{ "id": 62, "countryIds": [], "regionIds": [] },// “Lone Gunman”* 
{ "id": 63, "countryIds": [], "regionIds": [5,6] },// Colonial Rear Guards 
{ "id": 64, "countryIds": [68, 69, 75], "regionIds": [] },// Panama Canal Returned* 
{ "id": 65, "countryIds": [23,27,28], "regionIds": [] },// Camp David Accords* 
{ "id": 66, "countryIds": [], "regionIds": [0,3,4,6,7,8] },// Puppet Governments* 
{ "id": 67, "countryIds": [], "regionIds": [] },// Grain Sales to Soviets 
{ "id": 68, "countryIds": [17], "regionIds": [] },// John Paul II Elected Pope* 
{ "id": 69, "countryIds": [], "regionIds": [7, 8] },// Latin American Death Squads 
{ "id": 70, "countryIds": [], "regionIds": [7, 8] },// OAS Founded* 
{ "id": 71, "countryIds": [], "regionIds": [4] },// Nixon Plays the China Card* 
{ "id": 72, "countryIds": [27], "regionIds": [] },// Sadat Expels Soviets* 
{ "id": 73, "countryIds": [], "regionIds": [3,4] },// Shuttle Diplomacy 
{ "id": 74, "countryIds": [], "regionIds": [3,4,6,7,8] },// The Voice of America 
{ "id": 75, "countryIds": [], "regionIds": [7] },// Liberation Theology 
{ "id": 76, "countryIds": [], "regionIds": [4] },// Ussuri River Skirmish* 
{ "id": 77, "countryIds": [], "regionIds": [] },// “Ask Not What Your Country…”* 
{ "id": 78, "countryIds": [], "regionIds": [7,8] },// Alliance for Progress* 
{ "id": 79, "countryIds": [], "regionIds": [6] },// Africa Scoring 
{ "id": 80, "countryIds": [], "regionIds": [] },// “One Small Step…” 
{ "id": 81, "countryIds": [], "regionIds": [8] },// South America Scoring 
{ "id": 103, "countryIds": [], "regionIds": [] }, // Defectors
{ "id": 104, "countryIds": [], "regionIds": [] }, // The Cambridge Five
{ "id": 105, "countryIds": [1], "regionIds": [1] }, // Special Relationship
{ "id": 106, "countryIds": [0], "regionIds": [] }, // NORAD*
{ "id": 107, "countryIds": [], "regionIds": [6,7,8] },// Che 
{ "id": 108, "countryIds": [], "regionIds": [3] },// Our Man in Tehran*
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
    new Country(80, "Chile", 241, 689),
//    new Country(81, "Peru", , ),
//    new Country(82, "Bolivia", , ),
//    new Country(83, "Ecuador", , ),
];

var cc = new CardsCountries(cards, countries, regions);

ko.applyBindings(cc);