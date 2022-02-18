---
title: "Maqueen Robotauto Combinatie opdrachten"
layout: toc
class: stappenplan, block-images
author: Maud
tags: [materiaal, microbit]
---

- Inhoudsopgave
  {:toc}

## Maqueen: Combinatie opdrachten

In deze handleiding van CoderDojo Arnhem staan een aantal opdrachten waarbij je meerdere functies van de Maqueen Robotauto gebruikt.

![sprites](/static/img/maqueen/image-005.jpg)

Er wordt uitgegaan van enige basiskennis van de Micro:Bit Maqueen Robotautog. Heb je dit nog niet, probeer dan eerst [het
beginnersprogramma voor de Maqueen Robotauto](https://coderdojo-arnhem.github.io/materiaal/microbit-maqueen/).

Deze handleiding hoeft niet perse van voor tot
achter doorgenomen te worden. Kijk gewoon wat je
leuk vindt om te doen met de robot auto.

<hr />

Deze handleiding is ontleend aan:

[Instructiemateriaal van House of Training](https://house-of-training.nl/cursus/microbit-maqueenprogrammeren/), [instructies van CoderDojo Nijmegen](https://coderdojonijmegen.nl/instructies/microbit/maqueen/), [documentatie van de leverancier van de Maqueen DFROBOT](https://wiki.dfrobot.com/micro_Maqueen_for_micro_bit_SKU_ROB0148-EN),
[documentatie van CodeKids](https://www.codekids.nl/micromaqueen-gebruiken-2/) en andere
documentatie en youtube filmpjes gevonden op internet.

<hr />

## A. Robotdans

Dit voorbeeldprogramma combineert het rijden van de Maqueen met het aanzetten van de koplampen, het tonen van tekst en symbolen op de display en het maken van muziek.

Toon een leuke begin tekst op de display van de Micro:Bit bij het opstarten zoals “ROBOTDANS”, toon verschillende pictogrammen tijdens het rijden in verschillende richtingen zoals pijltjes en smileys, laat de koplampen branden als je naar rechts/links/achteruit/vooruit gaat en voeg ook nog leuke muziek toe bij elke actie die je doet. Jij bedenkt het allemaal zelf, zo maak je je eigen Robotdans. Hieronder code ter inspiratie.

Linksaf met linker koplamp aan en pijl:

![sprites](/static/img/maqueen/image-048.png)

Rechtsaf met rechter koplamp aan en pijl:

![sprites](/static/img/maqueen/image-047.png)

Achteruit met muziek, hartje en koplampen uit:

![sprites](/static/img/maqueen/image-046.png)

Een kronkeltje links/rechts (4 keer):

![sprites](/static/img/maqueen/image-049.png)

En nog een stukje rechtdoor met beide koplampen aan en muziek:

![sprites](/static/img/maqueen/image-050.png)

### Variatie

- Je kunt voor het aangeven van de richting in de display ook het blok “toon pijl <richting>” gebruiken.
- Met het blok “motor <all> stop” laat je de beide motoren na de beweging kort stoppen, laat op dit blok een pauzeer blok volgen om aan te geven hoe lang de motoren moeten stoppen.
- Voeg een “speel toon …” blok toe om de auto een kort signaal te laten geven als hij stopt en overgaat op de
volgende beweging.

![sprites](/static/img/maqueen/image-051.png)

### Uitdaging

Voeg het ontwijken van een obstakel en het branden van de Neopixels toe!

## B. Patronen rijden

In deze opdracht laten we de Maqueen een vierkant rijden door slim gebruik te maken
van een herhaalblok. De eerste stap is om de Maqueen een stuk vooruit te laten rijden
(2 sec). Beide motoren gaan met een snelheid van 100. Daarna stopt de rechter motor
voor een korte pauze. De linker motor draait door waardoor de auto een bocht naar
rechts rijdt. Je moet zelf uitproberen hoe lang de tijd moet zijn in het tweede pauze
blok om een bocht van 90 graden te rijden.

![sprites](/static/img/maqueen/image-052.png)

Nu wil je 4 van dit soort rechtdoor/bocht stukken achter elkaar laten uitvoeren zodat
de Maqueen een vierkant rijdt. Daar gebruik je een herhaal blok voor (menu Lussen).
Zorg tot slot voor een Stop alle Motoren blok. Dan staat de auto stil aan het eind.

![sprites](/static/img/maqueen/image-053.png)

### Uitdaging

Kun je zelf nog meer mooie patronen verzinnen om te rijden?

Lukt het om de auto steeds kleinere vierkanten te laten rijden?

Of kun je de Maqueen in een cirkel of een achtje laten rijden?

Of nog moeilijker, in een spiraal die steeds groter wordt?

## C. Lijn volgen en anti botsing

In dit programma combineer je de lijn volg sensor en de ultrasone sensor. Met de lijn
volg sensor zorg je er voor dat de Maqueen de lijn blijft volgen. Met de ultrasone
sensor zorg je er voor dat hij tijdig remt als er een obstakel op de weg staat. Hij stopt
dan even en zodra er geen obstakel meer gedetecteerd wordt rijdt hij verder.

Begin met het programma uit paragraaf 6 Lijn volgen.
Voeg vervolgens een groot ALS DAN ANDERS blok toe waarbij het blok ANDERS open
geklikt is. Plaats het blok bovenaan in je programma en zet de code van het
programma “lijn volgen” bij ANDERS.
Plaats dan in het eerste deel van je lus de code die je geleerd hebt in paragraaf 5
Ultrasoon: obstakels vermijden. De auto kijkt eerst of er een obstakel binnen 10 cm te
vinden is; zo niet dan volgt hij met “snelheid” de zwarte lijn. Als er wél een obstakel op
de weg staat dan reageert hij direct en zet beide motoren stil. Hij wacht tot het
obstakel weg is en gaat dan weer rijden met de ingestelde snelheid.

![sprites](/static/img/maqueen/image-054.png)

## D. Knipperen op de zebra

In deze opdracht is het de bedoeling dat je de koplampen van de Maqueen aan laat gaan op het moment dat je over zwarte strepen rijdt.

Zorg er eerst voor dat de auto in een rustig tempo gaat rijden en zet de koplampen uit.
Als de waarde van beide lijn sensoren = 0, een zwarte ondergrond dus, dan moeten de
lampen AAN gaan. In alle andere gevallen zijn de lampen uit.

Gebruik voor de zwarte strepen zwarte tape op een wit papier!

![sprites](/static/img/maqueen/image-055.png)

### Uitdaging
Kun je de auto ook een geluidje laten maken bij elke zwarte streep die hij passeert?

En kun je hem dan laten tellen hoeveel zwarte strepen het zebrapad heeft en dit getal tonen op de display?
## E. Neopixels infaden en uitfaden (en regenboogkleuren)

In voorgaande paragrafen heb je de basis geleerd hoe je de NeoPixels kunt gebruiken en eigen kleuren kunt maken. Dat kan natuurlijk nog leuker!

Hieronder staan een paar voorbeelden. Vergeet niet altijd eerst het onderstaande blok te plaatsen in je programma als je met de Neopixels op de Maqueen aan de slag gaat:

![sprites](/static/img/maqueen/image-056.png)

In onderstaand programma laten we de kleuren langzaam feller worden, dat noemen we ___infaden___. Vervolgens laten we de kleur van de felste variant weer langzaam
afnemen naar de lichtste kleur. Dat noemen we ___uitfaden___.

Eerst maak je 3 variabelen aan: `R` voor Rood, `G` voor Groen en `B` voor Blauw.

In onderstaand voorbeeld gebruiken we de variabele `R` van Rood.

Eerst stel je de kleurwaarde in op `1`, dat is de lichtste variant rood.
Daarna laat je deze waarde langzaam oplopen in stapjes van `1` tot hij de waarde `255` heeft. Dat is de felste kleur rood. In het volgende programmablok zie je bij de stapjes een negatieve waarde staan, `-1`. 

Vanaf de waarde `255` neemt de kleur langzaam in `255` stapjes af tot hij het lichtste rood is geworden. Omdat dit alles in een blok `de hele tijd` staat blijft de kleur
langzaam van licht naar fel rood en terug gaan.

![sprites](/static/img/maqueen/image-057.png)

Pas nu zelf het programma aan met in- en uitfaden van Groen en Blauw door blokken toe te voegen met de variabele G van Groen en B van Blauw.

Met het volgende voorbeeldprogramma gaan we regenboogkleuren programmeren
die langzaam in- en uitfaden.
We beginnen met fel rood (waarde R=255 G=0 en B=0).
Dan bouwen we langzaam met stapjes van -1 rood af en met stapjes van +1 groen op.
Dit staat in het eerste herhaalblok van 255 keer. Dit eindigt met het felste groen (R=0
G=255 B=0). Vervolgens herhalen we dit met afbouwen van groen (G -1) naar blauw
(B +1). En als laatste van blauw (B -1) naar rood (R+1). En dan zijn we weer bij het
begin. Zo gaat de regenboog oneindig door!

![sprites](/static/img/maqueen/image-058.png)
![sprites](/static/img/maqueen/image-059.png)


## F. Obstakels vermijden en waarschuwing geven

In deze voorbeeldopdracht combineren we obstakels te vermijden met een vervolgactie
en geluid. De auto toetert als hij een obstakel ziet op 30 cm afstand, hij geeft een
waarschuwing in de display en laat de koplampen kort branden. Bij een afstand van
minder dan 20 cm rijdt hij vervolgens een bocht achteruit om het obstakel
daadwerkelijk te vermijden.

![sprites](/static/img/maqueen/image-060.png)
![sprites](/static/img/maqueen/image-061.png)

### Uitdaging

Combineer deze opdracht met opdracht C Lijn volgen én anti botsing. Volg een lijn,
zorg er voor dat je niet botst, geef waarschuwingen!

Kun jij een echte ambulance maken die zo snel mogelijk zijn eindbestemming moet
bereiken zonder botsingen? Laat voor een mooi effect de Neopixels branden in Rood/Blauw en maak het geluid van een sirene!