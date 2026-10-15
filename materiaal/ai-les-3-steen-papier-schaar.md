---
title: "AI les 3: Steen, papier, schaar"
layout: scratch
class: stappenplan
tags: [materiaal, ai, scratch]
---

## Steen, papier, schaar

Je gaat steen, papier, schaar spelen tegen de computer. Jij doet je zet met je hand voor de webcam. De computer kiest ook iets, en zegt wie er gewonnen heeft.

Maar eerst moet een model jouw hand leren herkennen. Dat doe je zelf, net als in [les 2](/materiaal/ai-les-2-zelf-trainen): foto's maken, trainen, testen. Daarna gebruik je je model in Scratch.

**Wat heb je nodig?** Een laptop met webcam en Chrome of Edge. Je hebt geen account nodig. Werk met z'n tweeën: de een doet de hand, de ander klikt.

## Maak een project

> Ga naar [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk/).
>
> Klik bovenin in het menu op **Log In** (naast *Help*) en dan op **Probeer nu**, onder het kopje *Probeer zonder te registreren*. Vink **Ik ben geen robot** aan.
>
> Klik op **Voeg een nieuw project toe** en vul in:

- **Projectnaam:** `steen papier schaar`
- **Project Type:** *Herkenning afbeeldingen*
- **Storage:** *In your web browser*

> Klik op **Creëer** en open je project.

{:class="note"}
Heb je in les 2 al een project gemaakt en staat dat er nog? Je mag zonder account maar één project tegelijk hebben. Verwijder het oude project eerst. Staat de site in het Engels? Rechtsboven bij **Language** kies je **Nederlands**.

## Drie labels, dertig foto's

> Klik op **Train**.
>
> Maak met **Voeg een nieuw label toe** drie labels: `steen`, `papier` en `schaar`.

> Klik bij **steen** op **webcam**. Maak een vuist en klik op **Voeg toe**. Maak zo minstens 10 foto's.
>
> Doe hetzelfde bij **papier** (platte hand) en **schaar** (twee vingers).

Denk aan les 2: bij elke foto iets anders. Dichterbij, verder weg, schuin, links, rechts. Wissel ook van hand met je maatje, dan kent de computer jullie allebei.

## Train en test

> Klik op **< Terug naar project**, dan op **Leer & Test**, dan op **Train nieuw machine learning model**.

Wacht een halve tot twee minuten.

> Klik op **Test met webcam** en probeer alle drie de gebaren.

Gaat het goed? Doe dan ook de uitdagende test uit les 2: andere plek, andere hand, verder weg. Gaat het mis? Maak dan nu al extra foto's en train opnieuw. Straks in Scratch is het lastiger om terug te gaan.

## Open Scratch

We gebruiken een speciale versie van Scratch, waarin je het geleerde model kunt gebruiken. Het ziet er hetzelfde uit en werkt hetzelfde als je gewend bent, maar je kunt niet inloggen in je account en je spel daar in opslaan. Je kunt je spel wel downloaden (zie verderop).

> Klik op **< Terug naar project** en dan op **Maak**.
>
> Klik op **Scratch 3** en daarna op **Open in Scratch 3**.

Scratch opent in een nieuw tabblad. Dit kan even duren.

Scrol in de blokkenlijst links helemaal naar beneden. Onder **Mijn blokken** staat een categorie met de naam van je project: **steen papier schaar**. Daarin zitten deze blokken:

```scratch
(herken afbeelding [image] (label) :: extension)
(herken afbeelding [image] (zekerheid) :: extension)
(steen :: extension)
(papier :: extension)
(schaar :: extension)
```

Het eerste blok is het belangrijkste: je stopt er een afbeelding in, en er komt *steen*, *papier* of *schaar* uit. Maar hoe krijg je een foto van je hand in dat blok? Daarvoor staat er nog een categorie in de blokkenlijst.

> Zoek in de blokkenlijst de categorie **Images**. Die staat er al, die hoef je niet toe te voegen.

Daarin zitten onder andere:

```scratch
(webcam image :: extension)
(kostuum afbeelding :: extension)
bewaar screenshot als kostuum :: extension
```

<scratch class="pen">webcam image</scratch> is een foto van wat je webcam nu ziet. Die stop je straks in het herken-blok.

{:class="note"}
Staan de blokken van je project er niet? Dan was Scratch al open voordat het model klaar was. Sluit het Scratch-tabblad en open het opnieuw via **Maak**. En: de blokken kunnen deels Engels heten (*recognise image*, *costume image*). De vorm is hetzelfde.

## Zet de camera aan

Het is handig als je jezelf op het podium ziet, dan weet je of je hand goed in beeld is.

> Klik linksonder op **Voeg een uitbreiding toe** (het blokje met de plus) en kies **Video** (in het Engels: *Video Sensing*).

Scratch vraagt om je camera. Klik op **Toestaan**. Je ziet jezelf op het podium.

> Klik op de kat en maak dit programma:

```scratch
wanneer groene vlag wordt aangeklikt
zet video [aan v] :: extension
maak doorzichtigheid video (0) :: extension
maak [score v] (0)
zeg [Druk op de spatiebalk voor je zet!]
```

Maak eerst de variabele `score` aan bij **Variabelen**.

## Doe je zet

Nu de foto. Als je op de spatiebalk drukt, maakt het programma een foto met de webcam en stuurt die naar het model. Het model geeft terug welk label erbij hoort.

