---
title: "Flappy Bird in JavaScript"
layout: toc
tags: [materiaal, javascript]
redirect_from:
- /2017/09/16/javascript-flappybird
- /2017/09/16/javascript-flappybird.html
---
* Inhoudsopgrave
{:toc}

Flappy Bird
-----------
We gaan vandaag het spelleltje Flappy Bird programmeren in JavaScript. In Flappy Bird moet je het vogeltje tussen de buizen door laten vliegen, zonder er tegenaan te botsen. Dat klinkt eenvoudig, maar is lastiger dan je denkt!

![Flappy Bird](assets/javascript-flappybird-stap7.gif){:class="screenshot"}

Punker
-----------

We gaan werken in Plunker. Dit is een online _editor_ waarin we onze JavaScript code gaan schrijven. Om te beginnen open je <a href="https://plnkr.co/edit/Wk678qILLlsUyY6S?preview" target="_blank">deze link</a>. 

Als het goed is zie dit scherm:

![Plunker](assets/javascript-flappybird-plunker1.png)

<hr />
TODO: uitleg over Plunker
- onderdelen op het scherm: bestanden, editor, uitvoeren
- 'Fork' om een kopie van de code te maken waarin we gaan werken
<hr />

We gaan onze code schrijven in het bestand ```flappybird.js```. Klik maar eens op dit bestand, als het goed is zie je nu deze code in het code venster:

```javascript
var state = {
  preload: function () {
    // Hier laad je alle plaatjes en geluiden in het geheugen van de computer
  },

  create: function () {
    // hier zet je code neer die 1 keer uitgevoerd moet worden, wanneer je spel 
    // opstart
  },

  update: function () {
    // Hier zet je code neer die steeds opnieuw uitgevoerd wordt. Je kunt
    // bijvoorbeeld controleren of 2 dingen met elkaar botsen.
  }
}
```

Als je goed kijkt ziet je computer code staan, maar ook 'gewone' Nederlandse zinnen. We noemen dit _commentaar_, en we gebruiken dat om uit te leggen wat de code doet. Je kunt _commentaar_ schrijven door een regel te beginnen met `//`.


De achtergrond instellen
--------------------------------
Er gebeurt nog niet zo veel in ons spel, je ziet alleen maar een zwart vlak. We gaan eerst maar eens een mooie achtergrond instellen.

We gaan hiervoor het plaatje `achtergrond.png` inladen. Dat doe je door eerst het plaatje in het geheugen van de computer te laden. Voeg deze regel toe aan de  ```preload``` functie, _voor_ de `}`:
```javascript
game.load.image('achtergrond', 'achtergrond.png');
```

De `preload` functie ziet er als het goed is nu zo uit:

```javascript:
preload: function () {
  // Hier laad je alle plaatjes en geluiden in het geheugen van de computer
  game.load.image('achtergrond', 'achtergrond.png');
},
```

Voeg in de ```create``` functie het achtergrondplaatje als _sprite_ toe. Maak de _sprite_ net zo groot als het scherm van ons spel:


```javascript
this.background = game.add.sprite(0, 0, 'achtergrond');
this.background.width = game.width;
this.background.height = game.height;
```

Als het goed is zie je nu de achtergrond verschijnen.

![Achtergrond](assets/javascript-flappybird-stap1.png){:class="screenshot"}

> Een _sprite_ is een plaatje dat in een game gebruikt wordt.

De vogel op het scherm tekenen
--------------------------------------

Alleen naar een achtergrond kijken is ook maar saai. Laten we Flappy zelf eens in het spel zetten.

Laad in de ```preload``` functie het plaatje van Flappy Bird in het geheugen van de computer.

```javascript
game.load.spritesheet('vogel', 'vogel.png', 68, 48, 3);
```

En zet nu de Flappy _sprite_ in het spel in de ```create``` functie:
```javascript
this.flappy = game.add.sprite(100, 245, 'vogel');
```

Als het goed is ie je Flappy nu in het spel verschijnen!

![Flappy](assets/javascript-flappybird-stap2.gif){:class="screenshot"}

> Een `spritesheet` is een afbeelding waarin meerdere uiterlijken van een sprite staan. Open het bestand `vogel.png` maar eens. Je zult dan een afbeelding zien met `3` vogels; elke vogel is `68` pixels hoog en `48` pixels breed. We gaan dit straks nodig hebben om de vogel te laten vliegen.
De vogel laten vallen
---------------------

Er gebeurt nog weinig in ons spel. We gaan straks Flappy leren vliegen, maar eerst gaan we hem laten vallen.

We doen dit door _physics_ aan ons spel toe te voegen. 

Voeg deze regel toe in de ```create``` functie :
```javascript
game.physics.startSystem(Phaser.Physics.ARCADE);
```

We gaan nu met deze _physics_ de zwaartekracht instellen op Flappy. 

Hiervoor voeg je nog 2 regels code aan je programma toe in de ```create``` functie:

```javascript
game.physics.arcade.enable(this.flappy);
this.flappy.body.gravity.y = 1000;
```

En meteen valt Flappy van het scherm! 😱

![Stap 3](assets/javascript-flappybird-stap3.gif){:class="screenshot"}

De vogel laten vliegen
------------------------------
Als je het spel nu start, zal de vogel als een baksteen naar beneden vallen. Laten we er nu voor zorgen dat ze kan vliegen.

![Stap 4](assets/javascript-flappybird-stap4.gif){:class="screenshot"}

Voeg in de ```create``` functie de volgende regel toe:
```javascript
create: function() {
  // ...
  var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spaceKey.onDown.add(this.flap, this);   
}
```

