---
title: "Lopen met JavaScript"
layout: toc
class: stappenplan
tags: [materiaal, javascript]
redirect_from: /materiaal/javascript_lopen.html
---
* Inhoudsopgave
{:toc}

Lopen met JavaScript
-------------------------

In Scratch heb je waarschijnlijk wel eens gemaakt dat je met de toetsen op je toetsenbord een sprite kunt laten bewegen.

Maar kan dat ook met javascript? En hoe dan?

Dat ga je in dit korte lesje leren.

Open een teksteditor zoals <b>Kladblok</b>.

Begin met de basis tags voor een html pagina:

```html
<html>
  <head>
    <title>Lopen in HTML</title>
    <style>
    </style>
    <script>
    </script>
  </head>
  <body>
  </body>
</html>
```

De sprite
---------

Voor de sprite hebben we een plaatje nodig.

Kies bijvoorbeeld &eacute;&eacute;n van deze plaatjes:

<img src="/static/img/karakters/bird.png" style="width:80px;min-width:80px;float:left;margin-right:1em"> <code style='line-height:46px;'>https://coderdojo-arnhem.github.io/static/img/karakters/bird.png </code>

<img src="/static/img/karakters/dog.png" style="width:80px;min-width:80px;float:left;margin-right:1em"> <code style='line-height:46px;'>https://coderdojo-arnhem.github.io/static/img/karakters/dog.png </code>

<img src="/static/img/karakters/shark.png" style="width:80px;min-width:80px;float:left;margin-right:1em"> <code style='line-height:46px;'>https://coderdojo-arnhem.github.io/static/img/karakters/shark.png </code>

<img src="/static/img/karakters/jumping.png" style="width:80px;min-width:80px;float:left;margin-right:1em"> <code style='line-height:46px;'>https://coderdojo-arnhem.github.io/static/img/karakters/jumping.png </code>

<img src="/static/img/karakters/female2.png" style="width:80px;min-width:80px;float:left;margin-right:1em"> <code style='line-height:46px;'>https://coderdojo-arnhem.github.io/static/img/karakters/female2.png </code>

<img src="/static/img/karakters/robot.png" style="width:80px;min-width:80px;float:left;margin-right:1em"> <code style='line-height:46px;'>https://coderdojo-arnhem.github.io/static/img/karakters/robot.png </code>

<img src="/static/img/karakters/robot_body.png" style="width:80px;min-width:80px;float:left;margin-right:1em"> <code style='line-height:46px;'>https://coderdojo-arnhem.github.io/static/img/karakters/robot_body.png </code>

<img src="/static/img/karakters/cake.png" style="width:80px;min-width:80px;float:left;margin-right:1em"> <code style='line-height:46px;'>https://coderdojo-arnhem.github.io/static/img/karakters/cake.png </code>

Je kunt ook zelf een plaatje op internet opzoeken. Klik dan met je rechter muisknop op het plaatje en kies voor `Adres van afbeelding kopi&euml;ren`.

Zet de link naar het plaatje in een img tag tussen `<body>` en `</body>` met de volgende code:

```html
<img src="https://coderdojo-arnhem.github.io/static/img/karakters/jumping.png" id="sprite" alt="">
```

Als je een ander plaatje hebt uitgezocht, vervang je de link door de link van jouw plaatje.

Om de positie en grootte van het plaatje te bepalen hebben we nog een stukje CSS nodig.
Zet daarvoor de volgende CSS code tussen `<style>` en `</style>`:

```css
position: absolute;
top: 50%;
left: 50%;
width: 10%;
```

Sla het bestand op als `lopen.html`. (Of een andere naam met .html, maar let let op dat je bij `Opslaan als..` kiest voor `Alle bestanden (*.*)` en niet `*.txt`).

Open het bestand met een browser, en kijk of je sprite mooi in het midden van de pagina staat.

Zo niet, dan kun je de top, left of width aanpassen (sla je code dan opnieuw op en herlaad de pagina in de browser).

