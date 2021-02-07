---
title: "Flappy Bird in Scratch"
layout: toc
class: stappenplan
author: Tim
tags: [materiaal, scratch]
redirect_from:
  - /2017/09/16/scratch-flappybird
  - /2017/09/16/scratch-flappybird.html
---


- Inhoudsopgave
  {:toc}



## Inleiding

Wil je zelf eens proberen het spelletje Flappy Bird in Scratch te maken? Probeer dan deze instructies die we voor CoderDojo #12 maakten!

Om te beginnen ga je naar [deze pagina](https://scratch.mit.edu/projects/173904279). Klik op _Bekijk van binnen_ en druk op de _Remix_ knop.

Heb je geen _Remix_ knop, dan moet je eerst inloggen. Inloggen kan rechtsboven. 

Heb je nog geen inlog, klik dan eerst op _Word Scratcher_ en volg de stappen. 
Je bent direct ingelogd in Scratch en kunt aan de slag. 
Je ontvangt ook een e-mail. Om het aanmaken van je account af te ronden, klik je in de mail op de link. 
Je kunt nu projecten delen met anderen (bijvoorbeeld met CoderDojo Arnhem).

## De basis

Laten we eerst eens kijken wat we in dit spel beschikbaar hebben. 

![sprites](/static/img/flappybirdsprites.png)

__Sprites (oftewel de hoofdrolspelers in je spel):__ 
Rechtsonder zie je dat er in dit spel twee sprites zijn. Eentje die _vogel_ heet (flappy bird) en eentje die _buizen_ heet.

Als je rechts klikt op de vogel en daarna links op het tabblad __uiterlijken__, dan zie je dat flappy bird drie uiterlijken heeft: vogel1, vogel2 en vogel3. 
Zie jij het verschil? Dit gaan we straks gebruiken om flappy bird echt te laten vliegen! 

Als je klikt op de sprite van de buizen dan zie je daar ook drie verschillende uiterlijken: buizen1, buizen2 en buizen3. 
Het gat tussen de buizen zit steeds op een andere plek.


__Geluiden:__
Bij de sprite van de vogel zie je ook nog een tabblad _geluiden_. 
In dit spel zijn 2 geluiden beschikbaar: het geluid _flap_ en het geluid _hit_. Luister maar eens.

__Achtergrond:__
Als je rechts in je scherm kijkt, dan zie je dat de achtergrond voor dit spel ook al beschikbaar is in deze remix: 

![achtergrond](/static/img/achtergrondflappy.png)

Laten we beginnen met programmeren van het spel!


## De vogel laten vallen

Klik op de sprite _vogel_. Klik links op het tabblad _code_. Het blok _Wanneer &#9873; wordt aangeklikt_ staat er al.

Bij de start van het spel moeten we eerst een paar dingen basis dingen instellen.

![Stap 2](/static/img/scratch-flappybird-2.svg)

1. Voeg een _maak y_ `0` blok toe. Hierdoor begint de vogel altijd in het midden van het scherm.

   Voeg een _maak_ `zwaartekracht` `0` blok toe. Dit blok is te vinden bij variabelen.

{:start="2"}

2. Voeg een _herhaal_ blok toe.

   Binnen het _herhaal_ blok, voeg je een _verander y met_ blok toe. Sleep vanuit _Variabelen_ de variabele `zwaartekracht` op het _verander y met_ blok.
   Hierdoor veranderen we de y-positie (verticaal) van de vogel met de waarde van de `zwaartekracht` variabele. De vogel zal omlaag vallen.

   Voeg ook een blok _verander `zwaartekracht` met_ toe. Geef deze de waarde `-1`
   
   Start het spel om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

## De vogel laten vliegen

We gaan de vogel laten vliegen. Als de spatiebalk ingedrukt wordt, stellen we de `zwaartekracht` op `6` in, zodat de y-positie voor een korte tijd hoger zal worden.

![Stap 3](/static/img/scratch-flappybird-3.svg)

{:start="3"}

3. Voeg een nieuw _wanneer &#9873; wordt aangeklikt_ blok toe.

   Voeg een _herhaal_ blok toe met daarbinnen _wacht tot toets_ `spatiebalk` _ingedrukt_.

   Voeg een _maak_ `zwaartekracht` blok toe en stel die in op `6`.

We voegen nog wat geluid en beweging toe. 

![Stap 4](/static/img/scratch-flappybird-4.svg)

{:start="4"}

4. Voeg een _start geluid_ blok toe en stel die in op `flap`.

   Voeg een _volgend uiterlijk_ blok toe.

Start het spel en druk op de spatiebalk om te kijken wat er gebeurt. 
Zie je de vleugels bewegen en hoor je het geluid alsof de vogel echt vliegt?
Stop het spel voordat je verder gaat.

## Buizen toevoegen

![Stap 5](/static/img/scratch-flappybird-5.png)

{:start="5"}

Klik rechtsonder in het scherm op het plaatje van de _buizen_ om die _sprite_ te selecteren. We gaan bij deze sprite eerst programmeren wat er moet gebeuren als het programma start.

![Stap 6](/static/img/scratch-flappybird-6.svg)

{:start="6"}

5. Voeg een _ga naar x `220` en y `0`_ toe. Hierdoor begint de buis rechts buiten het scherm.

6. Voeg een _verdwijn_ blok toe om de buis direct onzichtbaar te maken.

![Stap 7](/static/img/scratch-flappybird-7.svg)

{:start="7"}

7. Maak iedere `2` seconden een kloon (kopie) van de buis

8. Laat de buis verschijnen zodra deze als kloon start

    Stel de buis op een van de drie uiterlijken in


9. Laat de buis naar links bewegen

    Start het spel om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

![Stap 10](/static/img/scratch-flappybird-10.svg)

{:start="10"}

10. Laat de buis verdwijnen, wanneer hij de rand van het scherm raakt

## De vogel tegen de buizen laten botsen

![Stap 11](/static/img/scratch-flappybird-11.png)

{:start="11"}

11. Maak linksonder in het scherm de _vogel_ sprite actief

![Stap 12](/static/img/scratch-flappybird-12.svg)

{:start="12"}

12. Voeg een nieuw _wanneer &#9873; wordt aangeklikt_ toe.

    Wacht totdat de vogel een buis raakt.

![Stap 13](/static/img/scratch-flappybird-13.svg)

{:start="13"}

13. Start het geluid `hit` en wacht totdat het geluid afgspeeld is.

![Stap 14](/static/img/scratch-flappybird-14.svg)

{:start="14"}

14. Stop alle scripts om het spel te stoppen.

## Verander het spel nu verder

...zodat je een punt krijgt wanneer er een nieuwe buis verschijnt (hint: maak een variabele met de naam punten)

...of dat je de vogel de bovenkant en onderkant van het scherm niet mag raken

...of dat de buizen steeds sneller gaan bewegen

...of wat je zelf nog voor leuke dingen kunt bedenken!

[Hier](https://scratch.mit.edu/projects/173907357/#editor) vind je het eindresultaat.
