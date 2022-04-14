---
title: "Complimentengenerator in Scratch"
layout: toc
class: stappenplan
author: Floris/Maud
tags: [materiaal, scratch]
redirect_from: /materiaal/scratch/complimentengenerator.html
---


- Inhoudsopgave
  {:toc}



## Inleiding

<h1>Scratch Complimenten generator</h1>

In deze Scratch-opdracht ga je stempelen met sprites. Door lettersprites achter elkaar te stempelen ontstaat een zin. Deze zin ga je samenstellen uit 2 zinsdelen, een “opening” zoals “lieve mama” en een “complimentje” zoals “wat kan jij toch lekker koken”. Deze zinsdelen haal je willekeurig uit een lijst van verschillende openingen en verschillende complimentjes zodat je iedere keer een andere zin in beeld krijgt. De complimentjes komen pas tevoorschijn als je vader/moeder op een bewegende 2e sprite klikt, in het voorbeeld de vlinder.

Ga naar [https://scratch.mit.edu](https://scratch.mit.edu) om met Scratch te werken.

## Maak letters

1. Open een nieuwe scratch door op Maak te klikken.

2. Gooi de bestaande sprite weg en kies een nieuwe.

![Kies sprite](/static/img/complimentengenerator/image15.png)

![Letters](/static/img/complimentengenerator/image17.png)

3. Klik op letters en kies de letter a van de letterstijl die je wil gebruiken.

4. Hernoem deze sprite naar “Letters”.

5. Ga nu naar “Uiterlijken” van de letters sprite en klik op “Kies een uiterlijk”.

![Uiterlijk](/static/img/complimentengenerator/image16.png)

6. Kies nu de letter B van dezelfde stijl.

7. Ga door tot je alle letters B t/m Z als uiterlijk hebt toegevoegd aan deze sprite.
   Als je leestekens wilt gebruiken (een komma, punt en uitroepteken) zul je deze in een blanco uiterlijk zelf moeten tekenen.

## Tweede sprite

8. Voeg nu een 2e sprite toe, in dit voorbeeld de Butterfly sprite (vlinder).

![Tweede sprite](/static/img/complimentengenerator/image19.png)

9. Kies ook een leuke achtergrond die er bij past.

10. Met onderstaande code kun je de vlinder laten vliegen over je scherm door de positie na klikken op het groene vlaggetje in een lus te laten verschuiven naar een willekeurig punt.
    In het voorbeeld is het startpunt altijd hetzelfde en begint de vlinder pas te vliegen na 5 seconden. Je moet een variabele “positie_butterfly” aanmaken.
    In een tweede stuk code verandert het uiterlijk van de vlinder elke 0.2 seconden.

![Code vlinder](/static/img/complimentengenerator/image18.png)

11. Als er op de vlinder wordt geklikt zendt deze het signaal “schrijftekst” dat door de lettersprite opgepikt kan worden.

![Signaal](/static/img/complimentengenerator/image20.png)

## Pen

12. Ga nu weer terug naar de letters sprite.

13. Je kunt met de pen blokken stempelen en de stempels weer wissen. Deze functie kun je gebruiken om de letters uit een zin te stempelen op het scherm.
    Als de pen functie nog niet aan staat kun je deze aan zetten door links onder in het scherm op het symbool ![Uitbreiding](/static/img/complimentengenerator/image20.png) te klikken en dan op de pen functie.

![Pen](/static/img/complimentengenerator/image10.png)

## Zinnen maken

14. Eerst gaan we zinnen maken om weer te geven. We maken 2 lijsten: opening en complimentje. Je kunt deze functie vinden in het menu variabelen. Je ziet in je scherm rechts twee lege lijsten verschijnen.
    Daarna gaan we teksten in de twee lijsten zetten. Klik linksonder op de + en je ziet een vakje verschijnen. Typ teksten die je zelf leuk vindt.

![Lijst1](/static/img/complimentengenerator/image2.png)
![Lijst2](/static/img/complimentengenerator/image14.png)

15. Nu ga je de code schrijven om de teksten uit je lijst op het scherm te gebruiken.
    Je kunt een willekeurig item uit een lijst kiezen met het “willekeurig getal” blok. Een willekeurig getal tussen 1 en het aantal waarden dat je in je lijst hebt staan.

![Lijsten](/static/img/complimentengenerator/image1.png)
![Willekeurig item](/static/img/complimentengenerator/image22.png)

16. Creëer nu de variabelen die je nodig gaat hebben. Dat doe je in het menu Variabelen door op “Maak een variabele” te klikken.
    Maak de variabele “zin” waar je de willekeurige zin in gaat stoppen; maak de variabele “letter” waar je opeenvolgend elke letter uit je zin in gaat laden en maak de variabele “#teken” die je gaat gebruiken om bij de houden bij welk teken uit de zin je was gebleven.

![Variabelen](/static/img/complimentengenerator/image3.png)

17. Schrijf onderstaande code in de letters sprite. Met deze code wordt een zin gemaakt door eerst een willekeurig zinsdeel te kiezen uit je lijst opening en daarachter een willekeurig zinsdeel uit je lijst complimentje.
    Tussen de twee zinsdelen staat een spatie. Het “maak” blok vind je bij variabelen.

![Maak zin](/static/img/complimentengenerator/image23.png)

18. Voeg nu een “zeg” blok toe en kijk wat dit doet! Als je de lijsten en variabelen niet in beeld wil zien dan moet je in het menu Variabelen de blauwe vinkjes weghalen.

![Zeg](/static/img/complimentengenerator/image24.png)

![Voorbeeld 1](/static/img/complimentengenerator/image25.png)
![Voorbeeld 2](/static/img/complimentengenerator/image26.png)

## Blokken

19. Nu je een willekeurige tekst hebt is het tijd om deze in een aan te roepen Blok te zetten en de andere functies te maken die je nodig hebt voor het hele programma.

20. Ga naar het menu Mijn Blokken en definieer 5 blokken:
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Willekeurige_tekst: waar je de willekeurige zin gaat samenstellen (code die je net gemaakt hebt)
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Schrijf_tekst: dit is om de zin binnen te krijgen (let op dat hier een parameter in kan om de tekst van de zin binnen te kunnen krijgen!)
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Type: dat de grafische weergave van de zin moet gaan regelen
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. Toelichting: instructies hoe het werkt
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e. Wis: om de zin te wissen.

![Blokken](/static/img/complimentengenerator/image27.png)

21. Begin met het blok Schrijf_tekst. Dit blok loopt door alle letters uit de zin.
    Het pakt het eerste teken, zet dat in de variabele “letter”, “typt” deze via deze variabele op het scherm via het blok “type”, schuift de sprite op naar rechts (tot dicht bij het eind van het scherm, begint dan op een nieuwe regel zodra hij een spatie tegenkomt in de tekst), en gaat door naar de volgende letter uit de zin.
    De code staat onder stap 22. Let op dat bovenin text staat in het lege vakje.

22. Schrijf nu het blok “type”. Dit blok stempelt de letter die op dat moment in de variabele “teken” staat op het scherm (op de plaats waar de sprite op dat moment staat) door de sprite het uiterlijk te geven dat overeenkomt met de letter uit de variabele “letter” en dan zichzelf te stempelen.
    Maak eerst het als-dan blok voor de letter a en kopieer dit voor alle letters van het alfabet. Als je ook leestekens gebruikt, zoals een komma en een uitroepteken, dan moet je die ook toevoegen. De code staat hieronder:

![Blok schrijf_tekst](/static/img/complimentengenerator/image4.png)
![Blok type](/static/img/complimentengenerator/image5.png)

23. Maak nu de “Letters” sprite zelf onzichtbaar.

![Onzichtbaar maken](/static/img/complimentengenerator/image6.png)

24. Een aantal stappen terug heb je de vlinder sprite al geprogrammeerd om het signaal “schrijftekst” uit te zenden. Door bij ontvangst van dit signaal het scherm te wissen, de willekeurige tekst samen te stellen en de ontstane zin te schrijven verschijnt je willekeurige boodschap op het scherm.

![Ontvang signaal](/static/img/complimentengenerator/image7.png)

25. Start je programma en klik op de vlinder.
    Als je letters niet de juiste grootte hebben en bijvoorbeeld heel er groot over elkaar heen komen, dan kun je bij de letters sprite de grootte aanpassen. In dit voorbeeld moest de grootte op 35 gezet worden.

![Grootte aanpassen](/static/img/complimentengenerator/image8.png)
![Voorbeeld](/static/img/complimentengenerator/image9.png)

26. Definieer nu nog het toelichting blok en het wis blok:

![Toelichting blok](/static/img/complimentengenerator/image11.png)

## Afronding

27. Je maakt het programma af door een welkomst toelichting op het scherm te laten verschijnen bij de start van het programma.
    Zorg er ook voor dat het scherm gewist wordt bij het indrukken van de spatiebalk en bij het ontvangen van het signaal wis.

![Welkom en wis](/static/img/complimentengenerator/image12.png)
![Voorbeeld](/static/img/complimentengenerator/image13.png)

Het [complete spel](https://scratch.mit.edu) staat ook in onze studio.

## En verder?

Eenvoudig: Voeg een type geluid toe aan elke letter die gestempeld wordt.

Gemiddeld: Laat de vlinder steeds sneller heen en weer vliegen.

Complex: Laat elk complimentje maar 1 keer zien tot er weer op de groene vlag wordt geklikt.
