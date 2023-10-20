---
title: "Vallende blaadjes in JavaScript"
layout: toc
class: stappenplan
tags: [materiaal, javascript]
redirect_from: /materiaal/javascript_herfstblaadjes.html
---
* Inhoudsopgave
{:toc}

Vallende blaadjes in JavaScript
-------------------------

![Blad](/static/img/herfstblad.png)

Als het herfst is vallen de blaadjes van de bomen.
Dat kun je in Scratch ook maken, of op een html website met JavaScript.
In deze les gaan we dat laatste doen.

Voordat je een html-pagina gaat maken moet je bedenken met wat voor editor je gaat werken.
In eerdere CoderDojos hebben we verschillende editors gebruikt, zoals <a href="https://www.webtinq.nl" target="_blank">WebTinq</a> en <a href="https://trinket.io" target="_blank">trinket</a>.
Als je een bepaalde editor gewend bent mag je die gebruiken, maar het makkelijkst is misschien wel om een eenvoudige teksteditor zoals <b>kladblok/notepad</b> te gebruiken.

We gaan werken met 3 bestanden. Een html bestand `index.html` als basis, een css bestand `style.css` voor de opmaak en een javascriptbestand `javascript.js` voor de code.

Die gaan we bij de volgende stap aanmaken (als ze niet al standaard in je editor zitten).

Het eerste blaadje
------------------

Kopieer de volgende html code in je editor

```html
<html>
  <head>
    <title>Herfst</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src='javascript.js'></script>
  </head>
  <body>
  </body>
</html>
```

en sla het bestand op als ```index.html```. (Let op dat je bij `Opslaan als..` kiest voor `Alle bestanden (*.*)` en niet `*.txt`).

{:class="note"}
Hoe het bestand heet is niet zo belangrijk, je mag het ook `herfst.html` noemen.

Voor het blad hebben we een plaatje nodig.
Je kunt bijvoorbeeld een van deze gebruiken:

<img src="http://www.clipartqueen.com/image-files/red-lobed-fall-clipart-leaf.png" style="min-width:40px;width: 40px;float:left;margin-right:1em"> <code style='line-height:46px;'>http://www.clipartqueen.com/image-files/red-lobed-fall-clipart-leaf.png </code>

<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/125707/leaf.svg" style="min-width:40px;width: 40px;float:left;margin-right: 1em"> <code style='line-height:46px;'>https://s3-us-west-2.amazonaws.com/s.cdpn.io/125707/leaf.svg </code>

<img src="https://cdn.icon-icons.com/icons2/2199/PNG/512/brown_leaf_icon_133976.png" style="min-width:40px;width: 40px;float:left;margin-right: 1em"> <code style='line-height:46px;'>https://cdn.icon-icons.com/icons2/2199/PNG/512/brown_leaf_icon_133976.png </code>

<img src="https://cdn.icon-icons.com/icons2/1446/PNG/512/22338mapleleaf_98750.png" style="min-width:40px;width: 40px;float:left;margin-right: 1em"> <code style='line-height:46px;'>https://cdn.icon-icons.com/icons2/1446/PNG/512/22338mapleleaf_98750.png </code>

Maar je kunt ook op internet zelf naar een leuk plaatje van een blad zoeken.

Zet het plaatje in ```index.html``` tussen ```<body>``` en ```</body>``` met de volgende code:

```html
  <img src="http://www.clipartqueen.com/image-files/red-lobed-fall-clipart-leaf.png" alt="" class="blad" id="blad">
```

Als je een ander plaatje hebt uitgezocht, vervang je de link door de link van jouw plaatje.

Zet de volgende code in ```style.css```:

```css
.blad{
    position: absolute;
    width: 40px;
    top: 0px;
}
#blad{
    left: 50%;
    transition: top 5s ease-in;
}
```

Hiermee wordt het blad bovenin in het midden van de pagina geplaatst.

Op de regel met `transition` kun je aanpassen hoe snel je blaadje moet gaan vallen. Je ziet daar `5s` staan, dat betekent dat het 5 seconden duurt om te vallen. Dat kun je dus sneller of langzamer laten gaan.

{:class="note"}
Misschien vraag je je af waarom er een deel in ```.blad``` staat en een deel in ```#blad```, want je zult merken dat het ook werkt als je alles in ```.blad``` zet of alles in ```#blad```.
Maar ```.blad``` is een `class` die voor alle blaaadjes geldt, en ```#blad``` is een `id` voor 1 blaadje. Zo is het handiger voor verderop.

Maar het blad begint nog niet met vallen. We moeten nog met javascript aangeven waar hij heen moet vallen.

Zet de volgende code in ```javascript.js```:

