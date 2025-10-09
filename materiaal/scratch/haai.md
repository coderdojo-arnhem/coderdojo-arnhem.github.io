---
title: Haai
layout: scratch
tags: [materiaal, scratch]
redirect_from: /materiaal/scratch/haai.html
---

<style>
scratch.waarnemen {
  background-color: #5cb1d6;
  border-color: #2e8eb8;
}
scratch.catwaarnemen::before {
  color: #5cb1d6;
}
scratch.uiterlijk {
  fill: #9966ff;
  stroke: #603ea4;
}
</style>

## Haai

In deze beginners les maken we een spel met een haai!

![Spirograaf](/static/img/scratch_haai_preview.png)

{:class="action"}
Ga naar [https://scratch.mit.edu](https://scratch.mit.edu) om Scratch te openen.

> En klik daar op `Aan de slag` of `Maak`.

{:class="license"}
Dit materiaal is een bewerking van de les [Haai op Raspberry Pi Projects](https://projects.raspberrypi.org/nl-NL/projects/cd-beginner-scratch-sushi).

## Het begin

![Sprite lijst](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/hlSpriteList.png)

> Klik op de Scratch kat in de sprite lijst. De kat is nu de huidige sprite.

> Kies de <scratch class="categorie gebeurtenissen">Gebeurtenissen</scratch> categorie in het code blokken palet, klik op het <scratch class="gebeurtenis">wanneer op <span class="flag">⚑</span> wordt geklikt</scratch> blok, en sleep het naar het huidige sprite paneel.

```scratch
wanneer groene vlag wordt aangeklikt
```

> Ga nu naar <scratch class="categorie uiterlijken">Uiterlijken</scratch> bij de het code blokken en zoek dit blok:

```scratch
    zeg (Hallo!) (2) sec.
```

> Klik erop, houd de muisknop ingedrukt en sleep hem naar het huidige sprite paneel en laat de knop los.

Nu het tweede blok ook in het huidige sprite paneel staat, verbind je het aan de onderkant van het eerste blok door erop te klikken en het onder het eerste blok te slepen zodat ze aan elkaar vastklikken, zoals dit:

```scratch
wanneer groene vlag wordt aangeklikt
zeg (Hallo!) (2) sec.
```

> Klik nu op de groene vlag en kijk wat er gebeurt!

## Toevoegen en verwijderen van codeblokken

Geweldig! Je hebt je allereerste Scratch programma geschreven. Tijd om wat meer te leren over hoe je code in en uit Scratch kunt krijgen! Scratch code bestaat uit <b>blokken</b> zoals deze:

![Sctratch blokken voorbeelden](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/code1.png)

Je vindt alle blokken in het palet met codeblokken, onderverdeeld in verschillende categorieën op basis van wat ze doen.

Het verwijderen van codeblokken die je niet wilt gebruiken in je programma is eenvoudig! Sleep ze gewoon terug naar het palet met codeblokken.

<b>Pas op:</b> door je blok naar het codeblok paneel te slepen, worden alle blokken die onder dat blok hangen ook verwijderd. Zorg er dus voor dat de blokken die je wilt houden losgekoppeld zijn van het blok dat je wilt verwijderen. Als je per ongeluk blokken hebt verwijderd en ze terug wilt halen, klik dan met je rechtermuisknop en vervolgens op de <b>Ongedaan maken</b> optie om alles weer terug te krijgen. Of toets ```Ctrl``` + ```Z``` tegelijk in.

![Ongedaan maken dropdown](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/code6.png)

Nu je weet hoe je code kunt verplaatsen en dingen kunt laten gebeuren, is het tijd om een ​​programma te maken waarmee de Scratch Cat in een cirkel kan lopen!

> Zorg dat je de kat sprite geselecteerd hebt in de spritelijst, en sleep dan de volgende blokken in het sprite paneel en verbindt ze met elkaar. Je vindt ze in de <scratch class="categorie gebeurtenissen">Gebeurtenissen</scratch> en <scratch class="categorie bewegingen">Beweging</scratch> categorieën.

```scratch
  wanneer groene vlag wordt aangeklikt
  neem (10) stappen
```

> Klik nu op de groene vlag boven het Speelveld.

Je zou de kat in een rechte lijn moeten zien lopen… niet precies wat je wilt, toch?

Opmerking: als je te vaak op de vlag klikt en de kat loopt uit beeld, dan kun je hem terug slepen!

> Zet het draai blok aan het eind zodat de kat in een rondje kan lopen. Het zit ook in de <scratch class="categorie bewegingen">Beweging</scratch> categorie.

```scratch
  wanneer groene vlag wordt aangeklikt
  draai (15) graden naar rechts
```

Dit blok zorgt ervoor dat de sprite 15 graden van de volledige 360 ​​graden draait die een cirkel vormen.

## Het instellen van de omgeving

Scratch heeft een bibliotheek met achtergronden en sprites die je kunt gebruiken om je project er geweldig uit te laten zien.

> Selecteer het <b>Speelveld</b>.

![Het Speelveld selecteren](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/looksSelectStage.png)

> Klik op het <b>Kies een achtergrond</b> icoon.

![Het Kies een achtergrond icoon](/static/img/scratch-kies-achtergrond.png)

> Kies dan je favoriete onderwater achtergrond!

![Een onderwaterscène](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/looksUnderwater.png)

Geweldig! Maar nu heb je natuurlijk een kat onder water, en katten zijn daar meestal geen grote fans van. Maar dat kun je oplossen, want je kunt de kat veranderen in een haai!

> Selecteer eerst de kat sprite en klik op de Uiterlijken tab.

![Uiterlijken tab](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/cool2.png)

> Klik dan op <b>Kies een sprite</b>

![Kies een sprite icoon](/static/img/scratch-kies-sprite.png)

> Selecteer deze haai afbeelding en klik op OK.

![Het haai uiterlijk](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/looksShark.png)

> Verwijder nu de kat uiterlijken door ze stuk voor stuk te selecteren en op ```x``` te klikken.

![Op X klikken](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/coolDeleteCostumes.png)

Nu heb je een haai - uitstekend!

## Dingen verplaatsen

Op dit moment beweegt je haai in een rondje, en het zou veel gaver zijn om hem aan te sturen met de pijltjestoetsen. Hier je hoe dat moet!

> Begin met het verwijderen van alle code die je hebt voor de haai.

Zoals je vast al geraden hebt, heb je de <scratch class="categorie gebeurtenissen">Gebeurtenissen</scratch> en <scratch class="categorie bewegingen">Beweging</scratch> blokken weer nodig!

> Zoek deze keer dit blok op en sleep het naar het huidige paneel:

```scratch
  wanneer [spatiebalk v] is ingedrukt
```

> Klik op de kleine pijl (▼) naast ```spatiebalk```. Je ziet nu een lijst met alle toetsen waaruit je kunt kiezen.

Je hebt vier van de <scratch class="gebeurtenis">wanneer toets is ingedrukt</scratch> blokken nodig - één voor elk van je pijltjestoetsen.

> Om je haai te laten bewegen, verbind je deze blokken op de volgende manier aan de beweging blokken:

```scratch
    wanneer [pijltje links v] is ingedrukt
    neem (-10) stappen

    wanneer [pijltje rechts v] is ingedrukt
    neem (10) stappen

    wanneer [pijltje omhoog v] is ingedrukt

    wanneer [pijltje omlaag v] is ingedrukt
```

Let op: ```-10``` betekent ‘ga 10 stappen terug’.

> Klik nu op de groene vlag om je code te testen.

Nu beweegt je haai naar voren en naar achteren, wat heel gaaf is, maar hij gaat nog niet omhoog of naar beneden. Als je kijkt bij de <scratch class="categorie bewegingen">Beweging</scratch> blokken, zul je zien dat er geen blokken zijn voor ‘omhoog’ of ‘omlaag’. Er zijn wel veel blokken die te maken hebben met <b>x</b> en <b>y</b> coördinaten - laten we die proberen!

Neem twee <scratch class="beweging">verander y met</scratch> blokken en werk je code als volgt bij:

```scratch
    wanneer [pijltje omhoog v] is ingedrukt
    verander y met (10)

    wanneer [pijltje omlaag v] is ingedrukt
    verander y met (-10)
```

Als je nu op de pijltjestoetsen klikt, beweegt je haai over het hele speelveld!

<b>Het spel herstarten</b>

De haai beweegt nu over je hele scherm, maar stel je voor dat dit een spel is: hoe herstart je het dan, en wat gebeurt er aan het begin van elk spel?

De haai moet weer op zijn beginpositie komen als een speler het spel start. Ze beginnen het spel door op de groene vlag te klikken, dus je moet de x- en y-coördinaten van de haai veranderen als dat gebeurt.

Dat is best wel simpel! Het midden van het speelveld is `0` en `0` in `x` en `y` coördinaten.

Je hebt alleen een <scratch class="categorie gebeurtenissen">Gebeurtenissen</scratch> blok nodig voor de groene vlag, en het <scratch class="beweging">ga naar</scratch> blok uit <scratch class="categorie bewegingen">Beweging</scratch>.

> Sleep een <scratch class="gebeurtenis">wanneer op groene vlag wordt geklikt</scratch> blok naar het huidige sprite paneel.

```scratch
wanneer groene vlag wordt aangeklikt
```

> Zoek dan het <scratch class="beweging">ga naar</scratch> beweging blok en zet het vast aan je vlag gebeurtenis blok.

```scratch
wanneer groene vlag wordt aangeklikt
ga naar x (0) y (0)
```

> Stel zowel de `x` als `y` coördinaten in op `0` in het ga naar blok als ze nog niet op `0` staan.

> Klik nu op de groene vlag: je zou nu moeten zien dat de haai weer in het midden van het speelveld staat!

## Alle sprites

Nu heb je een haai die je kunt laten bewegen met de pijltjestoetsen. Gaaf! Hoog tijd om wat vissen toe te voegen die hij kan vangen.

> Klik op de <b>Kies een sprite</b> knop en kies een vis uit het scherm dat geopend wordt.

![Kies een sprite icoon](/static/img/scratch-kies-sprite.png)

> Als je vis een beetje groot is vergeleken met je haai, dan kun je Grootte gebruiken om beide sprites het juiste formaat te geven!

![Sprite grootte](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/sprites2.png)

> Verander het getal achter `Grootte` om de sprite groter of kleiner te maken.

Geweldig! Later zul je code toevoegen om de vis zelfstandig te laten bewegen, zonder dat de speler helpt. Je speler zal de haai aansturen om te proberen de vis te vangen.

<b>Achterstevoren?</b>

Het ziet er een beetje gek uit om de haai achterstevoren te laten zwemmen. Net zoals jij je liever omdraait in plaats van achteruit te lopen, wil de haai zich ook omdraaien in plaats van achterstevoren te zwemmen. Gelukkig heeft Scratch hier een blok voor!

>Gebruik een paar <scratch class="beweging">richt naar graden</scratch> blokken uit de Beweging lijst en voeg ze als volgt aan de haaicode toe:


```scratch
    wanneer [pijltje links v] is ingedrukt
    richt naar (-90) graden
    neem (10) stappen

    wanneer [pijltje rechts v] is ingedrukt
    richt naar (90) graden
    neem (10) stappen
```

> Verander bij het aantal stappen in de <scratch class="beweging">beweging</scratch> blokken de `-10` in `10`.

> Als je de haai beweegt nu je de <scratch class="beweging">richt naar graden</scratch> blokken hebt toegevoegd, zul je iets raars zien. De haai draait niet helemaal goed!

![Ondersteboven haai](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/spritesUpsideDown.png)

Het probleem is dat de haai begon, zoals alle sprites doen, met de ‘helemaal rond’ draaistijl, en wat je nodig hebt is de ‘links-rechts’ stijl.

> Zoek in de Beweging categorie naar het blok <scratch class="beweging">maak draaistijl</scratch>.

> Voeg dit blok toe aan de herstartcode van de haai, en maak als volgt de draaistijl <scratch class="beweging">links-rechts</scratch>:

```scratch
wanneer groene vlag wordt aangeklikt
maak draaistijl [links-rechts v]
ga naar x (0) y (0)
```

## Vis op afstand bestuurbaar

Oké, hoog tijd om de vis zelfstandig te laten zwemmen. Hiervoor heb je een nieuw soort blok nodig: een <scratch class="besturen">Besturen</scratch> blok.

> Selecteer je vis sprite.

Sleep een <scratch class="gebeurtenis">wanneer op groene vlag wordt geklikt</scratch> gebeurtenis blok, een <scratch class="besturen">herhaal</scratch> besturen blok en een <scratch class="beweging">neem 10 stappen</scratch> beweging blok naar het sprite paneel:

```scratch
wanneer groene vlag wordt aangeklikt
herhaal
  neem (10) stappen
```

> Klik nu op de groene vlag en kijk wat er gebeurt!

Tjonge, die vis botste tegen de zijkant van het Speelveld en ging véél te snel voor je haai.

Eerst moet je de vis langzamer laten gaan. Dat is vrij simpel, je moet een pauze inlassen als de vis 10 stappen genomen heeft. Er is een <scratch class="categorie besturen">Besturen</scratch> blok dat je hierbij helpt:

```scratch
    wacht (1) sec.
```

> Voeg het <scratch class="besturen">wacht</scratch> blok toe aan je code binnen het <scratch class="besturen">herhaal</scratch> blok, en verander het getal naar `0.5`:

```scratch
wanneer groene vlag wordt aangeklikt
herhaal
  neem (10) stappen
  wacht (0.5) sec.
```

Je kunt verschillende getallen bij <scratch class="besturen">wacht</scratch> invoeren om uit te zoeken wat het beste bij het spel past. En onthoud dat je het aantal stappen binnen het <scratch class="beweging">neem stappen</scratch> blok ook kunt veranderen!

De vis beweegt nu, maar je wilt ook dat hij omdraait aan de rand van het Speelveld. Ook hier is een <scratch class="categorie bewegingen">Beweging</scratch> blok voor!

> Zoek het <scratch class="beweging">keer om aan de rand</scratch> blok en zet het onder het <scratch class="besturen">wacht</scratch> blok.

Natuurlijk betekent dit dat je vis ondersteboven gaat zwemmen, dus heb je weer een maak draaistijl nodig.

> Werk je code bij door de draaistijl van de vis <scratch class="beweging">links-rechts</scratch> aan het begin van de sprite code toe te voegen:

```scratch
wanneer groene vlag wordt aangeklikt
herhaal
  neem (10) stappen
  wacht (0.5) sec.
  keer om aan de rand
```

De vis beweegt nu vooruit en achteruit, maar alleen in een rechte lijn - de speler kan nu met de haai wel heel makkelijk de vis pakken! Je moet de vis minder voorspelbaar maken.

Je weet van een vorige stap al hoe je een sprite kunt laten draaien, dus daar begin je mee.

> Voeg een <scratch class="beweging">draai</scratch> toe aan de zweminstructies van de vis, en klik op de groene vlag.

```scratch
wanneer groene vlag wordt aangeklikt
maak draaistijl [links-rechts v]
herhaal
  neem (10) stappen
  draai (10) graden naar rechts
  wacht (0.5) sec.
  keer om aan de rand
```

Al beter, maar nog steeds te voorspelbaar. Het moet willekeuriger worden. Gelukkig kan Scratch willekeurig voor je uitvoeren! Je hebt een nieuw blok nodig, een <scratch class="categorie functies">functie</scratch> blok.

> Zoek het <scratch class="functies">willekeurig getal tussen</scratch> blok en sleep het in het getalvakje van de graden.


```scratch
wanneer groene vlag wordt aangeklikt
maak draaistijl [links-rechts v]
herhaal
  neem (10) stappen
  draai (willekeurig getal tussen (1) en (10)) graden naar rechts
  wacht (0.5) sec.
  keer om aan de rand
```

Let op: je kan het laagste en hoogste getal veranderen dat gekozen moet worden, maar de standaard waarden (`1` en `10`) zijn zeer geschikt voor dit spel, dus je mag ze ook laten staan.

> Klik op de groene vlag om de code uit te voeren!

Cool! Volgende stap: pak die vis!

## Vissen!

De haai beweegt, de vis zwemt, maar ze reageren niet op elkaar: als de vis in de bek van de haai zwemt, gebeurt er niets. Hoog tijd om dat te veranderen!

Eerst moet je weten of de vis de haai aanraakt. Hiervoor heb je een <scratch class="categorie besturen">Besturen</scratch> blok en een <scratch class="categorie catwaarnemen">Waarnemen</scratch> blok nodig.

> Voeg het <scratch class="besturen">als...dan</scratch> blok toe aan de <scratch class="categorie besturen">herhaal</scratch> lus van de vis sprite, onder het <scratch class="beweging">keer om aan de rand</scratch> blok.

> Sleep het <scratch class="waarnemen">raak ik</scratch> blok boven in het vlakje van het <scratch class="besturen">als...dan</scratch> blok, en klik op het kleine driehoekje om de naam van de haai sprite te selecteren. Als je die naam niet verandert hebt, zal dat `Sprite1` zijn.

```scratch
wanneer groene vlag wordt aangeklikt
maak draaistijl [links-rechts v]
herhaal
  neem (10) stappen
  draai (willekeurig getal tussen (1) en (10)) graden naar rechts
  wacht (0.5) sec.
  keer om aan de rand
    als <raak ik [Sprite1 v]> dan
```

Uiteraard heb je net een <scratch class="besturen">als...dan</scratch> blok toegevoegd zonder iets voor het ‘dan’ gedeelte te zetten. Dus nu controleert je code of de vis de haai aanraakt, maar gebeurt er verder helemaal niets.

Je kunt de vis laten verdwijnen, alsof de haai hem heeft opgegeten, door het <scratch class="uiterlijk">verdwijn</scratch> blok te gebruiken.

> Zoek het <scratch class="uiterlijk">verdwijn</scratch> blok in <scratch class="categorie uiterlijken">Uiterlijken</scratch> en zet het in het <scratch class="besturen">als...dan</scratch> blok:

```scratch
  als <raak ik [Sprite1 v]> dan
    verdwijn
```

Als de haai nu de vis pakt, verdwijnt de vis definitief. Dat is niet zo mooi.

> Zet het <scratch class="uiterlijk">verschijn</scratch> blok uit <scratch class="categorie uiterlijken">Uiterlijken</scratch> helemaal aan het begin van de vis code, zodat je het spel kunt hervatten.

```scratch
wanneer groene vlag wordt aangeklikt
verschijn
maak draaistijl [links-rechts v]
```

Dat is al beter, maar je wilt niet dat de speler het spel moet herstarten zodra er een vis is gevangen!

> Werk je code bij in het <scratch class="besturen">als...dan</scratch> blok om het er zo uit te laten zien:

```scratch
  als <raak ik [Sprite1 v]> dan
    verdwijn
    wacht (1) sec.
    ga naar x: (willekeurig getal tussen (-240) en (240)) y: (willekeurig getal tussen (-180) en (180))
    verschijn
```

Als de vis verdwenen is, dan wacht hij, beweegt, en komt weer te voorschijn.
Het lijkt alsof er heel veel vissen verschijnen, maar het is slechts één sprite die beweegt!

Dat is pas een spel! Maar je hebt nog geen manier om de score bij te houden, of te winnen. Ook dat kun je oplossen - in de volgende stap!

## Score bijhouden

Om bij te houden hoeveel vissen de speler vangt, moet je iets hebben om de score in op te slaan, een manier om erbij op te tellen, en een manier om opnieuw te beginnen als het spel herstart wordt.

Ten eerste: de scoren opslaan!

> Ga naar de <scratch class="categorie variabelen">Variabelen</scratch> categorie en klik op `Maak een variabele`.

![Maak een variablele](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/catch5.png)

>Vul `score` als de naam in.

![Nieuwe variabele naam](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/catch6.png)

De Score variabele wordt weergegeven in het speelveld.

![score](https://projects-static.raspberrypi.org/projects/cd-beginner-scratch-sushi/c62918851d3bb02b95185c8ba428ea97dbef80a7/nl-NL/images/scoreVariableStage.png)

Nu moet de variabele elke keer bijgewerkt worden als de haai een vis pakt, en opnieuw beginnen als het spel wordt herstart. Beide zijn vrij simpel om te doen:

> Pak uit de <scratch class="categorie variabelen">Variabelen</scratch> categorie de <scratch class="variabelen">maak [mijn variabele v] [0]</scratch> en <scratch class="variabelen">verander [mijn variabele v] met [1]</scratch> blokken. Klik op de kleine pijltjes in de blokken, kies `score` uit de lijst, en zet de blokken in je programma:

Code voor de haai

```scratch
wanneer groene vlag wordt aangeklikt
maak [score v] (0)
maak draaistijl [links-rechts v]
ga naar x: (0) y: (0)
```

Code voor de vis

```scratch
  als <raak ik [Sprite1 v]> dan
    verander [score v] met (1)
    verdwijn
    wacht (1) sec.
    ga naar x: (willekeurig getal tussen (-240) en (240)) y: (willekeurig getal tussen (-180) en (180))
    verschijn
```

Gaaf! Nu heb je zelfs een score.

## Uitdaging: het spel winnen

Kies een score waarbij de speler wint, en laat iets leuks gebeuren als ze die score halen.

Laat de haai de speler feliciteren, laat een ‘Jij wint!’ sprite te voorschijn komen, of speel muziek af!
