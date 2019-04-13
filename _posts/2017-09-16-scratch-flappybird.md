---
title: "Flappy Bird in Scratch"
layout: post
author: Tim
class: stappenplan
tags: [instructies, scratch]
thumbnail: /static/img/flappybird.png
---
We gaan het spelletje Flappy Bird zelf maken in Scratch. Om te beginnen ga je naar [deze pagina](https://scratch.mit.edu/projects/173904279). Klik je op *Bekijk van binnnen* en druk op de *Remix* knop.

De vogel laten vallen
---------------------
Wanneer het spel gestart wordt, moeten we altijd een paar dingen weer opnieuw instellen.

![Stap 1](/static/img/scratch-flappybird-1.svg)
1. Voeg een *maak y* `0` blok toe. Hierdoor begint de vogel altijd in het midden van het scherm.

   Voeg een *maak* `zwaartekracht` `0` blok toe.

![Stap 2](/static/img/scratch-flappybird-2.svg)

{:start="2"}
2. Voeg een *herhaal* blok toe. 

   Binnen het *herhaal* blok, voeg je een *verander y met* blok toe. Sleep vanuit *Variabelen* de variabele *zwaartekracht* op het *verander y met* blok.

   Hierdoor veranderen we de y-positie van de vogel met de waarde van de *zwaartekracht* variabele. De vogel zal omlaag vallen.

   Start het spel om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

De vogel laten vliegen
----------------------
We gaan de vogel laten vliegen door hem omhoog te laten `vallen`. Als de spatiebalk ingedrukt wordt, stellen we de `zwaartekracht` op `6` in, zodat de y-positie voor een korte tijd hoger zal worden.

![Stap 5](/static/img/scratch-flappybird-3.svg)

{:start="5"}
5. Voeg een nieuw *wanneer &#9873; wordt aangeklikt* blok toe.

   Voeg een *herhaal* blok toe met daarbinnen *wacht tot toets* `spatiebalk` *ingedrukt*.

   Voeg een *maak* `zwaartekracht`* blok toe en stel die in op `6`.

   Start het spel en druk op de spatiebalk om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

![Stap 6](/static/img/scratch-flappybird-4.svg)

{:start="6"}
6. Voeg een *start geluid* blok toe en stel die in op `flap`.

   Voeg een *volgend uiterlijk* blok toe, om de vleugels te laten bewegen.

Buizen toevoegen
----------------

![Stap 7](/static/img/scratch-flappybird-5.png)

{:start="7"}
10. Klik rechtsonder in het scherm op het plaatje van de *buizen* om die *sprite* te selecteren.

![Stap 8](/static/img/scratch-flappybird-6.svg)

{:start="8"}
8. Verplaats de buis rechts buiten het scherm, wanneer het spel gestart wordt

   Voeg een *verdwijn* blok toe om de buis onzichtbaar te maken

![Stap 9](/static/img/scratch-flappybird-7.svg)

{:start="9"}
9. Maak iedere `2` seconden een kloon (kopie) van de buis

![Stap 10](/static/img/scratch-flappybird-8.svg)

{:start="10"}
10. Laat de buis verschijnen zodra deze als kloon start

    Stel de buis op een van de drie uiterlijken in

![Stap 11](/static/img/scratch-flappybird-9.svg)

{:start="11"}
11. Laat de buis naar links bewegen
    
    Start het spel om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

![Stap 12](/static/img/scratch-flappybird-10.svg)

{:start="12"}
12. Laat de buis verdwijnen, wanneer hij de rand van het scherm raakt

De vogel tegen de buizen laten botsen
-------------------------------------

![Stap 13](/static/img/scratch-flappybird-11.png)

{:start="13"}
13. Maak linksonder in het scherm de *vogel* sprite actief

![Stap 14](/static/img/scratch-flappybird-12.svg)

{:start="14"}
14. Voeg een nieuw *wanneer &#9873; wordt aangeklikt* toe.

    Wacht totdat de vogel een buis raakt.

![Stap 15](/static/img/scratch-flappybird-13.svg)

{:start="15"}
15. Start het geluid `hit` en wacht totdat het geluid afgspeeld is.

![Stap 16](/static/img/scratch-flappybird-14.svg)

{:start="16"}
16. Stop alle scripts om het spel te stoppen.

Verander het spel nu verder
---------------------------

...zodat je een punt krijgt wanneer er een nieuwe buis verschijnt (hint: maak een variabele met de naam punten)

...of dat je de vogel de bovenkant en onderkant van het scherm niet mag raken

...of dat de buizen steeds sneller gaan bewegen

...of wat je zelf nog voor leuke dingen kunt bedenken!

[Hier](https://scratch.mit.edu/projects/173907357/#editor) vind je het eindresultaat.