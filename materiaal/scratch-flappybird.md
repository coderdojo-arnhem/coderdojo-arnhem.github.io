---
layout: default
class: stappenplan
---

Flappy Bird in Scratch
======================

Om te beginnen ga je naar [deze pagina](https://scratch.mit.edu/projects/173904279). Klik je op *Bekijk van binnnen* en druk op de *Remix* knop.

De vogel laten vallen
---------------------

![Stap 1](/static/img/scratch-flappybird-1.png)

1. Zet bij het starten van het spel de `y-positie` en de `zwaartekracht` op `0`

![Stap 2, 3, 4](/static/img/scratch-flappybird-2.png)

{:start="2"}
2. Verander iedere herhaling de `y-positie` met de `zwaartekracht`. Hierdoor zal de vogel omlaag vallen.
3. Verander ook bij iedere herhaling de `zwaartekracht` met `-1`. Hierdoor zal de vogel steeds iets sneller vallen.
4. Start het spel om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

De vogel laten vliegen
----------------------

![Stap 5, 6, 7, 8](/static/img/scratch-flappybird-3.png)

{:start="5"}
5. Voeg een nieuw *wanneer vlag wordt aangeklikt* blok toe.
6. Voeg daar een *herhaal* toe met daarbinnen *wacht tot toets spatiebalk ingedrukt* en *maak zwaartekracht*.
7. Verander de `zwaartekracht` naar `6`.
8. Start het spel en druk op de spatiebalk om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

![Stap 9](/static/img/scratch-flappybird-4.png)

{:start="9"}
9. Start het geluid `flap` en stel het volgende uiterlijk van de vogel in

Buizen toevoegen
----------------

![Stap 10](/static/img/scratch-flappybird-5.png)

{:start="10"}
10. Maak linksonder in het scherm de buizen sprite actief

![Stap 11, 12](/static/img/scratch-flappybird-6.png)

{:start="11"}
11. Verplaats de buis rechts buiten het scherm, wanneer het spel gestart wordt
12. Voeg een *verdwijn* blok toe om de buis onzichtbaar te maken

![Stap 13](/static/img/scratch-flappybird-7.png)

{:start="13"}
13. Maak iedere `2` seconden een kloon (kopie) van de buis

![Stap 14](/static/img/scratch-flappybird-8.png)

{:start="14, 15"}
14. Laat de buis verschijnen zodra deze als kloon start
15. Stel de buis op een van de drie uiterlijken in

![Stap 16, 17](/static/img/scratch-flappybird-9.png)

{:start="16"}
16. Laat de buis naar links bewegen
17. Start het spel om te kijken wat er gebeurt. Stop het spel voordat je verder gaat.

![Stap 18](/static/img/scratch-flappybird-10.png)

{:start="18"}
18. Laat de buis verdwijnen, wanneer hij de rand van het scherm raakt

De vogel tegen de buizen laten botsen
-------------------------------------

![Stap 19](/static/img/scratch-flappybird-11.png)

{:start="19"}
19. Maak linksonder in het scherm de *vogel* sprite actief

![Stap 20, 21](/static/img/scratch-flappybird-12.png)

{:start="20"}
20. Voeg een nieuw *wanneer vlag wordt aangeklikt* toe.
21. Wacht totdat de vogel een buis raakt.

![Stap 22](/static/img/scratch-flappybird-13.png)

{:start="22"}
22. Start het geluid `hit` en wacht totdat het geluid afgspeeld is.

![Stap 23](/static/img/scratch-flappybird-14.png)

{:start="23"}
23. Stop alle scripts om het spel te stoppen.

Verander het spel nu verder
---------------------------

...zodat je een punt krijgt wanneer er een nieuwe buis verschijnt (hint: maak een variabele met de naam punten)

...of dat je de vogel de bovenkant en onderkant van het scherm niet mag raken

...of dat de buizen steeds sneller gaan bewegen

...of wat je zelf nog voor leuke dingen kunt bedenken!