> Maak bij **Variabelen** twee variabelen: `mijn zet` en `computer`.
>
> Maak bij **Variabelen** ook een **lijst** met de naam `zetten`. Klik op de plus onder de lijst op het podium en typ er `steen`, `papier` en `schaar` in.

> Maak dit programma op de kat:

```scratch
wanneer [spatiebalk v] is ingedrukt
maak [mijn zet v] (herken afbeelding (webcam image :: extension) (label) :: extension)
maak [computer v] (item (willekeurig getal tussen (1) en (3)) van [zetten v])
zeg (voeg (voeg (mijn zet) en [ tegen ] samen) en (computer) samen) (2) sec.
```

Sleep het blok <scratch class="pen">webcam image</scratch> uit de categorie **Images** in het witte vakje van <scratch class="pen">herken afbeelding</scratch>.

Klik op de groene vlag, hou je hand voor de camera en druk op de spatiebalk. De kat zegt bijvoorbeeld *papier tegen schaar*. Klopt de herkende zet?

{:class="note"}
Het herkennen duurt een paar tellen. Hou je hand stil tot de kat iets zegt.

## Wie wint?

Nu moet de kat uitrekenen wie er gewonnen heeft. Steen wint van schaar, schaar wint van papier, papier wint van steen.

> Maak bij **Variabelen** nog een variabele: `uitslag`.
>
> Zet dit onder het vorige programma, in plaats van het <scratch class="uiterlijk">zeg</scratch>-blok:

```scratch
maak [uitslag v] [De computer wint!]
als <(mijn zet) = (computer)> dan
maak [uitslag v] [Gelijkspel!]
einde
als <<(mijn zet) = [steen]> en <(computer) = [schaar]>> dan
maak [uitslag v] [Jij wint!]
einde
als <<(mijn zet) = [papier]> en <(computer) = [steen]>> dan
maak [uitslag v] [Jij wint!]
einde
als <<(mijn zet) = [schaar]> en <(computer) = [papier]>> dan
maak [uitslag v] [Jij wint!]
einde
als <(uitslag) = [Jij wint!]> dan
verander [score v] met (1)
einde
zeg (voeg (voeg (mijn zet) en [ tegen ] samen) en (computer) samen) (2) sec.
zeg (uitslag) (2) sec.
```

Eerst gaan we ervan uit dat de computer wint. Daarna kijken we of het gelijkspel is, of dat jij toch wint. Speel een paar rondes. Werkt het?

## Test hoe goed het werkt

Speel tien rondes en schrijf op:

- Hoe vaak werd je zet goed herkend?
- Bij welk gebaar ging het het vaakst mis?
- Wat gebeurt er als je maatje speelt in plaats van jij?
- Wat gebeurt er als je op de spatiebalk drukt zonder je hand in beeld?

Ging het vaak mis? Dan heeft je model meer voorbeelden nodig. Ga terug naar het tabblad van Machine Learning for Kids, maak bij **Train** extra foto's van precies dat wat misging, en train opnieuw bij **Leer & Test**. Sluit daarna Scratch en open het opnieuw via **Maak**, anders gebruikt Scratch nog het oude model.

{:class="note"}
Sla je Scratch-project eerst op (zie de laatste stap), anders ben je je blokken kwijt.

## Bewaren

> Klik in Scratch op **Bestand** en dan op **Opslaan op je computer**.

Er komt een bestand dat eindigt op `.sb3` in de map Downloads. Geef het je eigen naam.

{:class="note"}
Dit bestand werkt **niet** op scratch.mit.edu, want gewone Scratch kent jouw AI-blokken niet. Het opent wél weer in de Scratch van Machine Learning for Kids, via **Bestand** en **Laden van je computer**. Je model is dan wel weg (na vier uur), dus train thuis eerst opnieuw een model met dezelfde drie labels.

## Extra uitdagingen

- **Lage zekerheid?** In je categorie zit ook <scratch class="pen">herken afbeelding (webcam image) (zekerheid)</scratch>. Dat geeft een getal van 0 tot 100. Bouw: als de zekerheid kleiner is dan 60, zegt de kat "Ik weet het niet zeker, probeer nog eens" en telt de ronde niet mee. Nu heeft je programma wél een uitkomst "geen idee".
- **Laat het zien.** Zet een tweede sprite op het podium die het uiterlijk van de computerzet aanneemt: een steen, een vel papier, een schaar. Teken ze zelf bij **Uiterlijken**.
- **Beste van vijf.** Tel ook de punten van de computer en stop het spel als iemand drie punten heeft.
- **Aftellen.** Laat de kat "steen... papier... schaar!" zeggen en maak pas dan de foto. Dat is eerlijker.
- **Vier gebaren.** Voeg in Machine Learning for Kids een vierde label toe, bijvoorbeeld *hagedis* of *Spock*. Train opnieuw, open Scratch opnieuw, en pas de regels aan.

## Wat heb je geleerd?

- Een zelfgetraind model kun je **gebruiken in je eigen programma**. In Scratch wordt het gewoon een blokje.
- Je programma is maar zo goed als je model. Gaat het mis, dan help je met **betere foto's**, niet met meer code.
- Met de **zekerheid** kan je programma "weet ik niet" als uitkomst geven. Dat is slimmer dan altijd maar iets kiezen.
