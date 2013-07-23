TS-web-cards-helper is a lightway web app, that helps to play boardgame Twilight Struggle.
===================
The Twilight struggle game itself is ranked first in world wide ranking http://boardgamegeek.com/browse/boardgame/page/1?sort=rank

Current version is hosted at  
http://angelo.hostingasp.pl/map.html and  
http://angelo.hostingasp.pl/index.html (its playable but under development)

## Issues
- Sad, but it displays correctly only on Chrome.
- map.html - htmls are by default cached. Even if I put meta tags about NOT caching, I don't own proxies between server and browser. And I feel my solutions is not perfect due to [Cache Invalidation](http://martinfowler.com/bliki/TwoHardThings.html). I suggest hard reloading (cache empty) when in doubt.

## Main reason for developing this app

- there are 110 cards in game, if you see which cards have already been played, you are in better position
- many cards target specific countries. So it will be nice to reverse it and to have a fast overview of all possibble cards targeting my country

## Where it can be used?
I usually play online using vassal engine.

## Technologies used
* JavaScript
* KnockoutJS
* TypeScript (you need [Web Essentails 2012](http://visualstudiogallery.msdn.microsoft.com/07d54d12-7133-4e15-becb-6f451ea3bea6) to generate .js when saving .ts files)
* C# (only for offline data parsing from other pages and converting to JSON)
* (probably will evolve towards Single Page Application).

## Contributors
http://twilightstrategy.com - for providing great website about the game. I am parsing knowlegde already entered there.

I need some help. Not only developers, there is also some data that have to be manually entered based on the knowlegde of board game.

## Screenshots

* 2013-05-12:  
![Card border shows probability of card appearance](https://raw.github.com/kmorcinek/TS-web-cards-helper/master/screenshots/TS_card_border_shows_the_probability_of_card.JPG)
  
  Example of Iran. Cards with:
  * red border are "Sure to be in somebody's hand now"
  * no border are in the deck
  * blue border are "Will come soon, but not in the deck yet" - if you are in early war this means cards after reshaftle and Mid War cards, in Mid Game this means cards after second reshaffle and Late War.
  
* 2013-05-11:
![Directly connected cards are first](https://raw.github.com/kmorcinek/TS-web-cards-helper/master/screenshots/TS_directly_connected_cards_are_first.JPG)
  Cards that are connected directly to a country (UK in this example) are shown first before cards connected with Region (Europe).
  
* 2013-05-09:
![All countries and cards](https://raw.github.com/kmorcinek/TS-web-cards-helper/master/screenshots/All_countries_and_cards_Cards_on_the_map.JPG)
  All countries and cards are added. Connected cards are displayed on the map (not next to map like before), saves space.

* 2013-04-25:
![Connected cards as a pictures](https://raw.github.com/kmorcinek/TS-web-cards-helper/master/screenshots/Cards_as_a_pictures.JPG)
  Hover over a country and you will see cards that are somehow connected to this country.

* 2013-07-23:

![Undo button](https://raw.github.com/kmorcinek/TS-web-cards-helper/master/screenshots/Undo_button.PNG)
  
  Undo a last card action you did (Discard or Remove).

## Contact

krzysztof.morcinek@gmail.com
