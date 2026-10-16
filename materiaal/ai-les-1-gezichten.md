---
title: "AI les 1: Gezichten in Scratch"
layout: scratch
class: stappenplan
tags: [materiaal, ai, scratch]
---

## Gezichten in Scratch

Scratch kan gezichten herkennen: waar je neus zit, waar je mond zit, en of je hoofd scheef staat. Dat komt door een **model** dat al getraind is met duizenden foto's van gezichten. Zo'n kant-en-klaar model heet een **pretrained model**. Je hoeft zelf niets te trainen.

In deze les maak je een spel: er valt eten uit de lucht en jij vangt het met je mond. Eerst probeer je de nieuwe blokken uit met een sticker op je neus.

In les 2 (volgende maand) train je daarna zelf een model.

**Wat heb je nodig?** Een laptop met webcam en Chrome of Edge. Je werkt gewoon op [scratch.mit.edu](https://scratch.mit.edu/).

## Voeg Face Sensing toe

> Ga naar [scratch.mit.edu](https://scratch.mit.edu/) en klik bovenin op **Maak**.
>
> Klik linksonder op de paarse knop **Voeg een uitbreiding toe**.

![De paarse knop linksonder in Scratch](/static/img/ai/scratch-uitbreiding-knop.png)

> Kies **Face Sensing**.

![De tegel Face Sensing in de lijst met uitbreidingen](/static/img/ai/scratch-face-sensing-tegel.png)

De browser vraagt of Scratch je camera mag gebruiken. Klik op **Toestaan**. Je ziet jezelf op het scherm.

Er is een categorie **Face Sensing** bijgekomen. Deze blokken zijn in het Engels, ook als de rest van Scratch in het Nederlands staat.

![De blokken van Face Sensing](/static/img/ai/scratch-face-sensing-blokken.png)

In het keuzemenu van <scratch class="pen">go to</scratch> en <scratch class="pen">when this sprite touches a</scratch> kun je kiezen uit: *nose* (neus), *mouth* (mond), *left eye* en *right eye* (ogen), *between eyes* (tussen je ogen), *left ear* en *right ear* (oren) en *top of head* (bovenkant van je hoofd).

## Een sticker op je neus

Eerst even proberen: een sprite die altijd op je neus zit.

> Klik in de lijst met sprites op het kruisje bij de kat om die weg te halen. Kies een nieuwe sprite. Iets kleins werkt het best, bijvoorbeeld een bal, een hartje of een ster.

> Maak dit programma. Het blok <scratch class="pen">go to</scratch> komt uit **Face Sensing**, de andere blokken uit **Gebeurtenissen**, **Uiterlijken** en **Besturen**.

```scratch
wanneer groene vlag wordt aangeklikt
maak grootte (30) %
herhaal
go to [nose v] :: extension
einde
```

Klik op de groene vlag en beweeg je hoofd. De sprite volgt je neus.

Probeer ook andere plekken: *left eye*, *mouth*, *top of head*.

## Vangen met je mond

Nu het spel. Er valt eten uit de lucht. Vang het met je mond.

> Kies een sprite die je kunt eten, bijvoorbeeld een appel of een donut. De sprite met de sticker mag weg.
>
> Maak bij **Variabelen** een variabele `score`.

> Maak dit programma:

```scratch
wanneer groene vlag wordt aangeklikt
maak [score v] (0)
herhaal
ga naar x: (willekeurig getal tussen (-200) en (200)) y: (180)
herhaal tot <(y-positie) < (-170)>
verander y met (-5)
einde
einde
```

> En dit erbij, op dezelfde sprite. Het bovenste blok komt uit **Face Sensing**:

```scratch
when this sprite touches a [mouth v] :: extension hat
verander [score v] met (1)
start geluid [Chomp v]
ga naar x: (willekeurig getal tussen (-200) en (200)) y: (180)
```

Kies bij **Geluiden** een geluid voor je sprite, bijvoorbeeld *Chomp*. Klik op de groene vlag, doe je mond open en vang de appel.

{:class="note"}
Valt de appel te snel of te langzaam? Verander het getal in <scratch class="beweging">verander y met <input /></scratch>.

<b>Bewaren</b>

> Klik op **Bestand** en dan op **Opslaan op je computer**. Heb je een Scratch-account en ben je ingelogd, dan kun je ook gewoon op **Opslaan nu** klikken.

## Extra uitdagingen

- **Wanneer ziet Scratch je niet meer?** Maak op een sprite dit programma en probeer dan: je hoofd langzaam opzij draaien, een hand voor je gezicht, het licht uit, een tekening van een gezicht voor de camera. Wat valt je op? Het model is getraind met foto's van echte gezichten, recht van voren, in goed licht. Alles wat daar niet op lijkt, gaat slechter.

```scratch
wanneer groene vlag wordt aangeklikt
herhaal
als <a face is detected? :: extension> dan
zeg [Ik zie een gezicht]
anders
zeg [Geen gezicht]
einde
einde
```

- **Een bril.** Zet een (zonne)bril op of af.
- **Verschillende ogen.** Zet een sprite op *left eye* en een tweede sprite op *right eye*.
- **Sturen met je hoofd.** Gebruik <scratch class="pen">when face tilts [left]</scratch> en <scratch class="pen">when face tilts [right]</scratch> om een auto naar links en rechts te sturen.
- **Te dichtbij.** Zet het vinkje aan bij <scratch class="pen">face size</scratch>, dan zie je het getal op het scherm. Kijk welk getal erbij hoort als je normaal zit, en welk getal als je met je neus bijna tegen het scherm zit. Laat een sprite "Niet zo dichtbij!" zeggen zodra dat getal te hoog wordt.
- **Sneller.** Laat de appel sneller vallen naarmate je score hoger wordt.

## Wat heb je geleerd?

- Scratch kan gezichten herkennen door een **pretrained model**: een model dat iemand anders al getraind heeft, met duizenden foto's.
- Jij hebt niets getraind. Je hebt het model alleen gebruikt, als een blokje.
- Het werkt goed op gezichten die lijken op de trainingsfoto's, en minder goed op alles wat daarvan afwijkt.

In les 2(volgende maand) train je zelf een model. Dan bepaal jíj welke voorbeelden erin gaan.

In de les [Hooghouden met je webcam](/materiaal/scratch/hooghouden) wordt ook de camera gebruikt in Scratch.
