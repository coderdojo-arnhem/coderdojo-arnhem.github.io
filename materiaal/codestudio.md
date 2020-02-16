---
title: Tekenen in Python
layout: materiaal
---
Open om te beginnen [deze](https://trinket.io/turtle/52ab11c68f) website.

Wanneer je op de ▶️ knop drukt, wordt het programma gestart en loopt de _turtle_ (schildpad) 100 stappen naar voren.

Je kunt de turtle nu allerlei opdracht geven om hem te verplaatsen. Terwijl de turtle dit doet, laat hij een spoor achter waardoor je kunt tekeken.

Probeer de code maar eens aan te passen zodat het er zo uitziet:

```python
import turtle
turtle.shape("turtle")
turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.left(90)
```

Als je op ▶️ drukt tekent de turtle nu een vierkant.

Je kunt ook `herhalingen` gebruiken, probeer dit maar eens:

```python
import turtle
turtle.shape("turtle")

for i in range(24):
  turtle.forward(100)
  turtle.left(75)
```

Zoals je ziet kun je met een klein beetje code al de mooiste tekeningen maken!

> Er zijn nog veel meer opdrachten die je de turtle kunt geven. Hieronder staan er een paar die je kunt proberen. Wat voor tekening ga jij maken? Je kunt bijvoorbeeld proberen een huis te tekenen. Of lukt het om je huisdier na te maken, misschien kun je wel jezelf tekenen? Je kunt ook met de herhaling zoals hierboven nog veel meer mooie figuren tekenen.
>
> Veel plezier!

### Opdrachten die je de turtle kunt geven

**100 stappen vooruit**

```python
turtle.forward(100)
```

**90 graden draaien**

```python
turtle.right(90)
turtle.left(90)
```

**Cirkel**

```python
turtle.circle(100)
```

**Halve cirkel**

```python
turtle.circle(100, 180)
```

**Pen omhoog/omlaag**

```python
turtle.up()
turtle.down()
```

**Kleur veranderen**

```python
turtle.color("red")
```

Hier vind je een [lijst met alle mogelijke kleuren](https://trinket.io/docs/colors). Gebruik de tekst die staat bij `Turtle name` als kleur.

**Herhalen, 4 keer**

```python
for i in range(4):
  turtle.forward(100)
  turtle.right(90)
```

**Herhalen, kleuren**

```python
for c in ["red", "green", "blue", "yellow"]:
  turtle.color(c)
  turtle.forward(100)
  turtle.right(90)
```

**Sneller!!!**

```python
turtle.speed(10)
```

# Tekenen in Scratch

Als je Python toch niet zo leuk vindt, kun je ook in Scratch tekenen. [Feliene Hermans](https://scratchles.nl/) maakte een leuke opdracht waarmee je een spirograaf gaat tekeken.

Open [dit Scratch project](https://scratch.mit.edu/projects/160461170/) en klik op `Remix`.

> Als je de `Remix` knop niet ziet, kan het zijn dat je nog niet ingelogd bent. Heb je nog geen Scratch account, dan kun je die gratis aanmaken door op `Word Scratcher` te klikken.

De opdracht kun je [hier](https://scratch.mit.edu/projects/160461170/editor/) downloaden.