Het bewegen
-----------

Voor het bewegen gaan we een javascript functie toevoegen die we 'toets' gaan noemen.

Als op het toetsenbord een toets (of 'key' in het Engels) wordt ingedrukt, heet dat een 'event'. Dat 'event' kunnen we in een functie meegeven door het aan de `body` tag die we al hebben, op de volgende manier:

```html
<body onkeydown='toets(event)'>
```

De javascipt functie gaan we maken tussen de tags `<script>` en `</script>`.

We beginnen met de naam van de functie, en een `{` om het begin van het code blok aan te geven.

```javascript
function toets(e){
```

daarna een regel met een variabele om makkelijker naar onze sprite te kunnen verwijzen:

```javascript
var sprite = document.getElementById('sprite');
```

Om de sprite te kunnen besturen moeten we eerst weten wat de huidige positie is. Dat halen we op met deze regel code:

```javascript
var positie = sprite.getBoundingClientRect();
```

Laten we beginnen met het naar rechts bewegen met 'pijltje naar rechts'.

In CSS is left hetzelfde als x, wat je waarschijnlijk nog kent uit Scratch.

We gebruiken een if-blok waarin we eerst kijken welke key aan het event `e` is gekoppeld. Voor naar rechts is dat de key `ArrowRight`:

```javascript
if( e.key == 'ArrowRight'){
	sprite.style.left = (positie.left + 10) + 'px';
}
```

`sprite.style.left` is hoe ver de sprite van de linker rand af terecht komen. `positie.left` is hoe ver hij nu van de rand af is. Zoals je ziet voegen we daar 10 aan toe. En we eindigen met `px` om aan te geven dat we met pixels werken.

Naar beneden doen we op eenzelfde manier, maar dan vervangen we `left` door `top`:

```javascript
if( e.key == 'ArrowDown'){
	sprite.style.top = (positie.top + 10) + 'px';
}
```

In Scratch was je misschien gewend met y van onder naar boven te bewegen, maar in html/css gaat het van boven naar beneden.

Naar links en boven gaat op dezelfde manier, maar dan -10 in plaats van +10:

```javascript
if( e.key == 'ArrowLeft'){
	sprite.style.left = (positie.left - 10) + 'px';
}

if( e.key == 'ArrowUp'){
	sprite.style.top = (positie.top - 10) + 'px';
}
```

Sluit de functie af met weer een `}`.

Sla je code op en test of het werkt.

Gaat het bewegen goed?

Merk je ook dat de sprite uit het scherm verdwijnt als je te ver naar links of naar boven beweegt?
Om dat te voorkomen kunnen we een extra controle aan de if toevoegen bij naar links en omhoog.

Voeg `&& positie.left > 0` toe achter `e.key=='ArrowLeft'`
en `&& positie.top>0` achter `e.key=='ArrowUp'`.

Alles samen
-----------

Voor als het nog niet is gelukt hier nog een keer de totale code.

```html
<html>
  <head>
	<title>Lopen in HTML</title>
	<style>
		#sprite {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 10%;
		}
	</style>
	<script>
		function toets(e){
			var sprite = document.getElementById('sprite');

			// bepaal positie van het plaatje
			var positie = sprite.getBoundingClientRect();

			if(e.key=='ArrowUp' && positie.top>0){
				sprite.style.top = (positie.top - 10) + 'px';
			}
			if(e.key=='ArrowDown'){
				sprite.style.top = (positie.top + 10) + 'px';
			}
			if(e.key=='ArrowRight'){
				// left is hetzelfde als x positie
				sprite.style.left = (positie.left + 10) + 'px';
			}
			if(e.key=='ArrowLeft' && positie.left>0){
				sprite.style.left = (positie.left - 10) + 'px';
			}
		}		
	</script>
  </head>
  <body onkeydown='toets(event)'>
	<img src="https://coderdojo-arnhem.github.io/static/img/karakters/jumping.png" id="sprite" alt="">
  </body>
</html>
```