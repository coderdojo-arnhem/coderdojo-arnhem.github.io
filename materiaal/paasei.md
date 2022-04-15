---
title: Verstopt paasei
layout: paasei
tags: [materiaal, css]
redirect_from: /materiaal/paasei.html
---

### Op deze pagina is een paasei verstopt

__Beweeg met je muis om hem te vinden.__

Kun je hem niet vinden?
TIP: rechtsonder

Heb je zelf ee website? Bijvoorbeeld uit een eerdere CoderDojo?
Dan kun je met een paar regels code ook een paasei verstoppen op je eigen site! Of meerdere!

Het belangrijkste wat je nodig hebt is het stukje CSS hieronder. Dit plaats je in je `style.css` bestand, of tussen de tags `<style>` en `</style>`.

```css
#paasei {
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 120px;
    width: 90px;
}
#paasei:hover {
    background-image: url('https://coderdojo-arnhem.github.io/static/img/ei/6.gif');
    background-repeat: no-repeat;
    background-size: contain;
}
```

In het eerste stukje staat waar je ei is verstopt. `bottom` en `right` geven de afstand aan tot de rand van het scherm (in pixels). Je kunt daar ook `top` of `left` voor gebruiken.
De hoogte en breedte van je ei worden natuurlijk bepaald door `height` en `width`.

De magie zit in het tweede stukje. Daar wordt met `:hover` aangegeven wat er gebeurt als je er met een muis overheen beweegt.
In dit geval wordt er een plaatje van een paasei als achtergrond geplaatst. In dit geval plaatje `6.gif`, maar je kunt ook 1 tot en met 5 proberen.
Je kunt ook op internet een ander plaatje zoeken, en de link daarvan gebruiken.
Of zelf een paasei tekenen (vraag maar even hulp als je niet weet hoe je die moet uploaden).

De laatste 2 regels `background-repeat: no-repeat;` en `background-size: contain;` zijn nodig om te zorgen dat je niet meerdere eieren of een half ei te zien krijgt. Maar als je `height` en `width` precies overeenkomen met de afmetingen van het plaatje, zou je deze regels ook weg kunnen laten.

Het enige wat vervolgens nog nodig is is het verborge ei toe te voegen aan de html. Daarvoor voeg je het volgende stukje toe in je html bestand. Het maakt niet uit waar je het stukje in je pagina plaatst, want de positie hadden we al in de css gezet!

```html
<div id='paasei'></div>
```