```javascript
var breedte = window.innerWidth;
var hoogte = window.innerHeight;

window.onload = function(){
    var blad = document.getElementById('blad');
    blad.style.top = hoogte;
}
```

In de variabele ``hoogte`` wordt de hoogte van het venster opgeslagen.
Omdat de hoogte van boven naar beneden wordt geteld, is ``hoogte`` dus eigenlijk de onderkant van het scherm.
In de code staat dus dat het blaadje begint met vallen als het venster is geladen, en dan naar ``hoogte`` toe gaat.

Sla alle bestanden op en open `index.html` in je browser om te kijken of het werkt.

Je zult zien dat het blaadje te ver doorschiet, en onder het venster terecht komt.
Daarom laten we hem iets eerder stoppen, door de hoogte van het blaadje van de eindpositie af te halen.
Verander de code zodat je dit krijgt:

```javascript
    blad.style.top = hoogte - blad.height;
```

Herlaad de pagina om te kijken of het nu goed is.

{:class="note"}
<b>Tip:</b> bij het herladen van een pagina wordt nog wel eens een oud css of javascript bestand gebruikt, wat de browser nog in zijn geheugen heeft. Om volledig te herladen kun je `Ctrl+F5` gebruiken.

Laten kantelen
-------------

Het blaadje valt wat saai zo recht naar beneden.
Laten we hem onderweg wat kantelen!

Voeg de volgende regel toe in ```javascript.js```, bij de regel waarmee we hebben aangegeven waar het blad moet stoppen met vallen:

```javascript
  blad.style.transform = 'rotate(360deg)';
```

En voeg het toe aan de ```transition``` regel in ```style.css```, op deze manier:

```css
  transition: top 5s ease-in, transform 5s ease-in;
```

Sla op en herlaad. Kantelt hij zo mooi?

In de code staat ```360deg```, dat betekent dat hij een heel rondje draait, en onderaan weer precies rechtop staat.
Je kunt er ook een ander getal in zetten, probeer maar uit!

Een blaadje kan ook naar voren of opzij kantelen.
In de code hebben we daarvor 3 'bewegingsassen': de X-as, de Y-as en de Z-as.
Voor elk van deze assen kunnen we in de code aangeven hoe ver het blad moet draaien.

De `rotate(360deg)` die we hebben staan is eigenlijk het draaien rond de Z-as: `rotateZ(360deg)`.
Vervang ```rotate(360deg)``` door ```rotateX(360deg) rotateY(360deg) rotateZ(360deg)``` om te draaien in alle richtingen.
Verander de getallen (of laat een as helemaal weg) en bekijk het effect.

Wat vind je de mooiste manier van draaien?

Meer blaadjes
-------------

E&eacute;n blaadje is natuurlijk wat weinig, we willen meer blaadjes!

Je kunt in `index.html` een tweede plaatje toevoegen, die je in `id` `blad2` noemt:

```html
    <img src="http://www.clipartqueen.com/image-files/red-lobed-fall-clipart-leaf.png" alt="" class="blad" id="blad2">
```

In ```javascript.js``` kun je dan het stuk tussen ```window.onload=function(){``` en ```} ``` kopi&euml;ren en er onder plakken, en in dat stuk ```blad``` vervangen door ```blad2```.
Let op dat je wel boven ```} ``` plakt!

Dan heb je dus zoiets:

```javascript
window.onload=function(){
    var blad = document.getElementById('blad');
    blad.style.top = hoogte - blad.height;
    blad.style.transform = 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)';

    var blad2 = document.getElementById('blad2');
    blad2.style.top = hoogte - blad2.height;
    blad2.style.transform = 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)';
}
```

Ook in ```style.css``` kunnen we ```#blad``` kopi&euml;ren en ```#blad2``` noemen.
Maar daar is nog een extra aanpassing nodig, want we willen dat het blad op een ander punt begint. In de regel ```left: 50%;``` staat dat het blad op de helft van het venster begint. Vul daar een ander getal in tussen 0 en 100.

Dus voeg bijvoorbeeld toe:

```css
#blad2{
    left: 20%;
    transition: top 5s ease-in, transform 5s ease-in;
}
```

{:class="note"}
Wil je blaadjes van verschillende formaten maken? Verplaats dan de regel ```width: 40px;``` uit ```.blad``` naar ```#blad```, en gebruik een ander getal in ```#blad2```.

Dit kun je nog een keer herhalen met `blad3`, `blad4`, enzovoort.
Op deze manier kun je meerdere blaadjes toevoegen, met ook verschilende plaatjes. En door de getallen wat te veranderen krijg je verschillende snelheden en verschillende manieren van kantelen.

