---
title: Spirograaf
layout: toc
class: stappenplan scratch
tags: [materiaal, scratch]
---

<script src="https://scratchblocks.github.io/js/scratchblocks-v3.4-min.js"></script>

<script src="https://scratchblocks.github.io/js/translations-all-v3.4.js"></script>

## Spirograaf

Met programmeren kun je alles maken! Ook een kunstwerk!

In deze les maken we zelf een kunstwerk met Scratch.
En je leert ook over herhalingen en over variabelen. Als je nog niet weer wat dat zijn, geen
zorgen! Dat gaan we samen leren.

Zo gaat jouw kunstwerk er straks uitzien. Of misschien wel heel anders.

![Spirograaf](/static/img/scratch-spirograaf-1.png)

{:class="action"}
Klik [hier](https://scratch.mit.edu/projects/368601196/editor/) om het project te openen.

> Dit materiaal is gebaseerd op het [materiaal](https://scratchles.nl/resources/pdf/a570af9b1e1b05f5e7f8447c886750418323cf07.pdf) gemaakt door [Felienne Hermans](https://www.felienne.com/nl/) en bewerkt door CoderDojo Arnhem. Het is Creative Commons [by-nc-sa-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
>
> Simpel gezegd: Je mag het gebruiken in je lessen, aanpassen, uitprinten, kopiëren, wat je maar wilt.
> Maar: je moet onze naam er bij zetten, je mag er geen geld mee verdienen en als je het aanpast, moet je dat ook weer Creative Commons maken. Het linkje bevat alle informatie.

## Een pen gebruiken

Eerst maar eens zorgen dat we iets op het scherm kunnen tekenen.

We gaan de spirograaf laten beginnen met de groene vlag. Ga naar <span class="scratch-section-gebeurtenissen"><span class="dot"></span>Gebeurtenissen</span> en sleep het blokje <span class="scratch-gebeurtenis">wanneer op <span class="flag">⚑</span> wordt geklikt</span> in je programma.

```scratch
wanneer groene vlag wordt aangeklikt
```

Een <span class="scratch-section-gebeurtenissen"><span class="dot"></span>Gebeurtenissen</span> blokje geeft aan _wanneer_ iets gebeurt. We kunnen dus _iets_ laten gebeuren _wanneer_ we op de groene vlag klikken.

Nu gaan we _iets_ laten gebeuren. We gaan als eerste de pen verschuiven. Ga naar <span class="scratch-section-bewegingen"><span class="dot"></span>Bewegingen</span> en sleep een <span class="scratch-beweging">ga naar x <input/> y <input/></span> blokje onder je <span class="scratch-gebeurtenis">wanneer op <span class="flag">⚑</span> wordt geklikt</span> blokje.

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
```

Probeer je programma eens uit door op de groene vlag te klikken. Die vind je bij de hele pijl.
Wat gebeurt er nu?

Precies! Het potlood beweegt naar het midden van het scherm.

Plak er nu ook nog een <span class="scratch-beweging">richt naar <input/> graden naar</span> blokje onder zodat het potlood naar rechts gaat bewegen.

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
richt naar (90) graden
```

## Een lijn trekken

Nu kan het echte tekenen beginnen. Ga maar eens naar <span class="scratch-section-pen"><span class="dot"></span>Pen</span> en sleep het blokje <span class="scratch-pen">pen neer</span> onder je programma.

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
richt naar (90) graden
pen neer
```

Nu is de pen op het scherm neergezet, en kunnen we dus tekenen. Als je nu een <span class="scratch-beweging">neem <input/> stappen</span> blokje toevoegt, dan komt er een klein streepje
op het scherm.

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
richt naar (90) graden
pen neer
neem (10) stappen
```

Heb jij ook dit resultaat?

![Spirograaf](/static/img/scratch-spirograaf-2.png)

Dan zit je op de goede weg!

## Draaien maar

Voor een mooie spirograaftekening willen we natuurlijk niet alleen een rechte lijn. we willen ook mooie bochtjes. Daarvoor moet de pen gaan draaien. Daar is ook een blokje voor.

Het zit ook bij <span class="scratch-section-bewegingen"><span class="dot"></span>Bewegingen</span>. Plak een <span class="scratch-beweging">draai <span class="arrow-clockwise">&#8635;</span> <input/> graden naar</span> blokje onderaan, en maak het getal maar wat groter, dan zie je het goed. Bijvoorbeeld `50`.

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
richt naar (90) graden
pen neer
neem (10) stappen
draai (50) graden naar rechts
```

Het potloodje is nu een gedraaid, dat is het begin van een rondje. Nu zouden we zo'n rondje met heel veel blokjes kunnen maken, zo:

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
richt naar (90) graden
pen neer
neem (10) stappen
draai (50) graden naar rechts
neem (10) stappen
draai (50) graden naar rechts
neem (10) stappen
draai (50) graden naar rechts
neem (10) stappen
draai (50) graden naar rechts
neem (10) stappen
draai (50) graden naar rechts
neem (10) stappen
draai (50) graden naar rechts
neem (10) stappen
draai (50) graden naar rechts
```

Dat mag je proberen, maar dat is dus heel veel werk! We kunnen het ook slimmer doen, kijk
snel verder.

## Herhaalverhaal

In Scratch heb je ook een handig blokje om dingen te herhalen. Het blokje heet <span class="scratch-besturen">herhaal</span> en zit bij <span class="scratch-section-besturen"><span class="dot"></span>Besturen</span>.

Doe de <span class="scratch-besturen">herhaal</span> om de blokjes <span class="scratch-beweging">neem <input value="10" /> stappen</span> en <span class="scratch-beweging">draai <span class="arrow-clockwise">&#8635;</span> <input value="50" /> graden naar</span> heen. Als je het een beetje in de buurt houdt, dan klikt het er vanzelf omheen.

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  neem (10) stappen
  draai (50) graden naar rechts
```

Probeer je tekening weer eens uit. Dat is mooi he, een heel rondje met weinig blokjes!

![Spirograaf](/static/img/scratch-spirograaf-3.png)

Helaas krijgen we nu steeds hetzelfde rondje. Zullen we eens wat variatie toevoegen? Probeer bijvoorbeeld eens `50` of `100` stappen te nemen.

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  neem (50) stappen
  draai (50) graden naar rechts
```

Zo kun je steeds een ander rondje maken. Helaas wordt het nu wel een rommeltje. Er is ook een wisknop! Zullen we die wisknop eens gaan programmeren?

## Ik wist het

Klik rechts onder bij de sprites op de Wisknop. Die heeft nog geen blokjes.

![Spirograaf](/static/img/scratch-spirograaf-4.png)

Als we op de knop klikken, dan moet alles gewist worden. Dat doen we zo:

```scratch
wanneer op deze sprite wordt geklikt
wis alles
```

Klik nu maar eens op de knop (bij je tekening). Is alles nu netjes opgeruimd? Bij mij wel!
Als het te rommelig wordt, kun je nu altijd op de wisknop drukken.

Selecteer nu het potloodje weer.

![Spirograaf](/static/img/scratch-spirograaf-5.png)

Misschien heb je ook soms zo'n streepje in je rondje zoals hierboven. Dat is niet mooi he? We
kunnen dat oplossen door de pen omhoog te doen met een <span class="scratch-pen">pen op</span> blokje, voordat we terug naar het begin gaan.

```scratch
wanneer groene vlag wordt aangeklikt
pen op
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  neem (50) stappen
  draai (50) graden naar rechts
```

Heb je ook al geprobeerd om een ander getal te gebruiken bij het <span class="scratch-beweging">draai <span class="arrow-clockwise">&#8635;</span> <input value="50" /> graden naar</span> blokje? Probeer maar eens wat getallen! Wat gebeurt er dan?

## Kleurtjes

Alle tekeningen zijn nu blauw. Dat is best mooi, maar misschien wil je wel iets anders.
Je kunt de kleur veranderen met het <span class="scratch-pen">maak pen kleur <input class="purple" /></span> blokje. Misschien staat er bij jou een andere kleur,
dat maakt niets uit!

Plak dit blokje bovenaan. Klik op het gekleurde vlakje in het blokje om de kleur te veranderen.

```scratch
wanneer groene vlag wordt aangeklikt
maak penkleur (#6a0dad)
pen op
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  neem (50) stappen
  draai (50) graden naar rechts
```

Nu wordt je tekening mooi paars of een andere kleur als je die hebt gekozen.

Heb je moeite met kiezen? Je kunt de kleur ook automatisch aanpassen!

Dat doe je met het <span class="scratch-pen">verander penkleur met <input/> met</span> blokje. Zet het in het <span class="scratch-besturen">herhaal</span> blokje.

```scratch
wanneer groene vlag wordt aangeklikt
maak penkleur (#6a0dad)
pen op
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  verander penkleur met (5)
  neem (50) stappen
  draai (50) graden naar rechts
```

Nu krijg je bij iedere stap een andere kleur. je kunt hier ook weer het getal 5 op iets anders zetten, tot je het zelf mooi vindt.

## Druk er je stempel op

We gaan ook nog wat versiering toevoegen rondom je tekening. Hiervoor gebruiken we het <span class="scratch-pen">stempel</span> blokje.

```scratch
wanneer groene vlag wordt aangeklikt
maak penkleur (#6a0dad)
pen op
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  verander penkleur met (5)
  neem (50) stappen
  draai (50) graden naar rechts
  stempel
```

Probeer je tekening uit met de groene vlag. Wat gebeurt er nu?

Wil je een ander figuurtje? Dat kan ook! Bij <span class="scratch-section-uiterlijken"><span class="dot"></span>Uiterlijken</span> vind je het <span class="scratch-uiterlijken">verander uiterlijk naar <select><option>streep</option></select></span> blokje.

Plak die in het <span class="scratch-besturen">herhaal</span> blokje.

> Let op! zet 'm boven <span class="scratch-pen">stempel</span>

Kies met het kleine driehoekje een mooi figuurtje uit. Een voetbal of een eenhoorn? Jij mag kiezen.

```scratch
wanneer groene vlag wordt aangeklikt
maak penkleur (#6a0dad)
pen op
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  verander penkleur met (5)
  neem (50) stappen
  draai (50) graden naar rechts
  verander uiterlijk naar (eenhoorn v)
  stempel
```

## Groter en groter

Tot slot gaan we de tekening nog wat gekker maken. Vind je het ook een beetje saai dat je steeds dezelfde
tekening krijgt? Zou het niet leuker zijn als Scratch zelf wat verzint?

Ga maar eens naar <span class="scratch-section-variabelen"><span class="dot"></span>Variabelen</span>, daar staan twee oranje blokjes voor je klaar. Dat zijn variabelen "va-rie-ja-buh-luh".

Het zijn een soort doosjes waar je een getal in kan opslaan.

Sleep het blokje <span class="scratch-var">aantal stappen</span> op in het <span class="scratch-beweging">neem <input/> stappen</span> blokje.

Sleep het blokje <span class="scratch-var">aantal graden</span> in het <span class="scratch-beweging">draai <span class="arrow-clockwise">&#8635;</span> <input/> graden naar</span> blokje.

```scratch
wanneer groene vlag wordt aangeklikt
maak penkleur (#6a0dad)
pen op
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  verander penkleur met (5)
  neem (aantal stappen) stappen
  draai (aantal graden) graden naar rechts
  verander uiterlijk naar (eenhoorn v)
  stempel
```

Nu moeten we de getallen nog instellen.

Voeg twee <span class="scratch-variabelen">maak <select><option>aantal graden</option></select> <input /></span> blokjes bovenaan je programma toe. Verander er eentje op `aantal stappen` met het kleine driehoekje.

Ga nu naar <span class="scratch-section-functies"><span class="dot"></span>Functies</span>. Pak daar een <span class="scratch-func">willekeurig getal tussen <input /> en <input /></span> blokje en zet die in de <span class="scratch-variabelen">maak <select><option>aantal graden</option></select><input /></span> en <span class="scratch-variabelen">maak <select><option>aantal stappen</option></select><input /></span> blokjes.

```scratch
wanneer groene vlag wordt aangeklikt
maak [aantal graden v] (willekeurig getal tussen (40) en (170))
maak [aantal stappen v] (willekeurig getal tussen (1) en (200))
maak penkleur (#6a0dad)
pen op
ga naar x (0) y (0)
richt naar (90) graden
pen neer
herhaal
  verander penkleur met (5)
  neem (aantal stappen) stappen
  draai (aantal graden) graden naar rechts
  verander uiterlijk naar (eenhoorn v)
  stempel
```

Klik nu eens een paar keer op de groene vlag. Wat gebeurt er?

> **Tip:** als je geen zin hebt om steeds op de wisknop te drukken, kun je ook nog een <span class="scratch-pen">wis alles</span> blokje aan het begin van je programma toevoegen.

<script>
    scratchblocks.renderMatching(
      'code.language-scratch', 
      {
        style: 'scratch3',
        languages: ['nl']
      });
</script>
