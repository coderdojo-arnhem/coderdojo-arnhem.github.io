---
title: "Maqueen Robotauto"
layout: toc
class: stappenplan, block-images
author: Maud
tags: [materiaal, microbit]
---

- Inhoudsopgave
  {:toc}

## Maqueen Robotauto

In deze handleiding van CoderDojo Arnhem worden de basisfunctionaliteiten van de Maqueen robotauto toegelicht.

Per functionaliteit worden de programmeer-blokken die
er bij horen toegelicht en worden voorbeeldprogramma’s gegeven.

Als laatste staan er nog wat uitdagende projecten in waarin meerdere functies gecombineerd worden.

![sprites](/static/img/maqueen/image-005.jpg)

Er wordt uitgegaan van enige basiskennis van de Micro:Bit en de Microsoft MakeCode programmeeromgeving. Heb je dit nog niet, probeer dan eerst [een
beginnersprogramma voor de Micro:Bit](https://coderdojo-arnhem.github.io/materiaal/microbit/).

Deze handleiding is te gebruiken voor ieder niveau en hoeft niet perse van voor tot achter doorgenomen te worden.

Begin bij de basis paragrafen en kijk daarna wat je
leuk vindt om te doen met de robot auto.

<hr />

Deze handleiding is ontleend aan:

[Instructiemateriaal van House of Training](https://house-of-training.nl/cursus/microbit-maqueenprogrammeren/), [instructies van CoderDojo Nijmegen](https://coderdojonijmegen.nl/instructies/microbit/maqueen/), [documentatie van de leverancier van de Maqueen DFROBOT](https://wiki.dfrobot.com/micro_Maqueen_for_micro_bit_SKU_ROB0148-EN),
[documentatie van CodeKids](https://www.codekids.nl/micromaqueen-gebruiken-2/) en andere
documentatie en youtube filmpjes gevonden op internet.

<hr />

## Basis

### Programmeerblokken Maqueen

Als eerste moet je er voor zorgen dat de programmeerblokken voor de Maqueen
toegevoegd worden in de MakeCode programmeeromgeving van de Micro:Bit.

- Start de programmeeromgeving van de Micro:Bit MakeCode: <https://makecode.microbit.org/>
- Klik op Nieuw Project
- Klik rechtsboven op het tandwiel en kies Uitbreidingen.
- Zoek Maqueen. Je ziet nu de uitbereiding Maqueen van DF ROBOT, klik hier op. 

![sprites](/static/img/maqueen/image-000.jpg)

- Je ziet dat er tussen de programmeerblokken een menu onderdeel is toegevoegd:

![sprites](/static/img/maqueen/image-001.png)

### Micro:Bit in de Maqueen plaatsen


Zoals je ziet heeft de Maqueen zelf geen Micro:Bit. Er zit wél een gleuf op om de
Micro:Bit in te stoppen. We gaan eerst testen of het werkt.

- Maak onderstaand programma in MakeCode. Sluit de Micro:Bit met de USB-kabel op
de computer aan en download het programma naar je Micro:Bit. 

![sprites](/static/img/maqueen/image-003.png)

- Bekijk de Maqueen. De Maqueen heeft eigen batterijen. Hij kan dus rijden zonder
aan de computer te zitten voor stroom. Op de achterkant zit een power oftewel een
aan/uit schakelaar. Je ziet de tekst niet zo goed omdat deze onder de batterij zit.
Als de schuif naar links staat, dan staat hij AAN. Je ziet dan linksvoor een rood
lampje branden. Naar rechts is UIT.

{:class="note"}
Zorg er altijd voor dat de Maqueen UIT staat als je de Micro:Bit er in
plaatst! Dan kunnen er geen onverwachte dingen gebeuren.

- Steek de Micro:Bit in de Maqueen. De knoppen en LED
lampjes moeten aan de voorkant zitten richting de
oogjes. De gouden strip met gaatjes en 0/1/2/3V/GND
onderaan.
- Zet de schakelaar om naar links zodat de Maqueen AAN
staat. De LED lampjes links- en rechtsvoor moeten
beide rood gaan branden!
- Je bent nu klaar om een eigen programma te gaan
schrijven voor de Micro:Bit Maqueen robotauto! Vergeet
niet de schakelaar weer naar rechts te zetten zodat de Maqueen UIT staat. Haal
daarna je Micro:Bit uit de Maqueen en ga een nieuw programma schrijven.

![sprites](/static/img/maqueen/image-005.jpg)

### Functies op de Micro:Bit / Maqueen
Op de combinatie van de Micro:Bit en de Maqueen robot auto zitten 8 functies die we
in dit document verder gaan toelichten om te programmeren. Er zitten nog meer
functionaliteiten op de Micro:Bit maar die laten we in dit document buiten
beschouwing. Die gebruiken we niet om de Maqueen robot auto mee aan te sturen
(zou wel kunnen).

### 1. LED lampjes (voorkant)

Voorop de Maqueen zitten twee rode LED lampjes (links LED-L P8 en rechts LED-R
P12). De linker (left) en rechter (right) rode LED zet je aan (on) of uit (off) met
onderstaand programmeerblok.
Lees voor het programmeren verder in paragraaf 1 LED lampen voorkant
(koplampen) laten branden.

![sprites](/static/img/maqueen/image-004.png)

### 2. Motoren

Beide wielen van de Maqueen worden met een aparte motor bestuurd: Links (left)
en Rechts (right). Je kunt aangeven welke richting de motor op moet draaien: naar
voren (forward) of naar achteren (backward). Ook kun je aangeven met welke
snelheid de motoren moeten draaien. De snelheid kan variëren van 0 tot 255. 100
is een mooie rustige snelheid.
De belangrijkste programmeerblokken om de wielen/motoren aan te sturen staan
hieronder. Je kunt ook alle (all) kiezen waarmee je beide motoren tegelijkertijd met
dezelfde snelheid in dezelfde richting aan zet.

![sprites](/static/img/maqueen/image-006.png)

![sprites](/static/img/maqueen/image-007.png)

Lees voor het programmeren verder in paragraaf 2 Motoren aanzetten, bepaal
richting en snelheid.

### 3. Geluid

De Maqueen robot auto beschikt over een eigen speaker/buzzer waarmee je de
Maqueen geluid kunt laten maken. Als je goed kijkt zie je rechtsvoor op de auto een
kleine schakelaar met daarbij poort P0. Met de schakelaar kan je de speaker aan en
uit zetten. Standaard staat de speaker AAN.

{:class="note"}
Let op: de schakelaar is kwetsbaar dus laat hem altijd AAN staan!!

Net achter de Micro:Bit onder de batterijhouder (bijna niet
te zien) zit de speaker zelf waar het geluid uit komt. Om
de Maqueen geluid te laten maken gebruik je de
programmeerblokken uit het menu Muziek.
Lees voor het programmeren verder in paragraaf 3 Geluid:
laat de robotauto muziek maken!

![sprites](/static/img/maqueen/image-009.jpg)

### 4. Neopixels (onderkant)

Draai de Maqueen maar eens om en kijk op de onderkant.
Daar zie je 4 RGB lampjes die apart kunt programmeren.
RGB staat voor Rood Groen Blauw. Deze lampjes kunnen
dus Rood, Groen en Blauw licht geven, maar je kunt de
kleuren ook combineren zodat ze ieder kleur van de
regenboog kunnen schijnen.
Deze RGB lampjes worden ook wel NeoPixels genoemd. Je
ziet op de printplaat RGB0, RGB1, RGB2 en RGB3 staan
(P15).

![sprites](/static/img/maqueen/image-008.jpg)

![sprites](/static/img/maqueen/image-010.jpg)

De NeoPixels bestuur je met de blokken die te vinden zijn in
het menu NeoPixels. Dit is ook geen standaard menu in het
MakeCode programma. Je moet deze blokken, net als de
blokken voor de Maqueen, eerst toevoegen. Ga rechtsboven
naar het tandwieltje, klik op uitbereidingen en zoek naar de
uitbereiding Neopixels. Waarschijnlijk staat deze al in beeld
omdat hij veel gebruikt wordt.

![sprites](/static/img/maqueen/image-011.png)

Na klikken op de uitbereiding Neopixel zie je dat er een extra
menu toegevoegd is in je lijst met daarin veel nieuwe blokken.
Er staat ook “meer…” onder, omdat er nog veel blokken voor
Neopixels zijn. Die passen niet allemaal in één lijstje.
Lees voor het programmeren verder in paragraaf 4 Neopixels aan de onderkant
laten branden.

### 5. Ultrasoon / afstand meten

Voor op de Maqueen zitten twee ‘ogen’, dit zijn de
ultrasone sensoren. Met deze sensoren kun je vrij
nauwkeurig afstanden meten tot objecten tussen de 2
cm en 4 meter. Het idee is simpel. De sensor zendt
een geluidsgolf uit op een speciale frequentie. Zodra
de geluidsgolf een object raakt wordt het signaal
weerkaatst in een echo. Een ontvanger vangt de echo
op en berekent de afstand op basis van de tijd die de
weerkaatste geluidsgolven er over doen om ontvangen
te worden. Bij de Maqueen is het linker oog de zender
en het rechteroog de ontvanger.

![sprites](/static/img/maqueen/image-013.jpg)

![sprites](/static/img/maqueen/image-015.jpg)

De afstand die de sensor meet heet in MakeCode Ultrasonic Sensor eenheid. Met
onderstaand blok kun je de afstand die gemeten wordt uitlezen en gebruiken in je
programma.

![sprites](/static/img/maqueen/image-012.png)

Lees voor het programmeren verder in paragraaf 5 Ultrasoon: obstakels vermijden.

### 6.Lijnvolg sensoren

Onderop, achter het voorwiel, zitten twee lijn volg
sensoren. Er staat Line-R (P14) en Line-L (P15) bij.
Deze sensoren maken gebruik van infrarood
lichtsignalen. De sensor zendt een lichtsignaal uit en
als dat weerkaatst levert dat een positieve waarde
op, een 1. Wordt het signaal niet weerkaatst dan
levert dit een negatieve waarde op, een 0. Wit
reflecteert goed, dus dat geeft een 1. Zwart
reflecteert niet dus dat levert een 0 op. Met het slim
programmeren van deze lijnsensoren kan de auto
een zwarte lijn volgen.

![sprites](/static/img/maqueen/image-014.jpg)

Wat deze sensoren meten heet in MakeCode Read left/right line tracking sensor
oftewel Lees links/rechts route geleiding.

![sprites](/static/img/maqueen/image-016.png)

Lees voor het programmeren verder in paragraaf 6 Lijn volgen.

### 7. Infrarood (IR)

Infrarood werkt, zoals het woord al zegt, met infrarood licht signalen. Infrarood
signalen worden onder andere gebruikt in afstandsbedieningen. Met een
afstandsbediening kun je een apparaat niet alleen aan en uit zetten maar ook
opdrachten geven om voorgeprogrammeerde functies uit te voeren. De
afstandsbediening zendt binaire codes uit door te knipperen met onzichtbaar
infrarood licht. Een binaire code bestaat uit enen en nullen. Een korte knip staat
voor 0 en een lange voor 1.
De Maqueen robot auto heeft voorop, als een soort neusje, een infrarood sensor die
de infrarood lichtsignalen van de afstandsbediening kan ontvangen. Wat deze
sensor meet heet in MakeCode Read IR key value oftewel Lees infrarood waarde. Je
vindt de programmeerblokken voor het gebruik van Infrarood in het menu IR. Dit
menu staat standaard in de lijst.

![sprites](/static/img/maqueen/image-017.png)

Lees voor het programmeren verder in paragraaf 7 Infrarood besturing.

### 8. Lichtmeter

De LEDs op de display van de Micro:Bit kunnen niet alleen licht tonen, maar ze
kunnen ook het aanwezige licht meten. Hierdoor kun je opdrachten geven wat de
robotauto moet doen als het bijvoorbeeld donker wordt, maar ook wat het moet
doen als het licht een bepaalde sterkte heeft.

Lees voor het programmeren verder in paragraaf 8 Lichtsterkte gebruiken.

![sprites](/static/img/maqueen/image-018.jpg)

## 1. Koplampen laten branden

In de basis uitleg staat de code om de rode LED lampjes aan de voorkant continu te
laten branden. Dat is wel een beetje saai. We gaan nu de rechter koplamp laten
branden als je knop A indrukt en de linker koplamp laten branden als je B indrukt.
Druk je A en B tegelijkertijd in, dan gaan ze beide branden. Hieronder staat de code
die je moet gebruiken:

![sprites](/static/img/maqueen/image-019.png)

We willen eigenlijk dat de lampjes niet continu, maar slechts 2 seconden blijven
branden. Voeg daarvoor een pauzeerblokje toe in je code. Na het pauze blokje moet je
aangeven dat het lampje uit moet gaan.

![sprites](/static/img/maqueen/image-020.png)

Dit is ook nog saai! Probeer onderstaande code om de lampjes continu afwisselend te
laten branden. Valt je nog wat anders op?

![sprites](/static/img/maqueen/image-021.png)

Meer experimenteren met de koplampen? Kijk bij A Robotdans en D Knipperen op de
zebra.

## 2. Rijden en sturen

Nu gaan we de Maqueen laten rijden. Dat doen we door de motoren van de wielen aan
te sturen.

<div class="note center">
  <strong>LET OP</strong>
  <p>Zorg er altijd voor dat de Maqueen <strong>UIT</strong> staat als je de Micro:Bit er in stopt.</p>
  <p>Zet de Maqueen op de grond en zet dan de schakelaar op <strong>AAN</strong>.</p>
  <p>Zet als je klaar bent de schakelaar <strong>UIT</strong>!</p>
</div>

Gebruik onderstaande code voor de basisaansturing van de beide motoren. Beide motoren tegelijkertijd in snelheid 100 aanzetten bij opstarten gaat als volgt:

![sprites](/static/img/maqueen/image-022.png)

Het is dan ook handig te programmeren dat de motoren bv bij
schudden weer uitgaan (let op, dit werkt niet als je de motoren
bij het aanzetten in een blauw “de hele tijd” blok zet!).

![sprites](/static/img/maqueen/image-023.png)

Door de twee motoren met verschillende snelheid te laten rijden of zelfs in een andere richting, kun je bochten maken en achteruit rijden. Probeer onderstaande code uit en kijk wat de Maqueen doet. Kun je het programma volgen als de Maqueen aan het rijden is?

![sprites](/static/img/maqueen/image-024.png)

Meer experimenteren met het rijden met de Maqueen? Kijk bij A Robotdans en B Patronen rijden.

## 3. Geluid

Bij het stukje over de rode koplampen heb je
al gebruik gemaakt van de geluid optie op de
Maqueen. Dat deed je door het blok “speel
toon” te gebruiken uit het menu Muziek. Met
dit blokje kun je zelf de toon kiezen. Met
beat bepaal je hoe lang de toon moet zijn; 4
beat is de langste toon, 1/16 de kortste. Wil
je een korte pauze, gebruik dan het blokje
"rust". Ook hier bepaal je met beat hoe lang
de rust moet zijn.

![sprites](/static/img/maqueen/image-025.png)

In het menu Muziek zitten veel meer opties voor muziek en melodieën. Je kunt ook je eigen melodie samenstellen. De snelste methode om een melodie te spelen is met het blokje "play melody". Klik op de editor en je kunt in elke kolom een toonhoogte kiezen.

Bepaal linksonder het tempo waarmee de melodie moet
worden afgespeeld. Gebruik de play knop om af te spelen.
Er zijn ook voorbeeld melodieën opgenomen in het
programma. Die vind je bij de Gallerij optie. Probeer maar
wat uit, maar zelf maken is natuurlijk het allerleukste!

![sprites](/static/img/maqueen/image-027.png)

Meer experimenteren met muziek? Kijk bij A Robotdans en
F Obstakels vermijden en waarschuwing geven.

## 4. Neopixels aan de onderkant

Onder op de Maqueen zitten 4 Rood/Groen/Blauw Neopixels lampjes. In de basis paragrafen is uitgelegd hoe je de programmeerblokken voor deze Neopixels kunt
toevoegen.

Als je wil dat de Micro:Bit een aangesloten apparaat gaat aansturen dan moet je helemaal aan het begin van je programma aangeven om welk apparaat het gaat. Zie het als een soort gebruiksaanwijzing. De Micro:Bit heeft zelf geen Neopixels; hij weet
helemaal niet dat ze bestaan. Dat moeten wij als eerste aan de Micro:Bit vertellen en
uitleggen. Dat doen we in het blokje “bij opstarten”.

We moeten eerst een variabele aanmaken. Dat doe je in het menu Variabelen; klik op "Maak een variabele" en noem hem Neopixel.
Kies dan uit het menu Neopixel het blok "stel strip in op...". Wijzig de naam “strip” in de variabele naam die we net aangemaakt hebben: “Neopixel”. Vervolgens moeten we nog aan de Micro:Bit vertellen op welke poort de Neopixels zitten; dan kan hij ze vinden. De poort staat onderop de Maqueen bij RGB0, dat is Pin 15. Kies uit de lijst dus P15. Als laatste moeten we aangeven hoeveel lampjes we
hebben. Wij hebben 4 Neopixel RGB lampjes. Kies “4” in het programmeerblok. Laat bij kleur RGB (GRB format) staan.

![sprites](/static/img/maqueen/image-026.png)


{:class="note"}
Nu weet de Micro:Bit bij opstarten dat er 4 RGB lampjes aangesloten zijn en waar deze lampjes zich bevinden!

Tijd om de Neopixels te laten branden! Via het programma hiernaast, laten we de ___4 Neopixels allemaal in dezelfde kleur schijnen___. Kies zelf de kleuren uit het lijstje. Met het pauzeerblokje bepaal je hoe
lang de kleur moet schijnen. Door meerdere blokjes achter elkaar te zetten schijnen de Neopixels steeds korte tijd in een andere kleur. Omdat de blokjes in een groot blok “de hele tijd” staan, blijft de
Maqueen dit steeds herhalen.

![sprites](/static/img/maqueen/image-028.png)


Tot nu toe heb je bestaande kleuren uit de lijst gebruikt voor de Neopixels. Het is leuker als je helemaal je ___eigen kleur___ kunt ___kiezen___. In elke kleur zitten deeltjes Rood, deeltjes Groen en deeltjes Blauw. Elke kleur heeft een waarde van 0 tot 255. Door de waarden te combineren maak je een unieke kleur. Hoe hoger de waarde hoe feller de
kleur wordt dus hoe meer er van die kleur gebruikt wordt in je uiteindelijke kleur.

![sprites](/static/img/maqueen/image-030.jpg)

Zoek met google op “online
kleurkiezer”. Je ziet direct een
afbeelding met een schuifje. Kies de
kleur die je wil en noteer de RGB
waarde. Bijvoorbeeld 66, 132, 245 voor
een mooie kleur blauw. In deze kleur zit
66 Rood, 132 Groen en 245 Blauw.

![sprites](/static/img/maqueen/image-029.png)

Nu gaan we een programma schrijven waarin we de lampjes laten
knipperen in de zelfgekozen kleuren. Met het blokje “Neopixel
set pixel color at… “ geef je met het volgnummer
achter “at” aan om welk lampje het gaat. Op de
printplaat op de onderkant van de Maqueen staat bij
elke Neopixel RBG0, RGB1, etc. Als je dus 0 kiest dan
stuur je hiermee Neopixel RGB0 aan. Met de cijfertjes
bij de kleuren maak je precies de kleur die je wil.
Vervolgens moet je met het blokje “Neopixel show” aangeven dat de lampjes moeten gaan branden en met het pauzeer blok hoe lang. In de code hier naast zetten we daarna de lampjes 500 ms uit.

![sprites](/static/img/maqueen/image-031.png)

Het is ook mogelijk de ___4
Neopixels om en om te
laten branden___. Daarvoor
gebruik je de variabele
“index” (aanmaken). De
variabele “index” verwijst
naar de afzonderlijke
Neopixels: index 0 is
lampje RGB0, index 1 is
lampje RB=GB1 enz.
Met het programma hier
naast, laten we de
Neopixels om en om kort in
groen schijnen. Tussendoor
gaat het licht even uit. Het
lijkt alsof het licht onder de
Maqueen rond gaat.

![sprites](/static/img/maqueen/image-032.png)

Probeer zelf met dupliceren meerdere van deze “blokken” onder elkaar en geef de Neopixels telkens een andere kleur. Kijk wat een mooi effect!

Dit kan ook door nog slimmer te programmeren met een herhaalblok en een variabele voor de kleur. Probeer maar uit of jou dat lukt!

Meer experimenteren met de Neopixels? Kijk bij E Neopixels infaden en uitfaden (en regenboogkleuren). Daar leer je ook hoe je regenboogkleuren maakt.

## 5. Ultrasoon: obstakels vermijden

Met de ultrasoon sensor kan de Maqueen de afstand meten tussen zichzelf en een
obstakel wat voor hem staat. Dat is handig om obstakels te kunnen ontwijken.

Eerst gaan we testen door de afstand tot een object te tonen op de Micro:Bit. Dat doen
we met een blok `de hele tijd`. We willen dat de Maqueen continu afstanden blijft
meten. Plaats binnen dit blok een blok `toon nummer` met daarbinnen de variabele
`read ultrasonic sensor`. Zet de maateenheid in cm.

![sprites](/static/img/maqueen/image-033.png)

Test je programma met de Maqueen. Plaats je hand of een ander object op een
bepaalde afstand. Op de display van de Micro:Bit verschijnt de gemeten afstand in
centimeters.

Het voorgaande gaan we nu gebruiken in een programma. We gaan de Maqueen leren
om zelfstandig te rijden. We schrijven een programma waarin de auto in principe
rechtdoor mag rijden. Zodra de Maqueen een object ziet in minder dan 20 cm, dan
moet de auto 1 seconde een bocht achteruit rijden. Daarna mag de auto weer vooruit
gaan rijden, mits er geen object gezien wordt op een afstand van 20 cm of minder. De
Maqueen zal op deze manier altijd blijven rijden en obstakels vermijden.

![sprites](/static/img/maqueen/image-034.png)

Het voorgaande programma werkt, maar het kan veiliger. In het voorgaande
programma hebben we een ALS…DAN blok gebruikt. Nu gaan we een
ALS…DAN…ANDERS instructie gebruiken. Pas het voorgaande programma aan. Haal de
eerst instructie (motor all move forward at speed 100) weg en klik op het + symbool.
Je ziet dat de opdracht een ANDERS deel erbij krijgt. Plaats hierbinnen het codeblok
“motor all move forward at speed 100”.

Dit is een betere manier van programmeren. Je stelt eerst een voorwaarde “kijk of er
een obstakel binnen 20 cm aanwezig is”, zo ja, dan moet de auto een bocht naar
achteren rijden, zo niet, dan pas mag de auto vooruit gaan rijden. Het programma is
nu veel veiliger.

## 6. Lijn volgen

De Maqueen kan een zwarte lijn volgen. Daarvoor gebruikt hij de twee sensoren aan de
onderkant die zwart of wit kunnen detecteren. Wit is 1 (reflecteert alles) en Zwart is 0
(geen reflectie).

![sprites](/static/img/maqueen/image-036.jpg)

We gaan nu een eerste programma schrijven. Zolang de waardes die
gezien worden 0 zijn, zwarte ondergrond dus, rijdt de auto rustig
rechtdoor. Als hij aan één kant wit ziet dan blijft hij ook nog
rechtdoor rijden, maar zodra links én rechts wit wordt gezien
(waardes worden beide 1) dan stopt de Maqueen. Dit programma
kan bijvoorbeeld gebruikt worden om 2 Maqueen auto’s rechtdoor
tegen elkaar te laten racen.
Maak eerst een variabele en noem deze `snelheid`. Geef de snelheid
in het blok `bij opstarten` een beginwaarde, bv 255 voor de
maximum snelheid. 

Programmeer vervolgens een ALS … DAN blok met daarin: als links of rechts zwart
gezien wordt rij dan met “snelheid” rechtdoor. Voeg tot slot bij ANDERS een blok stop
motoren toe.

![sprites](/static/img/maqueen/image-037.png)

Nu gaan we het programma aanpassen. We willen niet dat de auto stopt als hij aan
beide kanten wit ziet, maar we willen dat hij zichzelf corrigeert. Hij moet een beetje
bijsturen richting de zwarte lijn zodat de zwarte lijn altijd gevolgd wordt.

Er kunnen zich 4 situaties voordoen:

- 0 en 0 -> beide sensoren zien de zwarte lijn
- 0 en 1 -> rechter sensor ziet geen zwarte lijn
- 1 en 0 -> linker sensor ziet geen zwarte lijn
- 1 en 1 -> beide sensoren zien geen zwarte lijn

Voor elke situatie moet een instructie geschreven worden. De code staat hieronder.
Probeer dit nu zelf uit op een parcours met zwarte lijnen! Blijft jouw auto de zwarte lijn
volgen?

![sprites](/static/img/maqueen/image-038.png)

Meer experimenteren met afstand meten en hier acties aan verbinden? Kijk bij C Lijn
volgen én anti botsing.

## 7 .Infrarood besturing

De Maqueen is ook aan te sturen met een willekeurige infrarood afstandsbediening.
Voordat je gaat programmeren met een afstandsbediening, zul je eerst moeten weten
welke nummers horen bij welke knoppen op je afstandsbediening. Kies 5 knoppen op
de afstandsbediening die je wil toewijzen aan 5 functies van de Maqueen. Wij kiezen
vooruit, achteruit, bocht links, bocht rechts en stoppen maar je kunt ook wat anders
kiezen om de Maqueen te laten doen.

![sprites](/static/img/maqueen/image-039.jpg)

Nu gaan we uitzoeken welke message jouw afstandsbediening stuurt bij het indrukken
van een knop. Plaats in de MakeCode omgeving het blokje `on IR received
message` uit het IR menu. Hiermee geeft je de Maqueen de opdracht om de infrarood
sensor te activeren en te wachten tot het een signaal binnen krijgt. Dat signaal is de
message, het bericht. Zodra er op de afstandsbediening op een knop gedrukt wordt,
dan wordt er een message verstuurd. We willen het nummer van deze message op de
display van de Micro:Bit zien. Dat kan met de volgende code; hierin wordt de variabele
message gebruikt:

![sprites](/static/img/maqueen/image-040.png)

Zet dit programma op de Micro:Bit. Zet de Micro:Bit in de Maqueen. Klik op de
knoppen van de afstandsbediening en kijk welk nummer verschijnt. Noteer de knop en
de bijbehorende nummers!

Nu kun je de knoppen/nummers koppelen aan acties van de Maqueen. In het
onderstaande programma is 9 gebruikt voor vooruit rijden, 8 voor achteruit, 10 voor
rechts, 0 voor links en 15 voor stoppen.

![sprites](/static/img/maqueen/image-041.png)

Probeer je eigen afstandsbediening en bestuur de Maqueen met functies die je zelf
gekozen hebt!

## 8. Lichtsterkte gebruiken

De LEDs op de display van de Micro:Bit kunnen niet alleen licht tonen, maar ze kunnen
ook het aanwezige licht meten. Dit gaan we gebruiken. We gaan de lichtmeter van de
display van de Micro:Bit programmeren. Hoe meer licht op de display wordt
geschenen, hoe meer LED lampjes zullen oplichten.

Maak eerst een variabele en noem deze “lichtmeter”. Maak vervolgens onderstaande
code. Met deze code zal de ingebouwde lichtmeter van de Micro:Bit gaan reageren op
het huidige lichtniveau.

![sprites](/static/img/maqueen/image-042.png)

Nu willen we het gemeten lichtniveau op de display gaan weergeven. Gebruik hiervoor
de programmeerblokjes uit het menu “lichtjes” een kies `plot staafdiagram van ... tot ...`.
Plaats de variabele “lichtmeter“ in het eerste plekje waar de `0` staat; voeg als tweede
de maximale waarde van de lichtsterkte toe. De minimale waarde is `0`; de maximale is
`255`.

![sprites](/static/img/maqueen/image-043.png)

Test je code eerst in de simulator. Linksboven staat een
schuifje waarmee je de lichtsterkte hoger en lager kunt
zetten. Zie je de LED lampjes hoger en lager worden?

![sprites](/static/img/maqueen/image-044.jpg)

Download nu de code naar je Micro:Bit en ga de
lichtmeter in het echt testen. Ga met de Micro:Bit in een
donkere ruimte staan. Verdwijnen de lichtjes op de
display? Of schijn met een zaklamp op de display.
Verschijnen er meer lampjes?

Je kunt deze functionaliteit nu gaan gebruiken in een programma om de Maqueen te
laten rijden. Is het te donker, dan stopt de auto. Is er voldoende licht, dan gaat hij
rijden!

Bouw het onderstaande programma. Als de lichtsterkte groter is dan 70 dan moet de
auto gaan rijden. Voldoet hij niet aan deze voorwaarde, dan zal de auto stoppen. Test
het programma uit met een zaklamp.

![sprites](/static/img/maqueen/image-045.png)

### Uitdaging

Laat de auto langzaam harder rijden als er meer licht op de display schijnt.
Of zorg dat de lampen aan gaan als de Maqueen in een tunnel rijdt.

## Combinatie opdrachten

Krijg je er maar geen genoeg van? Kijk dan ook eens bij de [combinatie opdrachten](https://coderdojo-arnhem.github.io/materiaal/microbit-maqueen-combinatie-opdrachten/) voor nog meer uitdagingen!
