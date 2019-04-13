---
title: "Flappy Bird in JavaScript"
layout: post
author: Tim
tags: [instructies, javascript]
thumbnail: /static/img/javascript-flappybird-stap7.gif
---
Tijdens CoderDojo Arnhem #12 maakten we het spelletje Flappy Bird in JavaScript. Hier vind je de instructies om het zelf eens te proberen.

* Inhoudsopgrave
{:toc}

Voorbereiding
-------------
Voordat we echt starten met programmeren moeten we een aantal bestanden downloaden en installeren:
- Download en installeer [Python 3](https://www.python.org/ftp/python/3.6.2/python-3.6.2.exe)
- Download [de bestanden](https://timschlechter.github.io/coderdojo-arnhem/flappybird/dist/flappybird.zip) voor het spel
- Download en installeer eventueel een editor waarin je fijn kunt typen, bijvoorbeeld [Visual Studio Code](https://code.visualstudio.com/)

Pak het bestand ```flappybird.zip``` uit op je harde schijf en open de map met jouw text editor.

Het spel voor het eerst starten
-------------------------------
We gaan het spel bouwen in de taal JavaScript. Deze code laten we uitvoeren door een _webserver_ programma.

Je start de webserver door het programma `start-python-webserver.bat` te starten. Je kunt het spel dan in een webbrowser openen op [http://localhost:8000](http://localhost:8000).

We gaan onze code schrijven in het bestand ```flappybird.js```:

```javascript
// De 'state' bevat de functies die in het spel gebruikt worden
var state = {
  preload: function () {
    // Hier laad je alle plaatjes en geluiden (assets) die je in je spel nodig hebt.
  },

  create: function () {
    // Deze code wordt 1 keer uitgevoerd wanneer het spel start
  },

  update: function () {
    // Deze code wordt tijdens het spel steeds opnieuw uitgevoerd
  }
}
```

Stappenplan
-----------

### Stap 1: de achtergrond instellen
![Stap 1](/static/img/javascript-flappybird-stap1.png){:class="screenshot"}

Open het bestand ```flappybird.js``` en laad het achtergrond plaatje in de ```preload``` functie:
```javascript
preload: function () {
  game.load.image('background', 'assets/background.png');
}
```
Voeg in de ```create``` functie het achtergrondplaatje als _sprite_ toe. Maak deze net zo groot als het scherm van ons spel:
```javascript
create: function () {
  // Achtergrond
  this.background = game.add.sprite(0, 0, 'background');
  this.background.width = game.width;
  this.background.height = game.height;
}
```

### Stap 2: de vogel op het scherm tekenen
![Stap 2](/static/img/javascript-flappybird-stap2.gif){:class="screenshot"}

Laad in de ```preload``` functie het plaatje voor de vogel, en voeg in de ```create``` de vogel als sprite toe aan ons spel:
```javascript
preload: function () {
  // ...
  game.load.spritesheet('bird', 'assets/bird.png', 68, 48, 3);
},
create: function() {
  // ...
  this.bird = game.add.sprite(100, 245, 'bird');
}
```
> Een ```spritesheet``` is een afbeelding waarin meerdere uiterlijken van een sprite staan. Open het bestand ```assets/bird.png``` maar eens. Je zult dan een afbeelding zien met ```3```vogels; elke vogel is ```68``` pixels hoog en ```48``` pixels breed. We gaan dit straks nodig hebben om de vogel te laten vliegen.

### Stap 3: de vogel laten vallen
![Stap 3](/static/img/javascript-flappybird-stap3.gif){:class="screenshot"}

We kunnen in ons spel eenvoudig zwaartekracht toevoegen door _physics_ te starten. Doe dit door de volgende regel in de ```create``` functie toe te voegen:
```javascript
create: function() {
  // ...
  game.physics.startSystem(Phaser.Physics.ARCADE);
}
```

Je kunt deze _physics_ instellen op sprites. Je kunt vervolgens bijvoorbeeld zwaartekracht op je sprite instellen, of hem snelheid geven. Dit doen we voor onze vogel in de ```create``` functie:
```javascript
create: function() {
  // ...
  game.physics.arcade.enable(this.bird);
  this.bird.body.gravity.y = 1000;
}
```

### Stap 4: de vogel laten vliegen
Als je het spel nu start, zal de vogel als een baksteen naar beneden vallen. Laten we er nu voor zorgen dat ze kan vliegen.

![Stap 4](/static/img/javascript-flappybird-stap4.gif){:class="screenshot"}

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

### Stap 5: geluid en animatie toevoegen
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

![Stap 5](/static/img/javascript-flappybird-stap5.gif){:class="screenshot"}

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

### Stap 6: buizen laten verschijnen
![Stap 6](/static/img/javascript-flappybird-stap6.gif){:class="screenshot"}

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

### Stap 7: botsingen
![Stap 7](/static/img/javascript-flappybird-stap7.gif){:class="screenshot"}

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

### Extra 1: game over wanneer de vogel buiten het scherm komt
Hiervoor moeten we het spel laten controleren of de vogel buiten het scherm komt. Dit stel je op de vogel in de ```create``` functie in:
```javascript
create: function() {
  // ...
  this.bird.checkWorldBounds = true;
  this.bird.events.onOutOfBounds.add(this.hit, this);
}
```
> De code hierboven zorgt er voor dat de functie ```hit``` uitgevoerd wordt, zodra de vogel de rand van het scherm raakt.

### Extra 2: score toevoegen
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

### Extra 3: jouw beurt!
Wat kun je nog meer verzinnen om jouw spel n&oacute;g leuker te maken?

Om dit spel te maken hebben we [Phaser](http://phaser.io/) gebruikt. Op de site van Phaser vind je nog [veel meer voorbeelden met code](http://phaser.io/examples). Hier kun je dus eens rondneuzen om te kijken hoe anderen spellen gemaakt hebben.
