---
title: "AI les 4: AI om je pols"
layout: toc
class: stappenplan
tags: [materiaal, ai, microbit]
---

## AI om je pols

Een micro:bit heeft een bewegingssensor. Je gaat een model trainen dat herkent wat jij doet: zwaaien, klappen, springen of stilstaan. Je doet de bewegingen zelf voor, het model leert ervan. Aan het eind draait de AI op het bordje zelf, zonder laptop.

Dat is anders dan in [les 2](/materiaal/ai-les-2-zelf-trainen) en [les 3](/materiaal/ai-les-3-steen-papier-schaar): daar werd het model getraind met foto's. Nu met beweging. Maar de regels zijn hetzelfde: voorbeelden, testen, verbeteren.

**Wat heb je nodig?** Een micro:bit **V2** met batterijpakket en een datakabel, en een laptop met Chrome of Edge en Bluetooth. Iets om de micro:bit om je pols te doen: een elastiek of een polsbandje. Stevig in je vuist werkt ook. Werk met z'n tweeën.

## Koppel de micro:bit

> Ga naar [createai.microbit.org?l=nl](https://createai.microbit.org?l=nl). Het stukje `?l=nl` zet de taal op Nederlands.
>
> Klik op **Nieuw project** en dan op **Verbinden**.

Nu komen er een paar vensters achter elkaar. Doe precies wat er staat:

1. *Wat je nodig hebt om via Web Bluetooth te verbinden*: klik op **Volgende**.
2. *USB-kabel aansluiten op de micro:bit*: steek de kabel in de laptop en in de micro:bit.
3. *Download programma voor gegevensverzameling naar micro:bit*: er opent een venster van de browser zelf. Kies je micro:bit in de lijst en klik op **Verbinden**.
4. *Ontkoppel USB en sluit batterijpakket aan*: haal de kabel er écht uit en sluit de batterijen aan.
5. *Micro:bit verbinden met behulp van Web Bluetooth*: weer een venster van de browser. Kies je micro:bit en klik op **Koppelen**.

Gelukt? Dan lacht de micro:bit en staat er *Jouw data collectie micro:bit is verbonden!* Zwaai eens met de micro:bit en kijk naar de grafiek.

{:class="note"}
Liggen er meer micro:bits op tafel? Elk bordje laat een eigen patroon van lampjes zien terwijl het wacht. Vergelijk dat patroon met de lijst, dan koppel je niet de verkeerde.

## Vier acties

Een **actie** is een beweging die de micro:bit moet leren. Dat is hetzelfde als een label in les 2.

> Klik op **Voeg actie toe** en typ bij *Naam van actie* de naam. Maak deze vier:

- `zwaaien`
- `klappen`
- `springen`
- `stil`

Deze vier verschillen veel van elkaar: een grote armbeweging, een korte klap, je hele lichaam, en niets. Daardoor lukt het trainen in één keer. Straks maken we het moeilijker.

## Neem tien opnames per actie op

> Doe de micro:bit om je pols.
>
> Klik bij een actie op de drie puntjes naast **Opnemen** en kies **Neem 10 samples op**.

Je krijgt tien opnames achter elkaar, elk met een aftelling. Elke opname duurt één seconde. Doe de beweging tijdens elke opname.

> Doe dit voor alle vier de acties. Bij *stil* doe je gewoon niets.

Je kunt ook op knop **B** op de micro:bit drukken om een opname te starten. Handig als de micro:bit om je pols zit.

{:class="note"}
Wissel af! Neem de helft van de opnames op met de ene en de helft met de andere van jullie tweeën. Twee mensen zwaaien nooit hetzelfde. Een model dat jullie allebei kent, werkt beter. Dat is dezelfde les als de verschillende foto's in les 2.

## Train en test

> Klik op **Train model**.

Je komt op het scherm *Model testen*. Daar zie je drie dingen:

- **Geschatte actie:** de actie die het model nu herkent.
- **Zekerheid:** een balk en een percentage per actie.
- **Herkenningspunt:** een schuifregelaar, standaard op 80%.

> Doe alle vier de bewegingen en kijk of het klopt.

Speel met de schuifregelaar. Op 40% komt er altijd wel een actie uit. Op 95% bijna nooit. Wat is beter: een model dat altijd iets kiest, of een model dat alleen antwoordt bij een hoge zekerheid? Daar is geen goed antwoord op. Dat is precies het punt.

## De uitdagende test

Het lukte met vier bewegingen die heel verschillend zijn. Nu maken we het moeilijker, expres.

> Voeg een vijfde actie toe die op zwaaien lijkt: `handen schudden`.
>
> Neem tien opnames op. Klik weer op **Train model**. Test opnieuw.

Bijna zeker lopen *zwaaien* en *handen schudden* nu door elkaar. De balken springen heen en weer.

Waarom lukte het bij de eerste vier wél en nu niet? Wat is er anders aan handen schudden en zwaaien?

## Kijk hoe het model het ziet

> Klik in het menu op **Toon data-functies**.

Elke opname wordt nu een gekleurde streepjescode in plaats van een grafiek. Zo "ziet" het model je beweging.

> Leg de streepjes van *zwaaien* en *handen schudden* naast elkaar.

Op de gewone grafiek zagen die er nog anders uit. Hier lijken ze sterk op elkaar. Voor jou zijn zwaaien en handen schudden totaal verschillend. Voor de bewegingssensor zijn het allebei een arm die ongeveer twee keer per seconde heen en weer gaat. Het model kijkt naar iets anders dan jij.

## Verbeter het

Kies een van deze oplossingen en probeer of het helpt:

- Maak de bewegingen groter en duidelijker anders: zwaaien hoog boven je hoofd, handen schudden laag voor je buik. Neem beide acties opnieuw op.
- Of besluit dat deze twee bewegingen niet samen in één model passen, en gooi *handen schudden* weg.

> Klik daarna weer op **Train model** en test.

Allebei de oplossingen zijn goed. De tweede is trouwens wat echte AI-bouwers ook vaak doen.

## Naar MakeCode

Nu zet je het model op de micro:bit zelf.

> Zorg dat je model werkt (met vier of vijf acties). Klik op **Bewerken in MakeCode** en dan op **Doorgaan naar MakeCode**.

MakeCode opent binnen dezelfde website. Bovenaan de blokkenlijst staat een categorie voor machine learning. Daarin zitten blokken met jouw eigen actienamen:

- een blok dat start zodra een actie herkend wordt;
- een blok dat start als die actie stopt;
- een ja-of-nee-blok om in een *als* te gebruiken;
- een blok dat de zekerheid geeft als getal van 0 tot 100.

> Laat bij elke actie een ander plaatje op het schermpje verschijnen. Gebruik voor elke actie het blok dat start zodra die actie herkend wordt, met daarin een **toon pictogram**.

> Klik op **Downloaden**. Kies bij *Welke micro:bit wil je gebruiken?* voor **Dezelfde micro:bit**.

Trek de laptop weg. Het model draait nu op het bordje zelf, op batterijen. Zwaai, klap, spring.

{:class="note"}
Na het downloaden is de verbinding met de website weg, want je eigen programma staat nu over het opnameprogramma heen. Wil je nog opnames maken? Dan moet je opnieuw koppelen. Doe deze stap dus als laatste.

## Bewaren

> Klik op **Opslaan**, daarna op **Bevestigen en opslaan**.

Je krijgt één `.hex`-bestand in de map Downloads. Daarin zitten je acties, alle opnames én je MakeCode-programma. Volgende keer sleep je dat bestand op het CreateAI-venster en alles staat er weer.

{:class="note"}
De website bewaart je project alleen in de browser van deze laptop. Op een gedeelde laptop is dat vroeg of laat weg. Sla dus altijd het bestand op.

## Extra uitdagingen

- **Springteller.** Maak een variabele `sprongen`. Tel er één bij op zodra *springen* herkend wordt en laat het getal op het schermpje zien. Bouw daarna een tweede versie die alleen telt als de zekerheid boven de 90 zit. Welke teller telt eerlijker?
- **Te weinig opnames.** Neem bij *klappen* maar drie opnames op en bij de rest tien. Voorspel eerst: welke actie gaat het vaakst fout? Train en test. Had je gelijk?
- **Het beste herkenningspunt.** Maak een tabel met drie kolommen: *stand van de schuifregelaar*, *aantal keer fout*, *aantal keer niets*. Doe tien bewegingen door elkaar op 50, op 70 en op 90. Welke stand zou jij kiezen voor een spel? En voor een alarm?
- **Stopwatch.** Bouw in MakeCode een stopwatch die loopt zolang je springt.
- **Eigen spel.** Bedenk vier eigen bewegingen voor een spel dat je zelf verzint, en train het model opnieuw.

## Wat heb je geleerd?

- Een model kan ook van **beweging** leren, niet alleen van beeld.
- Het model **kijkt naar andere dingen dan jij**. Twee bewegingen die voor jou verschillen, kunnen voor de sensor hetzelfde zijn.
- Met het **herkenningspunt** kies je zelf: liever een model dat vaak iets kiest, of een dat vaak niets zegt.
- Een getraind model kan op een klein bordje draaien, **zonder laptop**.
