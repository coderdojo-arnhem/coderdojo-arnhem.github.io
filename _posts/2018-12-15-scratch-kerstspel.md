---
title: "CoderDojo #25: Scratch Kerstspel 2018"
layout: toc
author: Ines
class: stappenplan
tags: [materiaal, scratch]
redirect_from: /2018/12/15/scratch-kerstspel.html
thumbnail: /static/img/scratch-kerstspel-2018-1.png
---
We hebben een nieuw kerstspel voor dit jaar in Scratch! Help de kerstman om de kadootjes te verzamelen, maar pas op voor de kerstballen, anders breken ze!

* Inhoudsopgave
{:toc}

Voorbereiding
-------------
Om te beginnen ga je naar [deze pagina](https://scratch.mit.edu/projects/935562171/). Klik je op *Bekijk van binnnen* en druk op de *Remix* knop nadat je bent ingelogd.

De kerstman besturen
--------------------
![Stap 1](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-1.svg)

1. Klik op de kerstman. In het begin zetten we de kerstman boven in de hoek en maken we hem klein.

![Stap 2](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-2.svg)

{:start="2"}
2. We gaan de kerstman besturen met de pijltjestoetsen: omhoog, omlaag, rechts en links.

   Je beweegt omhoog en omlaag door y te veranderen. Je beweegt naar links en rechts door de x te veranderen.

   We zetten de "als ... dan ..." code in een herhaal blok. We moeten namelijk de hele tijd kijken of de pijltjestoetsen worden ingedrukt.

   Start het spel en kijkt of het werkt! Let op dat je 10 en -10 opschrijft. Stop het spel voordat je verder gaat.

Kadootjes pakken
----------------
We gaan de kadootjes op verschillende plekken op het scherm laten verschijnen.

![Stap 3](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-3.svg)

{:start="3"}
3. Klik op het kado. We maken het kadootje kleiner (40%) en laten het verdwijnen.

![Stap 4](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-4.svg)

{:start="4"}
4. We maken `10` keer een kloon van het kadootje (`mijzelf`).

![Stap 5](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-5.svg)

{:start="5"}
5. Elke kloon van het kadootje gaat naar een willekeurige plek. Je weet niet van tevoren waar hij verschijnt.

![Stap 6](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-6.svg)

{:start="6"}
6. De kerstman gaat de kadootjes oppakken. Dus als de kadootjes de kerstman aanraken, dan moet er wat gebeuren!

![Stap 7](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-7.svg)

{:start="7"}
7. We gaan de opgepakte kadootjes tellen. We gebruiken een variabele (het oranje blok) om de kadootjes te tellen. 

   We veranderen de `kadootjes` variabele met `1`, als de kerstman het kadootje raakt. Daarna mag het kadootje verdwijnen.

   Start het spel om te kijken wat er gebeurt! Bestuur de kerstman en pak de kadootjes. Werkt het?

   Stop het spel voordat je verder gaat.

De score bijhouden
------------------

![Stap 8](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-8.svg)
We moeten zorgen dat de score voor kadootjes en kapotte kerstballen weer nul wordt als het spel start.

{:start="8"}
8. We voegen daarom de twee oranje blokken *maak kadootjes `0`* en *maak kapotte kerstballen `0`* toe. De rest van de code van de kerstman blijft hetzelfde.

De kerstballen laten bewegen
----------------------------
Klik op de kerstbal. We gaan de kerstbal laten verschijnen en van links naar rechts laten bewegen. De kerstbal breekt als de kerstman hem aanraakt.

![Stap 9](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-9.svg)

{:start="9"}
9. We maken de kerstbal kleiner en dan laten we de kerstbal verdwijnen.

![Stap 10](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-10.svg)

{:start="10"}
10. We maken 10 keer een kloon van de kerstbal.

![Stap 11](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-11.svg)

{:start="11"}
11. Elke kloon van de kerstbal gaat naar een willekeurige plek. Daarna veranderen we het uiterlijk naar de kerstbal en laten we hem verschijnen.

![Stap 12](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-12.svg)

{:start="12"}
12. We laten de kerstbal bewegen. De kerstbal neemt een willekeurig aantal stappen en keert om bij de rand.

    Start het spel en kijk wat er gebeurt. Stop het spel voordat je verder gaat.

![Stap 13](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-13.svg)

{:start="13"}
13. De kerstbal gaat kapot als de kerstman hem aanraakt. We voegen daarom een "als ... dan ..." script toe. Als de kerstbal de kerstman raakt, dan horen we een geluid en veranderen we het uiterlijk van de kerstbal naar "kapotte kerstbal".

![Stap 14](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-14.svg)

{:start="14"}
14. We veranderen de variabele "kapotte kerstballen" ook met 1, en we stoppen dit script. De kapotte kerstbal blijft dus liggen.

    Start het spel om te kijken wat er gebeurt! Breken de kerstballen als de kerstman ze aanraakt?

    Stop het spel voordat je verder gaat.

De kerstboom
------------
Klik op de kerstboom. De kerstboom is het einde van het spel.

![Stap 15](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-15.svg)

{:start="15"}
15. In het begin zetten we de kerstboom in de linkeronderhoek en maken we hem klein.

![Stap 16](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-16.svg)

{:start="16"}
16. Het spel stopt als de kerstman de kadootjes naar de kerstboom heeft gebracht. We controleren daarom in een herhaal script of de kerstboom de kerstman raakt. Als dat gebeurt zegt de kerstboom "Je hebt de kadootjes naar de kerstboom gebracht" en stopt hij alle scripts.

Verander het spel nu verder
---------------------------
...zodat er meer kadootjes zijn.

...zodat de kerstballen van boven naar beneden vallen. (zie de volgende pagina voor een hint!)

...gebruik de variabele "kadootjes" en "kapotte kerstballen". (zie de volgende pagina voor een hint!) ... of wat je zelf nog leuk vind om te bedenken!

Je kunt ook het hele spel [hier](https://scratch.mit.edu/projects/266961980/#player) bekijken

De kerstballen laten vallen
---------------------------
Je kunt het spel zelf proberen aan te passen zodat de kerstballen van boven naar beneden vallen. Klik op de kerstbal.

![Stap 17](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-17.svg)

{:start="1"}
1. De kerstballen bewegen nu met deze code van links naar rechts.

![Stap 18](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-18.svg)

{:start="2"}
2. Vervang de code hierboven door dit stukje code en kijk wat er gebeurt.

De kerstboom wat laten zeggen
-----------------------------
Je kunt variabele (de oranje code blokken) gebruiken om daar iets over te zeggen. Klik op de kerstboom.

![Stap 19](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-19.svg)

{:start="1"}
1. Dit is de code van de kerstboom.

![Stap 20](/static/img/blog/2018-12-15-scratch-kerstspel/scratch-kerstspel-20.svg)

{:start="2"}
2. Je kunt de kerstboom ook laten zeggen hoeveel kadootjes je hebt verzameld.
