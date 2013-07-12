﻿var cardsByStage =
    {
        "earlyWar": _.sortBy([{ "id": 1, "name": "Asia Scoring", "href": "http://twilightstrategy.com/2011/12/14/regions-asia/", "ops": 0, "description": "Presence: 3; Domination: 7; Control: 9; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!", "canRemove": false }, { "id": 2, "name": "Europe Scoring", "href": "http://twilightstrategy.com/2011/12/12/regions-europe/", "ops": 0, "description": "Presence: 3; Domination: 7; Control: Automatic Victory; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!", "canRemove": false }, { "id": 3, "name": "Middle East Scoring", "href": "http://twilightstrategy.com/2012/02/13/regions-middle-east/", "ops": 0, "description": "Presence: 3; Domination: 5; Control: 7; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!", "canRemove": false }, { "id": 4, "name": "Duck and Cover", "href": "http://twilightstrategy.com/2011/12/12/duck-and-cover/", "ops": 3, "description": "Degrade the DEFCON level by 1. The US receives VP equal to 5 minus the current DEFCON level.", "canRemove": false }, { "id": 5, "name": "Five Year Plan", "href": "http://twilightstrategy.com/2011/12/12/five-year-plan/", "ops": 3, "description": "The USSR must randomly discard a card. If the card has a US associated Event, the Event occurs immediately. If the card has a USSR associated Event or an Event applicable to both players, then the card must be discarded without triggering the Event.", "canRemove": false }, { "id": 6, "name": "The China Card", "href": "http://twilightstrategy.com/2012/10/31/the-china-card/", "ops": 4, "description": "This card begins the game with the USSR. When played, the player receives +1 Operations to the Operations value of this card if it uses all its Operations in Asia. It is passed to the opponent once played. A player receives 1 VP for holding this card at the end of Turn 10.", "canRemove": false }, { "id": 7, "name": "Socialist Governments", "href": "http://twilightstrategy.com/2011/12/13/socialist-governments/", "ops": 3, "description": "Remove a total of 3 US Influence from any countries in Western Europe (removing no more than 2 Influence per country). This Event cannot be used after the “#83 – The Iron Lady” Event has been played.", "canRemove": false }, { "id": 8, "name": "Fidel*", "href": "http://twilightstrategy.com/2011/12/14/fidel/", "ops": 2, "description": "Remove all US Influence from Cuba. USSR adds sufficient Influence in Cuba for Control.", "canRemove": true }, { "id": 9, "name": "Vietnam Revolts*", "href": "http://twilightstrategy.com/2011/12/16/vietnam-revolts/", "ops": 2, "description": "Add 2 USSR Influence to Vietnam. For the remainder of the turn, the USSR receives +1 Operations to the Operations value of a card that uses all its Operations in Southeast Asia.", "canRemove": true }, { "id": 10, "name": "Blockade*", "href": "http://twilightstrategy.com/2011/12/19/blockade/", "ops": 1, "description": "Unless the US immediately discards a card with an Operations value of 3 or more, remove all US Influence from West Germany.", "canRemove": true }, { "id": 11, "name": "Korean War*", "href": "http://twilightstrategy.com/2011/12/25/korean-war/", "ops": 2, "description": "North Korea invades South Korea. Roll a die and subtract (-1) from the die roll for every US controlled country adjacent to South Korea. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in South Korea with USSR Influence. The USSR adds 2 to its Military Operations Track.", "canRemove": true }, { "id": 12, "name": "Romanian Abdication*", "href": "http://twilightstrategy.com/2012/01/02/romanian-abdication/", "ops": 1, "description": "Remove all US Influence from Romania. The USSR adds sufficient Influence to Romania for Control.", "canRemove": true }, { "id": 13, "name": "Arab-Israeli War", "href": "http://twilightstrategy.com/2012/01/16/arab-israeli-war/", "ops": 2, "description": "Pan-Arab Coalition invades Israel. Roll a die and subtract (-1) from the die roll for Israel, if it is US controlled, and for every US controlled country adjacent to Israel. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in Israel with USSR Influence. The USSR adds 2 to its Military Operations Track. This Event cannot be used after the “#65 – Camp David Accords” Event has been played.", "canRemove": false }, { "id": 14, "name": "Comecon*", "href": "http://twilightstrategy.com/2012/01/24/comecon/", "ops": 3, "description": "Add 1 USSR Influence to each of 4 non-US controlled countries of Eastern Europe.", "canRemove": true }, { "id": 15, "name": "Nasser*", "href": "http://twilightstrategy.com/2012/02/06/nasser/", "ops": 1, "description": "Add 2 USSR Influence to Egypt. The US removes half, rounded up, of its Influence from Egypt.", "canRemove": true }, { "id": 16, "name": "Warsaw Pact Formed*", "href": "http://twilightstrategy.com/2012/02/20/warsaw-pact-formed/", "ops": 3, "description": "Remove all US influence from 4 countries in Eastern Europe or add 5 USSR Influence to any countries in Eastern Europe (adding no more than 2 Influence per country). This Event allows the “#21 – NATO” card to be played as an Event.", "canRemove": true }, { "id": 17, "name": "De Gaulle Leads France*", "href": "http://twilightstrategy.com/2012/02/24/de-gaulle-leads-france/", "ops": 3, "description": "Remove 2 US Influence from France and add 1 USSR Influence to France. This Event cancels the effect(s) of the “#21 – NATO” Event for France only.", "canRemove": true }, { "id": 18, "name": "Captured Nazi Scientist*", "href": "http://twilightstrategy.com/2012/02/27/captured-nazi-scientist/", "ops": 1, "description": "Move the Space Race Marker ahead by 1 space.", "canRemove": true }, { "id": 19, "name": "Truman Doctrine*", "href": "http://twilightstrategy.com/2012/03/02/truman-doctrine/", "ops": 1, "description": "Remove all USSR Influence from a single uncontrolled country in Europe.", "canRemove": true }, { "id": 20, "name": "Olympic Games", "href": "http://twilightstrategy.com/2012/03/12/olympic-games/", "ops": 2, "description": "This player sponsors the Olympics. The opponent must either participate or boycott. If the opponent participates, each player rolls a die and the sponsor adds 2 to their roll. The player with the highest modified die roll receives 2 VP (reroll ties). If the opponent boycotts, degrade the DEFCON level by 1 and the sponsor may conduct Operations as if they played a 4 Ops card.", "canRemove": false }, { "id": 21, "name": "NATO*", "href": "http://twilightstrategy.com/2012/03/12/nato/", "ops": 4, "description": "The USSR cannot make Coup Attempts or Realignment rolls against any US controlled countries in Europe. US controlled countries in Europe cannot be attacked by play of the “#36 – Brush War” Event. This card requires prior play of either the “#16 – Warsaw Pact Formed” or “#23 – Marshall Plan” Event(s) in order to be played as an Event.", "canRemove": true }, { "id": 22, "name": "Independent Reds*", "href": "http://twilightstrategy.com/2012/03/13/independent-reds/", "ops": 2, "description": "Add US Influence to either Yugoslavia, Romania, Bulgaria, Hungary, or Czechoslovakia so that it equals the USSR Influence in that country.", "canRemove": true }, { "id": 23, "name": "Marshall Plan*", "href": "http://twilightstrategy.com/2012/03/16/marshall-plan/", "ops": 4, "description": "Add 1 US Influence to each of any 7 non-USSR controlled countries in Western Europe. This Event allows the “#21 – NATO” card to be played as an Event.", "canRemove": true }, { "id": 24, "name": "Indo-Pakistani War", "href": "http://twilightstrategy.com/2012/03/19/indo-pakistani-war/", "ops": 2, "description": "India invades Pakistan or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (India or Pakistan). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track.", "canRemove": false }, { "id": 25, "name": "Containment*", "href": "http://twilightstrategy.com/2012/03/20/containment/", "ops": 3, "description": "All Operations cards played by the US, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card).", "canRemove": true }, { "id": 26, "name": "CIA Created*", "href": "http://twilightstrategy.com/2012/03/26/cia-created/", "ops": 1, "description": "The USSR reveals their hand of cards for this turn. The US may use the Operations value of this card to conduct Operations.", "canRemove": true }, { "id": 27, "name": "US/Japan Mutual Defense Pact*", "href": "http://twilightstrategy.com/2012/03/27/usjapan-mutual-defense-pact/", "ops": 4, "description": "The US adds sufficient Influence to Japan for Control. The USSR cannot make Coup Attempts or Realignment rolls against Japan.", "canRemove": true }, { "id": 28, "name": "Suez Crisis*", "href": "http://twilightstrategy.com/2012/03/29/suez-crisis/", "ops": 3, "description": "Remove a total of 4 US Influence from France, the United Kingdom and Israel (removing no more than 2 Influence per country).", "canRemove": true }, { "id": 29, "name": "East European Unrest", "href": "http://twilightstrategy.com/2012/04/02/east-european-unrest/", "ops": 3, "description": "Early or Mid War: Remove 1 USSR Influence from 3 countries in Eastern Europe. Late War: Remove 2 USSR Influence from 3 countries in Eastern Europe.", "canRemove": false }, { "id": 30, "name": "Decolonization", "href": "http://twilightstrategy.com/2012/04/05/decolonization/", "ops": 2, "description": "Add 1 USSR Influence to each of any 4 countries in Africa and/or Southeast Asia.", "canRemove": false }, { "id": 31, "name": "Red Scare/Purge", "href": "http://twilightstrategy.com/2012/04/23/red-scarepurge/", "ops": 4, "description": "All Operations cards played by the opponent, for the remainder of this turn, receive -1 to their Operations value (to a minimum value of 1 Operations point).", "canRemove": false }, { "id": 32, "name": "UN Intervention", "href": "http://twilightstrategy.com/2012/05/07/un-intervention/", "ops": 1, "description": "Play this card simultaneously with a card containing an opponent’s associated Event. The opponent’s associated Event is canceled but you may use the Operations value of the opponent’s card to conduct Operations. This Event cannot be played during the Headline Phase.", "canRemove": false }, { "id": 33, "name": "De-Stalinization*", "href": "http://twilightstrategy.com/2012/05/29/de-stalinization/", "ops": 3, "description": "The USSR may reallocate up to a total of 4 Influence from one or more countries to any non-US controlled countries (adding no more than 2 Influence per country).", "canRemove": true }, { "id": 34, "name": "Nuclear Test Ban", "href": "http://twilightstrategy.com/2012/06/11/nuclear-test-ban/", "ops": 4, "description": "The player receives VP equal to the current DEFCON level minus 2 then improves the DEFCON level by 2.", "canRemove": false }, { "id": 35, "name": "Formosan Resolution*", "href": "http://twilightstrategy.com/2012/07/02/formosan-resolution/", "ops": 2, "description": "If this card’s Event is in effect, Taiwan will be treated as a Battleground country, for scoring purposes only, if Taiwan is US controlled when the Asia Scoring Card is played. This Event is cancelled after the US has played the “#6 – The China Card” card.", "canRemove": true }, { "id": 103, "name": "Defectors", "href": "http://twilightstrategy.com/2012/07/09/defectors/", "ops": 2, "description": "The US may play this card during the Headline Phase in order to cancel the USSR Headline Event (including a scoring card). The canceled card is placed into the discard pile. If this card is played by the USSR during its action round, the US gains 1 VP.", "canRemove": false }, { "id": 104, "name": "The Cambridge Five", "href": "http://twilightstrategy.com/2012/07/11/the-cambridge-five/", "ops": 2, "description": "The US reveals all scoring cards in their hand of cards. The USSR player may add 1 USSR Influence to a single Region named on one of the revealed scoring cards. This card can not be played as an Event during the Late War.", "canRemove": false }, { "id": 105, "name": "Special Relationship", "href": "http://twilightstrategy.com/2012/07/18/special-relationship/", "ops": 2, "description": "Add 1 US Influence to a single country adjacent to the U.K. if the U.K. is US-controlled but NATO is not in effect. Add 2 US Influence to a single country in Western Europe, and the US gains 2 VP, if the U.K. is US-controlled and NATO is in effect.", "canRemove": false }, { "id": 106, "name": "NORAD*", "href": "http://twilightstrategy.com/2012/07/25/norad/", "ops": 3, "description": "Add 1 US Influence to a single country containing US Influence, at the end of each Action Round, if Canada is US-controlled and the DEFCON level moved to 2 during that Action Round. This Event is canceled by the “#42 – Quagmire” Event.", "canRemove": true }], "name"),
        "midWar": _.sortBy([{ "id": 36, "name": "Brush War", "href": "http://twilightstrategy.com/2012/09/04/brush-war/", "ops": 3, "description": "The player attacks any country with a stability number of 1 or 2. Roll a die and subtract (-1) from the die roll for every adjacent enemy controlled country. On a modified die roll of 3-6, the player receives 1 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 3 to its Military Operations Track.", "canRemove": false }, { "id": 37, "name": "Central America Scoring", "href": "http://twilightstrategy.com/2012/09/04/regions-central-america/", "ops": 0, "description": "Presence: 1; Domination: 3; Control: 5; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!", "canRemove": false }, { "id": 38, "name": "Southeast Asia Scoring*", "href": "http://twilightstrategy.com/2012/09/04/regions-southeast-asia/", "ops": 0, "description": "1 VP each for Control of Burma, Cambodia/Laos, Vietnam, Malaysia, Indonesia and the Philippines. 2 VP for Control of Thailand; MAY NOT BE HELD!", "canRemove": true }, { "id": 39, "name": "Arms Race", "href": "http://twilightstrategy.com/2012/09/05/arms-race/", "ops": 3, "description": "Compare each player’s value on the Military Operations Track. If the phasing player has a higher value than their opponent on the Military Operations Track, that player receives 1 VP. If the phasing player has a higher value than their opponent, and has met the “required” amount, on the Military Operations Track, that player receives 3 VP instead.", "canRemove": false }, { "id": 40, "name": "Cuban Missile Crisis*", "href": "http://twilightstrategy.com/2012/09/06/cuban-missile-crisis/", "ops": 3, "description": "Set the DEFCON level to 2. Any Coup Attempts by your opponent, for the remainder of this turn, will result in Global Thermonuclear War. Your opponent will lose the game. This card’s Event may be canceled, at any time, if the USSR removes 2 Influence from Cuba or the US removes 2 Influence from West Germany or Turkey.", "canRemove": true }, { "id": 41, "name": "Nuclear Subs*", "href": "http://twilightstrategy.com/2012/09/10/nuclear-subs/", "ops": 2, "description": "US Operations used for Coup Attempts in Battleground countries, for the remainder of this turn, do not degrade the DEFCON level. This card’s Event does not apply to any Event that would affect the DEFCON level (ex. the “#40 – Cuban Missile Crisis” Event).", "canRemove": true }, { "id": 42, "name": "Quagmire*", "href": "http://twilightstrategy.com/2012/09/12/quagmire/", "ops": 3, "description": "On the US’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each US action round until the US successfully rolls 1-4 on a die. If the US is unable to discard an Operations card, it must either play a scoring card or continue rolling the die each action round until the Event is canceled. This Event cancels the effect(s) of the “#106 – NORAD” Event (if applicable).", "canRemove": true }, { "id": 43, "name": "SALT Negotiations*", "href": "http://twilightstrategy.com/2012/09/17/salt-negotiations/", "ops": 3, "description": "Improve the DEFCON level by 2. For the remainder of the turn, both players receive -1 to all Coup Attempt rolls. The player of this card’s Event may look through the discard pile, pick any 1 non-scoring card, reveal it to their opponent and then place the drawn card into their hand.", "canRemove": true }, { "id": 44, "name": "Bear Trap*", "href": "http://twilightstrategy.com/2012/09/19/bear-trap/", "ops": 3, "description": "On the USSR’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each USSR action round until the USSR successfully rolls 1-4 on a die. If the USSR is unable to discard an Operations card, it must either play a scoring card or continue rolling the die each action round until the Event is canceled.", "canRemove": true }, { "id": 45, "name": "Summit", "href": "http://twilightstrategy.com/2012/09/24/summit/", "ops": 1, "description": "Both players roll a die. Each player receives +1 to the die roll for each Region (Europe, Asia, etc.) they Dominate or Control. The player with the highest modified die roll receives 2 VP and may degrade or improve the DEFCON level by 1 (do not reroll ties).", "canRemove": false }, { "id": 46, "name": "How I Learned to Stop Worrying*", "href": "http://twilightstrategy.com/2012/09/26/how-i-learned-to-stop-worrying/", "ops": 2, "description": "Set the DEFCON level to any level desired (1-5). The player adds 5 to its Military Operations Track.", "canRemove": true }, { "id": 47, "name": "Junta", "href": "http://twilightstrategy.com/2012/10/01/junta/", "ops": 2, "description": "Add 2 Influence to a single country in Central or South America. The player may make free Coup Attempts or Realignment rolls in either Central or South America using the Operations value of this card.", "canRemove": false }, { "id": 48, "name": "Kitchen Debates*", "href": "http://twilightstrategy.com/2012/10/03/kitchen-debates/", "ops": 1, "description": "If the US controls more Battleground countries than the USSR, the US player uses this Event to poke their opponent in the chest and receive 2 VP!", "canRemove": true }, { "id": 49, "name": "Missile Envy", "href": "http://twilightstrategy.com/2012/10/08/missile-envy/", "ops": 2, "description": "Exchange this card for your opponent’s highest value Operations card. If 2 or more cards are tied, opponent chooses. If the exchanged card contains an Event applicable to yourself or both players, it occurs immediately. If it contains an opponent’s Event, use the Operations value (no Event). The opponent must use this card for Operations during their next action round.", "canRemove": false }, { "id": 50, "name": "“We Will Bury You”*", "href": "http://twilightstrategy.com/2012/10/10/we-will-bury-you/", "ops": 4, "description": "Degrade the DEFCON level by 1. Unless the #32 UN Intervention card is played as an Event on the US’s next action round, the USSR receives 3 VP.", "canRemove": true }, { "id": 51, "name": "Brezhnev Doctrine*", "href": "http://twilightstrategy.com/2012/10/12/brezhnev-doctrine/", "ops": 3, "description": "All Operations cards played by the USSR, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card).", "canRemove": true }, { "id": 52, "name": "Portuguese Empire Crumbles*", "href": "http://twilightstrategy.com/2012/10/15/portuguese-empire-crumbles/", "ops": 2, "description": "Add 2 USSR Influence to Angola and the SE African States.", "canRemove": true }, { "id": 53, "name": "South African Unrest", "href": "http://twilightstrategy.com/2012/10/16/south-african-unrest/", "ops": 2, "description": "The USSR either adds 2 Influence to South Africa or adds 1 Influence to South Africa and 2 Influence to a single country adjacent to South Africa.", "canRemove": false }, { "id": 54, "name": "Allende*", "href": "http://twilightstrategy.com/2012/10/17/allende/", "ops": 1, "description": "Add 2 USSR Influence to Chile.", "canRemove": true }, { "id": 55, "name": "Willy Brandt*", "href": "http://twilightstrategy.com/2012/10/18/willy-brandt/", "ops": 2, "description": "The USSR receives 1 VP and adds 1 Influence to West Germany. This Event cancels the effect(s) of the “#21 – NATO” Event for West Germany only. This Event is prevented / canceled by the “#96 – Tear Down this Wall” Event.", "canRemove": true }, { "id": 56, "name": "Muslim Revolution", "href": "http://twilightstrategy.com/2012/10/19/muslim-revolution/", "ops": 4, "description": "Remove all US Influence from 2 of the following countries: Sudan, Iran, Iraq, Egypt, Libya, Saudi Arabia, Syria, Jordan. This Event cannot be used after the “#110 – AWACS Sale to Saudis” Event has been played.", "canRemove": false }, { "id": 57, "name": "ABM Treaty", "href": "http://twilightstrategy.com/2012/10/23/abm-treaty/", "ops": 4, "description": "Improve the DEFCON level by 1 and then conduct Operations using the Operations value of this card.", "canRemove": false }, { "id": 58, "name": "Cultural Revolution*", "href": "http://twilightstrategy.com/2012/10/24/cultural-revolution/", "ops": 3, "description": "If the US has the “#6 – The China Card” card, the US must give the card to the USSR (face up and available to be played). If the USSR already has “#6 – The China Card” card, the USSR receives 1 VP.", "canRemove": true }, { "id": 59, "name": "Flower Power*", "href": "http://twilightstrategy.com/2012/10/25/flower-power/", "ops": 4, "description": "The USSR receives 2 VP for every US played “War” card (Arab-Israeli War, Korean War, Brush War, Indo-Pakistani War, Iran-Iraq War), used for Operations or an Event, after this card is played. This Event is prevented / canceled by the “#97 – ‘An Evil Empire’” Event.", "canRemove": true }, { "id": 60, "name": "U2 Incident*", "href": "http://twilightstrategy.com/2012/10/26/u-2-incident/", "ops": 3, "description": "The USSR receives 1 VP. If the “#32 – UN Intervention” Event is played later this turn, either by the US or the USSR, the USSR receives an additional 1 VP.", "canRemove": true }, { "id": 61, "name": "OPEC", "href": "http://twilightstrategy.com/2012/10/29/opec/", "ops": 3, "description": "The USSR receives 1 VP for Control of each of the following countries: Egypt, Iran, Libya, Saudi Arabia, Iraq, Gulf States, Venezuela. This Event cannot be used after the “#86 – North Sea Oil” Event has been played.", "canRemove": false }, { "id": 62, "name": "“Lone Gunman”*", "href": "http://twilightstrategy.com/2012/10/30/lone-gunman/", "ops": 1, "description": "The US reveals their hand of cards for this turn. The USSR may use the Operations value of this card to conduct Operations.", "canRemove": true }, { "id": 63, "name": "Colonial Rear Guards", "href": "http://twilightstrategy.com/2012/11/01/colonial-rear-guards/", "ops": 2, "description": "Add 1 US Influence to each of any 4 countries in Africa and/or Southeast Asia.", "canRemove": false }, { "id": 64, "name": "Panama Canal Returned*", "href": "http://twilightstrategy.com/2012/11/02/panama-canal-returned/", "ops": 1, "description": "Add 1 US Influence to Panama, Costa Rica and Venezuela.", "canRemove": true }, { "id": 65, "name": "Camp David Accords*", "href": "http://twilightstrategy.com/2012/11/05/camp-david-accords/", "ops": 2, "description": "The US receives 1 VP and adds 1 Influence to Israel, Jordan and Egypt. This Event prevents the “#13 – Arab-Israeli War” card from being played as an Event.", "canRemove": true }, { "id": 66, "name": "Puppet Governments*", "href": "http://twilightstrategy.com/2012/11/06/puppet-governments/", "ops": 2, "description": "The US may add 1 Influence to 3 countries that do not contain Influence from either the US or USSR.", "canRemove": true }, { "id": 67, "name": "Grain Sales to Soviets", "href": "http://twilightstrategy.com/2012/11/07/grain-sales-to-soviets/", "ops": 2, "description": "The US randomly selects 1 card from the USSR’s hand (if available). The US must either play the card or return it to the USSR. If the card is returned, or the USSR has no cards, the US may use the Operations value of this card to conduct Operations.", "canRemove": false }, { "id": 68, "name": "John Paul II Elected Pope*", "href": "http://twilightstrategy.com/2012/11/08/john-paul-ii-elected-pope/", "ops": 2, "description": "Remove 2 USSR Influence from Poland and add 1 US Influence to Poland. This Event allows the “#101 – Solidarity” card to be played as an Event.", "canRemove": true }, { "id": 69, "name": "Latin American Death Squads", "href": "http://twilightstrategy.com/2012/11/09/latin-american-death-squads/", "ops": 2, "description": "All of the phasing player’s Coup Attempts in Central and South America, for the remainder of this turn, receive +1 to their die roll. All of the opponent’s Coup Attempts in Central and South America, for the remainder of this turn, receive -1 to their die roll.", "canRemove": false }, { "id": 70, "name": "OAS Founded*", "href": "http://twilightstrategy.com/2012/11/12/oas-founded/", "ops": 1, "description": "Add a total of 2 US Influence to any countries in Central or South America.", "canRemove": true }, { "id": 71, "name": "Nixon Plays the China Card*", "href": "http://twilightstrategy.com/2012/11/13/nixon-plays-the-china-card/", "ops": 2, "description": "If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face down and unavailable for immediate play). If the US already has the “#6 – The China Card” card, the US receives 2 VP.", "canRemove": true }, { "id": 72, "name": "Sadat Expels Soviets*", "href": "http://twilightstrategy.com/2012/11/14/sadat-expels-soviets/", "ops": 1, "description": "Remove all USSR Influence from Egypt and add 1 US Influence to Egypt.", "canRemove": true }, { "id": 73, "name": "Shuttle Diplomacy", "href": "http://twilightstrategy.com/2012/11/15/shuttle-diplomacy/", "ops": 3, "description": "If this card’s Event is in effect, subtract (-1) a Battleground country from the USSR total and then discard this card during the next scoring of the Middle East or Asia (which ever comes first).", "canRemove": false }, { "id": 74, "name": "The Voice of America", "href": "http://twilightstrategy.com/2012/11/16/the-voice-of-america/", "ops": 2, "description": "Remove 4 USSR Influence from any countries NOT in Europe (removing no more than 2 Influence per country).", "canRemove": false }, { "id": 75, "name": "Liberation Theology", "href": "http://twilightstrategy.com/2012/11/19/liberation-theology/", "ops": 2, "description": "Add a total of 3 USSR Influence to any countries in Central America (adding no more than 2 Influence per country).", "canRemove": false }, { "id": 76, "name": "Ussuri River Skirmish*", "href": "http://twilightstrategy.com/2012/11/20/ussuri-river-skirmish/", "ops": 3, "description": "If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face up and available for play). If the US already has the “#6 – The China Card” card, add a total of 4 US Influence to any countries in Asia (adding no more than 2 Influence per country).", "canRemove": true }, { "id": 77, "name": "“Ask Not What Your Country…”*", "href": "http://twilightstrategy.com/2012/11/21/ask-not-what-your-country-can-do-for-you/", "ops": 3, "description": "The US may discard up to their entire hand of cards (including scoring cards) to the discard pile and draw replacements from the draw pile. The number of cards to be discarded must be decided before drawing any replacement cards from the draw pile.", "canRemove": true }, { "id": 78, "name": "Alliance for Progress*", "href": "http://twilightstrategy.com/2012/11/23/alliance-for-progress/", "ops": 3, "description": "The US receives 1 VP for each US controlled Battleground country in Central and South America.", "canRemove": true }, { "id": 79, "name": "Africa Scoring", "href": "http://twilightstrategy.com/2012/04/11/regions-africa/", "ops": 0, "description": "Presence: 1; Domination: 4; Control: 6; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!", "canRemove": false }, { "id": 80, "name": "“One Small Step…”", "href": "http://twilightstrategy.com/2012/11/26/one-small-step/", "ops": 2, "description": "If you are behind on the Space Race Track, the player uses this Event to move their marker 2 spaces forward on the Space Race Track. The player receives VP only from the final space moved into.", "canRemove": false }, { "id": 81, "name": "South America Scoring", "href": "http://twilightstrategy.com/2012/08/15/regions-south-america/", "ops": 0, "description": "Presence: 2; Domination: 5; Control: 6; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!", "canRemove": false }, { "id": 107, "name": "Che", "href": "http://twilightstrategy.com/2012/11/27/che/", "ops": 3, "description": "The USSR may perform a Coup Attempt, using this card’s Operations value, against a non-Battleground country in Central America, South America or Africa. The USSR may perform a second Coup Attempt, against a different non-Battleground country in Central America, South America or Africa, if the first Coup Attempt removed any US Influence from the target country.", "canRemove": false }, { "id": 108, "name": "Our Man in Tehran*", "href": "http://twilightstrategy.com/2012/11/28/our-man-in-tehran/", "ops": 2, "description": "If the US controls at least one Middle East country, the US player uses this Event to draw the top 5 cards from the draw pile. The US may discard any or all of the drawn cards, after revealing the discarded card(s) to the USSR player, without triggering the Event(s). Any remaining drawn cards are returned to the draw pile and the draw pile is reshuffled.", "canRemove": true }], "name"),
        "lateWar": _.sortBy([{ "id": 82, "name": "Iranian Hostage Crisis*", "href": "http://twilightstrategy.com/2012/11/30/iranian-hostage-crisis/", "ops": 3, "description": "Remove all US Influence and add 2 USSR Influence to Iran. This card’s Event requires the US to discard 2 cards, instead of 1 card, if the “#92 – Terrorism” Event is played.", "canRemove": true }, { "id": 83, "name": "The Iron Lady*", "href": "http://twilightstrategy.com/2012/12/03/the-iron-lady/", "ops": 3, "description": "Add 1 USSR Influence to Argentina and remove all USSR Influence from the United Kingdom. The US receives 1 VP. This Event prevents the “#7 – Socialist Governments” card from being played as an Event.", "canRemove": true }, { "id": 84, "name": "Reagan Bombs Libya*", "href": "http://twilightstrategy.com/2012/12/04/reagan-bombs-libya/", "ops": 2, "description": "The US receives 1 VP for every 2 USSR Influence in Libya.", "canRemove": true }, { "id": 85, "name": "Star Wars*", "href": "http://twilightstrategy.com/2012/12/05/star-wars/", "ops": 2, "description": "If the US is ahead on the Space Race Track, the US player uses this Event to look through the discard pile, pick any 1 non-scoring card and play it immediately as an Event.", "canRemove": true }, { "id": 86, "name": "North Sea Oil*", "href": "http://twilightstrategy.com/2012/12/06/north-sea-oil/", "ops": 3, "description": "The US may play 8 cards (in 8 action rounds) for this turn only. This Event prevents the “#61 – OPEC” card from being played as an Event.", "canRemove": true }, { "id": 87, "name": "The Reformer*", "href": "http://twilightstrategy.com/2012/12/07/the-reformer/", "ops": 3, "description": "Add 4 USSR Influence to Europe (adding no more than 2 Influence per country). If the USSR is ahead of the US in VP, 6 Influence may be added to Europe instead. The USSR may no longer make Coup Attempts in Europe.", "canRemove": true }, { "id": 88, "name": "Marine Barracks Bombing*", "href": "http://twilightstrategy.com/2012/12/10/marine-barracks-bombing/", "ops": 2, "description": "Remove all US Influence in Lebanon and remove a total of 2 US Influence from any countries in the Middle East.", "canRemove": true }, { "id": 89, "name": "Soviets Shoot Down KAL-007*", "href": "http://twilightstrategy.com/2012/12/11/soviets-shoot-down-kal-007/", "ops": 4, "description": "Degrade the DEFCON level by 1 and the US receives 2 VP. The US may place influence or make Realignment rolls, using this card, if South Korea is US controlled.", "canRemove": true }, { "id": 90, "name": "Glasnost*", "href": "http://twilightstrategy.com/2012/12/12/glasnost/", "ops": 4, "description": "Improve the DEFCON level by 1 and the USSR receives 2 VP. The USSR may make Realignment rolls or add Influence, using this card, if the “#87 – The Reformer” Event has already been played.", "canRemove": true }, { "id": 91, "name": "Ortega Elected in Nicaragua*", "href": "http://twilightstrategy.com/2012/12/13/ortega-elected-in-nicaragua/", "ops": 2, "description": "Remove all US Influence from Nicaragua. The USSR may make a free Coup Attempt, using this card’s Operations value, in a country adjacent to Nicaragua.", "canRemove": true }, { "id": 92, "name": "Terrorism", "href": "http://twilightstrategy.com/2012/12/14/terrorism/", "ops": 2, "description": "The player’s opponent must randomly discard 1 card from their hand. If the “#82 – Iranian Hostage Crisis” Event has already been played, a US player (if applicable) must randomly discard 2 cards from their hand.", "canRemove": false }, { "id": 93, "name": "Iran-Contra Scandal*", "href": "http://twilightstrategy.com/2012/12/17/iran-contra-scandal/", "ops": 2, "description": "All US Realignment rolls, for the remainder of this turn, receive -1 to their die roll.", "canRemove": true }, { "id": 94, "name": "Chernobyl*", "href": "http://twilightstrategy.com/2012/12/18/chernobyl/", "ops": 3, "description": "The US must designate a single Region (Europe, Asia, etc.) that, for the remainder of the turn, the USSR cannot add Influence to using Operations points.", "canRemove": true }, { "id": 95, "name": "Latin American Debt Crisis", "href": "http://twilightstrategy.com/2012/12/19/latin-american-debt-crisis/", "ops": 2, "description": "The US must immediately discard a card with an Operations value of 3 or more or the USSR may double the amount of USSR Influence in 2 countries in South America.", "canRemove": false }, { "id": 96, "name": "Tear Down this Wall*", "href": "http://twilightstrategy.com/2012/12/20/tear-down-this-wall/", "ops": 3, "description": "Add 3 US Influence to East Germany. The US may make free Coup Attempts or Realignment rolls in Europe using the Operations value of this card. This Event prevents / cancels the effect(s) of the “#55 – Willy Brandt” Event.", "canRemove": true }, { "id": 97, "name": "“An Evil Empire”*", "href": "http://twilightstrategy.com/2012/12/21/an-evil-empire/", "ops": 3, "description": "The US receives 1 VP. This Event prevents / cancels the effect(s) of the “#59 – Flower Power” Event.", "canRemove": true }, { "id": 98, "name": "Aldrich Ames Remix*", "href": "http://twilightstrategy.com/2013/01/03/aldrich-ames-remix/", "ops": 3, "description": "The US reveals their hand of cards, face-up, for the remainder of the turn and the USSR discards a card from the US hand.", "canRemove": true }, { "id": 99, "name": "Pershing II Deployed*", "href": "http://twilightstrategy.com/2013/01/04/pershing-ii-deployed/", "ops": 3, "description": "The USSR receives 1 VP. Remove 1 US Influence from any 3 countries in Western Europe.", "canRemove": true }, { "id": 100, "name": "Wargames*", "href": "http://twilightstrategy.com/2013/01/07/wargames/", "ops": 4, "description": "If the DEFCON level is 2, the player may immediately end the game after giving their opponent 6 VP. How about a nice game of chess?", "canRemove": true }, { "id": 101, "name": "Solidarity*", "href": "http://twilightstrategy.com/2013/01/08/solidarity/", "ops": 2, "description": "Add 3 US Influence to Poland. This card requires prior play of the “#68 – John Paul II Elected Pope” Event in order to be played as an Event.", "canRemove": true }, { "id": 102, "name": "Iran-Iraq War*", "href": "http://twilightstrategy.com/2013/01/09/iran-iraq-war/", "ops": 2, "description": "Iran invades Iraq or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (Iran or Iraq). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track.", "canRemove": true }, { "id": 109, "name": "Yuri and Samantha*", "href": "http://twilightstrategy.com/2013/01/10/yuri-and-samantha/", "ops": 2, "description": "The USSR receives 1 VP for each US Coup Attempt performed during the remainder of the Turn.", "canRemove": true }, { "id": 110, "name": "AWACS Sale to Saudis*", "href": "http://twilightstrategy.com/2013/01/14/awacs-sale-to-saudis/", "ops": 3, "description": "Add 2 US Influence to Saudi Arabia. This Event prevents the “#56 – Muslim Revolution” card from being played as an Event.", "canRemove": true }], "name")
    };