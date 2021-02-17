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

Wil je zelf proberen het spelletje Flappy Bird in Scratch te maken? Probeer dan deze instructies die we voor CoderDojo #12 maakten!
Flappy Bird is een bekend spel waarbij je een vogel laat vliegen en daarbij obstakels (buizen) laat ontwijken. 
Voor iedere buis die de vogel passeert krijgt de speler een punt. Als de vogel een buis raakt is het spel afgelopen. 

Om te beginnen ga je naar [deze pagina](https://scratch.mit.edu/projects/173904279). Klik op _Bekijk van binnen_ en druk op de _Remix_ knop.

Heb je geen _Remix_ knop, dan moet je eerst in Scratch inloggen. Dat kan rechtsboven. 

Heb je nog geen inlog, klik dan op _Word Scratcher_ en volg de stappen. 
Je bent direct ingelogd in Scratch en kunt aan de slag. 
Je ontvangt ook een e-mail. Om het aanmaken van je account af te ronden, klik je in de mail op de link. 
Je kunt daarna projecten delen met anderen (bijvoorbeeld met CoderDojo Arnhem).

## De basis

Laten we eerst kijken wat we in dit spel beschikbaar hebben. 

![sprites](/static/img/flappybirdsprites.png)

__Sprites (oftewel de hoofdrolspelers in je spel):__ 
Rechtsonder zie je dat er in dit spel twee sprites zijn. Eentje die _vogel_ heet (flappy bird) en eentje die _buizen_ heet.

Als je rechts klikt op de vogel en daarna links op het tabblad __uiterlijken__, dan zie je dat flappy bird drie uiterlijken heeft: vogel1, vogel2 en vogel3. 
Zie jij het verschil? Dit gaan we straks gebruiken om flappy bird echt te laten vliegen! 

Als je klikt op de sprite van de buizen dan zie je daar ook drie verschillende __uiterlijken__: buizen1, buizen2 en buizen3. 
Het gat tussen de buizen zit steeds op een andere plek. Flappy bird moet deze buizen straks proberen te ontwijken.


__Geluiden:__
Bij de sprite van de vogel zie je ook nog een tabblad __geluiden__. 
In dit spel zijn 2 geluiden beschikbaar: het geluid _flap_ en het geluid _hit_. Luister maar eens.

__Achtergrond:__
Als je rechts in je scherm kijkt, dan zie je dat de achtergrond voor dit spel ook al beschikbaar is in deze remix. 
Wil je later in het spel je eigen achtergrond kiezen dan kan dat hier. 

Laten we beginnen met programmeren van het spel!


## De vogel laten vallen

Klik op de sprite __vogel__. Klik links op het tabblad __code__. Het blok _Wanneer &#9873; wordt aangeklikt_ staat er al.

Bij de start van het spel moeten we eerst een paar dingen basis dingen instellen.

![Stap 2](/static/img/scratch-flappybird-2.svg)

1. Voeg een _maak y_ `0` blok toe. Hierdoor begint de vogel altijd in het midden van het scherm.

   Voeg een _maak_ `zwaartekracht` `0` blok toe. Dit blok is te vinden bij variabelen. 
   Hierdoor wordt krijgt de variabele _zwaartekracht_ aan het begin van het spel altijd de waarde nul.

{:start="2"}

2. Voeg een _herhaal_ blok toe.

   Binnen het _herhaal_ blok, voeg je een _verander y met_ blok toe. Sleep vanuit _Variabelen_ de variabele `zwaartekracht` op het _verander y met_ blok.
   Hierdoor veranderen we de y-positie (verticaal) van de vogel met de waarde van de `zwaartekracht` variabele. 

   Voeg ook een blok _verander `zwaartekracht` met_ toe. Geef deze de waarde `-1`. De waarde is negatief; de vogel zal omlaag vallen.
   
   Start het spel om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

## De vogel laten vliegen

Nu gaan we de vogel laten vliegen! Als de spatiebalk ingedrukt wordt, stellen we de `zwaartekracht` in op `6`. De y-positie (verticaal) wordt hierdoor voor korte tijd hoger.

![Stap 3](/static/img/scratch-flappybird-3.svg)

{:start="3"}

3. Voeg een nieuw _wanneer &#9873; wordt aangeklikt_ blok toe.

   Voeg een _herhaal_ blok toe met daarbinnen _wacht tot toets_ `spatiebalk` _ingedrukt_.

   Voeg een _maak_ `zwaartekracht` blok toe en stel die in op `6`.

We voegen ook nog wat geluid en beweging toe. 

![Stap 4](/static/img/scratch-flappybird-4.svg)

{:start="4"}

4. Voeg een _start geluid_ blok toe en stel die in op `flap`.

   Voeg een _volgend uiterlijk_ blok toe.

Start het spel en druk op de spatiebalk om te kijken wat er gebeurt. 
Zie je de vleugels bewegen en hoor je het geluid alsof de vogel echt vliegt?
Stop het spel voordat je verder gaat.

## Buizen toevoegen

Klik rechtsonder in het scherm op het plaatje van de _buizen_ om die _sprite_ te selecteren. We gaan bij deze sprite eerst programmeren wat er moet gebeuren als het programma start. Elke 2 seconden moet een nieuwe buis verschijnen.

![Stap 5](/static/img/scratch-flappybird-5.png)

![Stap 5](/static/img/scratch-flappybird-7.svg)

{:start="5"}

5. Voeg een _ga naar x `220` en y `0`_ toe. Hierdoor begint de buis rechts buiten het scherm.

    Voeg een _verdwijn_ blok toe om de buis direct onzichtbaar te maken.

    Voeg een _herhaal_ blok toe.

    Zet in het herhaalblok _Maak een kloon van `mezelf`_ en een blok _wacht `2` sec_.

![Start 6](/static/img/scratch-flappybird-10.svg)

{:start="6"}

Laat de buizen verschijnen waarbij het iedere keer een verrassing is welk _uiterlijk_ verschijnt.

6. Kies een _Wanneer ik als kloon start_ blok.
  
    Voeg een blok _verander uiterlijk naar `willekeurig getal tussen` `1` en `3`_ toe. Hiermee krijgt de buis één van de drie uiterlijken.
  
    Laat de buizen verschijnen met het blok _verschijn_.
  
Nu moeten we de buizen nog naar links laten bewegen en de buis laten verdwijnen wanneer hij de rand van het scherm raakt.

{:start="7"}

7. Voeg een _herhaal_ blok toe.

  Zet hierbinnen een blok _verander x met `-4`_.
  
  Voeg een _als `raak ik rand`_ blok toe.
  
  Daarbinnen het blok _verwijder deze kloon_.

Start het spel om te kijken wat er gebeurt. Zie je de buizen verschijnen?
Stop het spel voordat je verder gaat.



{:start="10"}

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