{:class="note"}
Het steeds kopi&euml;ren van ongeveer dezelfde code doen programmeurs meestal niet.
Ben jij het ook al zat? Stop dan maar, want verderop gaan we het toch anders doen.

Wind toevoegen
-------------

De blaadjes gaan nog steeds recht naar beneden, maar in het echt worden ze opzij geblazen door de wind.
Dus gaan we wind toevoegen!

We beginnen met het maken van een functie die voor wind speelt.
Voeg de volgende code toe in ```javascript.js```.
Let op, nu wel na ```} ```!

```javascript
function wind(){
    var blaadjes = document.getElementsByClassName('blad');
    for(i=0;i<blaadjes.length;i++){
        var positie = window.getComputedStyle(blaadjes[i]);
        var voor = parseInt(positie.left);
        var na = voor + 1;
        blaadjes[i].style.left = na+'px';
    };
}
```

Deze code verplaatst alle blaadjes met 1 pixel.

Nu gebeurt er nog niets, want we moeten nog zeggen dat de wind moet gaan waaien!

Voeg daarvoor de volgende regel toe onderin `javascript.js`:

```javascript
setInterval(wind,20);
```

Zie je wat je kunt aanpassen om de wind harder of zachter te laten waaien? Probeer maar!

Zoals je zult merken waaien de blaadjes uiteindelijk buiten beeld. Om dat te voorkomen laten we ze dan stoppen en verdwijnen.

Vervang de regel

```javascript
        blaadjes[i].style.left = na+'px';
```

door

```javascript
        if( na < breedte ){
            blaadjes[i].style.left = na+'px';
        } else {
            blaadjes[i].style.display = 'none';
        }
```

{:class="note"}
<b>Extra uitdaging:</b> hoe zorg je dat de blaadjes niet meer wegwaaien zodra ze op de grond liggen?

Herhalen
--------

Zodra het blad is gevallen houdt het op. Maar eigenlijk willen we dat het door blijft gaan met steeds weer nieuwe blaadjes, toch?

Daarom gaan we nu weer terug naar 1 blad, en gaan we die herhalen.

{:class="note"}
Had je een leuke combinatie gemaak? Bewaar deze bestanden dan als een kopie. Misschien wil je het aan het eind van de CoderDojo wel aan de rest laten zien!

Je kunt nu alle gemaakte blaadjes weer verwijderen. Dus alles met ```blad2```, of ```blad3```, of ```blad4```. Maar je mag ze ook laten staan of later verwijderen, dat maakt nu niet uit.

Plak de volgende code in ```javascript.js```:

```javascript
function nieuwblad(){
    var nieuwblad = document.createElement('img');
    nieuwblad.src = 'http://www.clipartqueen.com/image-files/red-lobed-fall-clipart-leaf.png';
    nieuwblad.className = 'blad';
    nieuwblad.style.left = '20%';
    nieuwblad.style.transition = 'top 5s ease-in, transform 5s ease-in';
    nieuwblad.onload=function(){
        this.style.top=hoogte-this.height;
        this.style.transform = 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)';
    }
    document.body.appendChild(nieuwblad);
}
```

In deze code hebben we alle code van een blad en de beweging samengevoegd.

Herken je de link naar het plaatje? Die kun je dus vervangen door je eigen plaatje als je een andere had gekozen.
Had je andere getallen voor je kantelingen gebruikt? Pas die dan ook hier aan. Herken je waar dat kan?

Nu moeten we nog zorgen dat het blad verschijnt.
Met deze code zeggen we dat er elke seconde een nieuw blad moet verschijnen:

```javascript
setInterval(nieuwblad,1000);
```

Plak deze regel ook in `javascript.js`.

{:class="note"}
Het getal 1000 is 1000 milliseconden, wat dus 1 seconde is. Dit kun je ook aanpassen. Wil je elke 2 seconden een nieuw blad, dan maak je er 2000 van.

Sla op, herlaad en bekijk het resultaat.

Ziet er leuk uit toch?

Willekeurigheid
-------------

Omdat alles hetzelfde valt, gaat het toch wat saai worden.
Daarom gaan we er wat variatie aan toevoegen.

Daarvoor maken we eerst en willekeurigheids-functie in `javascript.js`:

```javascript
function willekeurig(maximum){
    return Math.random() * maximum;
}
```

Hiermee maken we een willekeurig getal tussen 0 en het maximum. Het maximum geven we aan op de plek waar we de functie gebruiken.

Laten we beginnen met de blaadjes op een ander punt te laten beginnen.

Weet je nog dat we daarvoor ``left`` konden aanpassen tussen 0 en 100%? Dan is 100 dus ons maximum.

