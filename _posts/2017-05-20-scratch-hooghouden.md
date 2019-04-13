---
title: "Hooghouden met je webcam in Scratch"
layout: post
author: Tim
class: stappenplan
tags: [instructies, scratch]
thumbnail: /static/img/scratch-hooghouden.png
---
Tijdens CoderDojo Arnhem #10 hebben we dit spel in Scratch gemaakt, waarin je een voetbal moet hooghouden met je webcam. Om te beginnen ga je naar [deze pagina](https://scratch.mit.edu/projects/161097847). Klik je op *Bekijk van binnnen* en druk op de *Remix* knop.

De bal laten vallen
-------------------

![Stap 1](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-1.svg)

{:start="1"}
1. Zet bij het starten van het spel de `y-positie` op `0`

![Stap 2](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-2.svg)

{:start="2"}
2. Verander iedere herhaling de y-positie met de zwaartekracht.

   Zwaartekracht is een **variabele**. Maak deze aan bij *Data* en sleep hem dan op het blauwe blokje.

   Een variabele is ‘iets’ dat je een waarde kunt geven die je op een andere plek weer kunt gebruiken.

![Stap 3](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-3.svg)

{:start="3"}
3. Verander nu ook bij iedere herhaling de zwaartekracht met `-1`. Hierdoor zal de bal steeds iets sneller vallen.

   Start het spel om te kijken wat er gebeurt.
   <br/>Stop het spel voordat je verder gaat.

De bal laten stuiteren
----------------------

![Stap 4](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-4.svg)

{:start="4"}
4. Test iedere herhaling of de `y-positie` kleiner dan `-140` is. Dit de onderkant van het scherm.

   Het groene blokje is de _kleiner-dan_ functie. Deze functie geeft `waar` of `niet-waar` terug.

   Voer de `y-positie` van bal in de kleiner-dan functie. Dit blok vind je onder *Waarnemen* en kun je op het functie-blokje slepen.

![Stap 5](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-5.svg)

{:start="5"}
5. **als**
   <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de bal de onderkant van het scherm raakt
   <br/>**dan**
   <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maak zwaartekracht `12`
   <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start het geluid `kick`

   Start het spel om te kijken wat er gebeurt.
   <br/>Stop het spel voordat je verder gaat.

   Kun je uitleggen hoe het komt dat de bal omhoog stuitert?

De bal laten rollen
-------------------

![Stap 6](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-6.svg)

{:start="6"}
6. Voeg een nieuw startblok toe.

   Je kunt zoveel startblokken toevoegen als je wilt. Op die manier kun je je programma in stukjes delen om overzichtelijk te houden.

![Stap 7](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-7.svg)

{:start="7"}
7. Voeg een herhaal blok toe.

   Verander iedere herhaling naar het volgend uiterlijk van de bal. Wacht steeds een eventjes, zodat de bal niet te snel rolt.

   Start het spel om te kijken wat er gebeurt.
   <br/>Stop het spel voordat je verder gaat.

De bal hooghouden
-----------------
![Stap 8](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-8.svg)

{:start="8"}
8. We gaan de bal hooghouden met de camera van je computer!

   Voeg een nieuw *startblok* toe en zet als eerste de video aan. Dit blok vind je onder *Waarnemen*.

![Stap 9](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-9.svg)

{:start="9"}
9. Voeg een *herhaal* blok toe.

   Gebruik het *als* blok. Voeg de *groter-dan* functie toe. Sleep hierop het *video-beweging-op* blok en stel deze in op deze sprite.

   Vul als *groter-dan* waarde `40` in.

![Stap 10](/static/img/blog/2017-05-20-scratch-hooghouden/scratch-hooghouden-10.svg)

{:start="10"}
10. **als**
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de video beweging op de bal groter dan `40` is
    <br/>**dan**
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maak de zwaartekracht `12`
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start het geluid `kick`
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wacht een halve seconde

    Start het spel!

    Het kan zijn dat op jouw computer het spel te snel of te langzaam gaat. Probeer dan de waarde bij video-beweging of de wachttijd eens te veranderen.

Pas het spel nu verder aan
--------------------------

...zodat je een punt krijgt wanneer je de bal hooghoudt (hint: maak een variabele met de naam punten)

...zodat de punten weer op 0 gezet worden wanneer de bal de grond raakt

...zodat de bal ook opzij beweegt, om het spel iets moeilijker te maken

...met wat je verder zelf nog kunt bedenken!

En...
-----
Kun je de bal misschien nog op andere manieren hooghouden? Misschien met de muis? Of door in je handen te klappen?

[Hier](https://scratch.mit.edu/projects/159041671) vind je het eindresultaat