Met de regels hierboven zorgen we er voor dat wanneer de spatiebalk ingedrukt wordt, het spel de functie _flap_ van ons _state_ object uitvoert. Deze funtie bestaat nog niet, dus die gaan we toevoegen:
```javascript
var state = {
  preload: function() { 
    // ...
  },
  create: function() { 
    // ...
  },
  update: function() { 
    // ...
  },
  flap: function() {
    this.bird.body.velocity.y = -350;
  }
}
```
> Let op dat je een komma na de laatste accolade ```}``` van de ```update``` functie toevoegt!

Doordat we in de ```flap ``` functie de vogel een _y-snelheid_ meegeven, vliegt ze eventjes omhoog. Maar door de zwaartekracht die we in stap 3 op de vogel ingesteld hebben, zal ze snel weer naar beneden vallen.

Geluid en animatie toevoegen
------------------------------------
Onze vogel kan nu wel vliegen, maar het ziet er een beetje saai uit. Voeg een vlieg-animatie toe in de ```create``` functie:
```javascript
create: function() {
  // ...
  this.bird.animations.add('fly');
}
```

Start de animatie in de ```flap``` functie:
```javascript
flap: function() {
  // ...
  this.bird.animations.play('fly', 10, false);
}
```

![Stap 5](assets/javascript-flappybird-stap5.gif){:class="screenshot"}

> Deze code speelt de drie plaatjes in de _spritesheet_ van de vogel een-voor-een af. ```10``` keer per seconde wordt het volgende plaatje getoond, waardoor het lijkt alsof de vleugels van de vogel wapperen. 

Laad nu het ```flap``` geluidsbestand in de ```preload``` functie. Voeg hem toe aan het spel in de ```create``` functie. Speel het geluid af in de ```flap``` functie:
```javascript
preload: function() {
  // ...
  game.load.audio('flap', 'assets/flap.mp3');
}

create: function() {
  // ...
  this.flapSound = game.add.audio('flap');
}

flap: function() {
  // ...
  this.flapSound.play();
}
```

Buizen laten verschijnen
--------------------------------
![Stap 6](assets/javascript-flappybird-stap6.gif){:class="screenshot"}

We gaan iedere 3 seconden rij met buizen laten verschijnen. Hiervoor voegen we een ```timer``` toe in de ```create``` functie. Deze timer roept iedere 3 secoden  de functie ```createPipe``` in ons ```state``` object aan:
```javascript

create: function() { 
  // ...    
  this.timer = game.time.events.loop(3000, this.createPipe, this);
}
```
De code voor het aanmaken van de buizen is wat lastiger, dus die krijg je cadeau! Om dit te gebruiken in je ```state``` voeg je de volgende regel toe _na_ het ```state``` object:
```javascript
var state = {
  //...
}

// Deze regel toevoegen
withPipes(state);
```

Botsingen
-----------------
![Stap 7](assets/javascript-flappybird-stap7.gif){:class="screenshot"}

Je vogel zal nu nog dwars door de buizen heen vliegen. We gaan nu kijken of de vogel botst met een buis. We doen dit in de ```update``` functie, omdat die keer op keer uitgevoerd wordt:
```javascript
update: function () {
  game.physics.arcade.overlap(this.bird, this.pipes, this.hit, null, this);
},
```

Als de vogel met een buis botst, wordt de functie ```hit``` uitgevoerd. We voegen deze functie aan ons ```state``` object toe, en spelen dan het geluid ```hit.mp3``` af:
```javascript
var state = {
  preload: function() { 
    // ...
    game.load.audio('hit', 'assets/hit.mp3');
  },
  create: function() { 
    // ...
    this.hitSound = game.add.audio('hit');
  },
  update: function() { 
    // ...
  },
  flap: function() {
    // ...
  },
  hit: function() {
    this.hitSound.play();
  }
}
```

Laat het spel opnieuw starten wanneer de vogel met een buis botst:
```javascript
hit: function() {
  // ...
  game.state.start('main');
}
```

Extra opdrachten
----------------

### Game over wanneer de vogel buiten het scherm komt
Hiervoor moeten we het spel laten controleren of de vogel buiten het scherm komt. Dit stel je op de vogel in de ```create``` functie in:
```javascript
create: function() {
  // ...
  this.bird.checkWorldBounds = true;
  this.bird.events.onOutOfBounds.add(this.hit, this);
}
```
> De code hierboven zorgt er voor dat de functie ```hit``` uitgevoerd wordt, zodra de vogel de rand van het scherm raakt.

### Score toevoegen
We laten de speler iedere seconde een punt verdienen. Dit doen we door in de ```create```functie een _variabele_ 'points' toe te voegen. We maken ook een _label_ aan waarmee we ```score``` op het scherm tekenen:
```javascript
create: function() {
  // ...
  this.points = 0;
  this.pointsLabel = game.add.text(20, 20, "0", {
    font: "30px Arial",
    fill: "#ffffff"
  });
}
```

Nu voegen we in de ```create``` functie een timer toe, waarmee we elke seconde een nieuwe functie ```score``` aanroepen:

```javascript
create: function() {
  // ...
  this.timer = game.time.events.loop(1000, this.score, this);
}

score: function() {
  this.points += 1;
  this.pointsLabel.text = this.points;
}
```

### Jouw beurt!
Wat kun je nog meer verzinnen om jouw spel n&oacute;g leuker te maken?

Om dit spel te maken hebben we [Phaser](http://phaser.io/) gebruikt. Op de site van Phaser vind je nog [veel meer voorbeelden met code](http://phaser.io/examples). Hier kun je dus eens rondneuzen om te kijken hoe anderen spellen gemaakt hebben.