Vervang daarom de regel

```javascript
    nieuwblad.style.left = '20%';
```

door

```javascript
    nieuwblad.style.left = willekeurig(100)+'%';
```

Sla op en bekijk het resultaat.
Wow!

Laten we ook de snelheid aanpassen waarmee de blaadjes naar beneden vallen.

Vervang daarom

```javascript
    nieuwblad.style.transition = 'top 5s ease-in, transform 5s ease-in';
```

door

```javascript
    var valtijd = willekeurig(8) + 's';
    nieuwblad.style.transition = 'top '+valtijd+' ease-in, transform '+valtijd+' ease-in';
```

{:class="note"}
Omdat we de tijd dat het blad valt en de tijd dat het kantelen duurt gelijk willen houden, gebruiken we 2 keer dezelfde willekeurige tijd door daar een extra variabele voor te maken.
Maar je kunt er natuurlijk ook voor kiezen het wel verschillend te houden. Hoe doe je dat dan?

Wat vind je van het resultaat?

We kunnen nu dus ook de manier van kantelen willekeurig maken.

Vervang dan dus de regel

```javascript
    this.style.transform = 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)';
```

door

```javascript
    this.style.transform = 'rotateX(' + willekeurig(360) + 'deg) rotateY(' + willekeurig(360) + 'deg) rotateZ(' + willekeurig(360) + 'deg)';
```

Let goed op de volgorde van de ```+```-jes en ```'```-jes!

Is het resultaat een verbetering?

Windvlagen
---------

Tot slot kunnen we nog zorgen dat de wind wat minder constant is.

Maar daarvoor moeten we de manier van herhalen aanpassen.

Een windvlaag duurt niet maar 20 milliseconden zoals in

```javascript
setInterval(wind,20);
```

staat. Vervang dat daarom door `1500`.

Omdat we een soepele beweging willen, moeten we dat als `left 1s` toevoegen aan de regel met `nieuwblad.style.transition`. Die wordt dan dus:

```javascript
    nieuwblad.style.transition = 'top '+valtijd+' ease-in, transform '+valtijd+' ease-in, left 1s';
```

{:class="note"}
Als je de oude blaadjes hebt laten staan, zul je merken dat je deze `left 1s` ook daar bij moet toevoegen. Dat kan in `style.css`.

Je kunt nog een beetje spelen met de tijdsduren ``1500`` en ``1s`` die hier als voorbeeld zijn gebruikt. Maar we gaan hier nu geen willekeurig getal gebruiken, omdat dat toch net wat te lastig wordt.

Die willekeurigheid voegen we toe in de functie `wind()` in de regel met `na = voor + 1`.
Dan krijg je bijvoorbeeld

```javascript
        var na = voor + willekeurig(150);
```

Ben je tevreden met het resultaat?

Extra: verschillende bladeren
---------

Je hebt nu veel dezelfde blaadjes, terwijl je eerder misschien verschillende plaatjes gebruikte.
Ook dat kunnen we willekeurig maken!

Bovenin ```javascript.js``` zetten we alle plaatjes die we willen gebruiken in een lijst.
Met bijvoorbeeld de 4 voorbeelden uit het begin is dat dan zo:

```javascript
var bladeren = [
    'http://www.clipartqueen.com/image-files/red-lobed-fall-clipart-leaf.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/125707/leaf.svg',
    'https://cdn.icon-icons.com/icons2/2199/PNG/512/brown_leaf_icon_133976.png',
    'https://cdn.icon-icons.com/icons2/1446/PNG/512/22338mapleleaf_98750.png'
];
```
Je kunt dus op elke regel een link naar een plaatje zetten, tussen 2 haakjes `'`. Let op de `,` aan het eind!

Voeg ook de volgende code toe met een functie om een willekeurig blad uit deze lijst te nemen:

```javascript
function willekeurigblad(){
    var aantal_bladeren = bladeren.length;
    var willekeurig_blad = willekeurig( aantal_bladeren );
    var afgerond = Math.floor( willekeurig_blad );
    return bladeren[ afgerond ];
}
```

Het enige wat we nu nog hoeven te doen is in de functie `nieuwblad()` de link van het plaatje in `nieuwblad.src` te vervangen door deze nieuwe functie `willekeurigblad()`.
Dus zo:

```javascript
    nieuwblad.src = willekeurigblad();
```

{:class="note"}
Het kan korter zonder een extra functie ```willekeurigblad()```, met alle code op 1 regel: ```nieuwblad.src = bladeren[ Math.floor( willekeurig(bladeren.length) ) ]```
Kun je controleren of dat klopt?

