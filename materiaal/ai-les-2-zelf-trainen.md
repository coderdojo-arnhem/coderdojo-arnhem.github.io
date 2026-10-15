---
title: "AI les 2: Leer de computer kijken"
layout: toc
class: stappenplan
tags: [materiaal, ai]
---

## Leer de computer kijken

In [les 1](/materiaal/ai-les-1-gezichten) kon Scratch al gezichten herkennen, met een model dat iemand anders had getraind. Nu train jíj zelf een model.

Je kiest twee dingen die de computer uit elkaar moet houden. Je maakt er foto's van met je webcam. Dan **train** je een model, **test** je hoe goed het werkt, en maak je het **beter**.

**Wat heb je nodig?** Een laptop met webcam en Chrome of Edge. Je hebt geen account nodig. Werk met z'n tweeën: de een doet iets voor de camera, de ander klikt.

## Hoe leert een computer?

Lees dit eerst even, het is belangrijk voor de rest van de les.

Een gewoon computerprogramma maak je met regels. Bijvoorbeeld in Scratch: *als de spatiebalk is ingedrukt, spring dan*. Maar probeer maar eens een regel te bedenken voor "dit is een appel". Rond? Een tennisbal is ook rond. Rood? Een appel kan ook groen zijn. Dat lukt niet met regels.

Daarom doen we het anders. We geven de computer heel veel **voorbeelden**: dit is een appel, dit is een appel, dit is géén appel. De computer zoekt zelf uit wat de appels gemeen hebben. Dat heet **trainen**. En het resultaat heet een **model**.

Drie dingen om te onthouden:

1. **Het model leert alleen van jouw voorbeelden.** Slechte voorbeelden geven een model dat het verkeerde leert.
2. **Verschillende voorbeelden zijn belangrijker dan veel voorbeelden.** Tien foto's van precies dezelfde appel op dezelfde plek zijn eigenlijk maar één voorbeeld.
3. **De uitkomst is nooit "zeker weten".** De uitkomst is: 87% appel, 13% banaan. Dat getal heet de **zekerheid**.

Straks zie je alle drie de dingen zelf gebeuren.

## Kies twee dingen

Kies twee dingen die je voor de webcam kunt laten zien. Ze moeten er anders uitzien, maar niet té makkelijk. Ideeën:

- duim omhoog en duim omlaag
- mandarijn en banaan (of twee andere dingen van tafel)
- een boek open en een boek dicht
- een pet op tafel en een pet in je hand
- open hand en vuist
- een pen en een gum

Schrijf de twee dingen op. Dat worden straks je **labels**.

{:class="note"}
Maak foto's van je handen of van spullen, niet van je gezicht. Voor deze les is dat niet nodig, en zo blijven er geen foto's van jou op de laptop staan.

{:class="note"}
Kies niet twee dingen die alleen in kleur verschillen, bijvoorbeeld een rode en een blauwe pen. Dan leert de computer alleen "rood" en "blauw". Probeer het gerust als extra uitdaging aan het eind.

## Maak een project

> Ga naar [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk/).
>
> Klik bovenin in het menu op **Log In**. Dat staat naast *Help*, niet helemaal rechts. De grote blauwe knop **Get started** midden op de pagina brengt je naar hetzelfde scherm.
>
> Klik daar onder het kopje *Probeer zonder te registreren* op **Probeer nu**.
>
> Er verschijnt een vakje **Ik ben geen robot**. Vink dat aan en wacht even.

![Probeer nu, zonder account](/static/img/ai/ml4k-probeer-nu.png)

Je komt op de pagina *Je machine learning projecten*.

{:class="note"}
Staat de website in het Engels? Klik rechtsboven op **Language** en kies **Nederlands**. Niet alles is vertaald: een paar knoppen blijven Engels. Die staan in deze les precies zo opgeschreven als je ze op het scherm ziet.

{:class="note"}
Wat je zonder account maakt, wordt na ongeveer vier uur weggegooid. Voor één dojo-middag is dat genoeg. Wil je thuis verder? Dan maak je gewoon opnieuw een project.

> Klik op **Voeg een nieuw project toe**.

![Nieuw project aanmaken](/static/img/ai/ml4k-nieuw-project-afbeeldingen.png)

Vul precies dit in:

- **Projectnaam:** de twee dingen die je gekozen hebt, bijvoorbeeld `duim`
- **Project Type:** *Herkenning afbeeldingen*
- **Storage:** *In your web browser*

> Klik op **Creëer** en daarna op je nieuwe project.

Je ziet drie knoppen: **Train**, **Leer & Test** en **Maak**. Dat is de hele les, van links naar rechts.

![Train, Leer & Test, Maak](/static/img/ai/ml4k-train-leer-test-maak.png)

## Verzamel foto's

> Klik op **Train**.
>
> Klik op **Voeg een nieuw label toe** en typ je eerste ding, bijvoorbeeld `omhoog`. Doe hetzelfde voor je tweede ding, bijvoorbeeld `omlaag`.

Nu de foto's.

> Klik in het vakje van je eerste label op **webcam**. Geef toestemming als de browser dat vraagt.
>
> Hou je ding voor de camera en klik op **Voeg toe** om een foto te maken.

> Maak zo **minstens 10 foto's** per label. Doe bij elke foto iets anders: dichterbij, verder weg, een beetje schuin, links in beeld, rechts in beeld.

{:class="note"}
Weet je nog: verschillende voorbeelden zijn belangrijker dan veel voorbeelden. Maak niet tien keer dezelfde foto.

Klaar met allebei de labels? Tel na. Ongeveer evenveel foto's per label is het beste.

## Train en test

> Klik op **< Terug naar project** en dan op **Leer & Test**.
>
> Klik op **Train nieuw machine learning model**.

Dit duurt een halve tot twee minuten.

Als het klaar is, zie je een testvak.

> Klik op **Test met webcam**, hou je ding voor de camera en maak een foto.

Er verschijnt *Herkend als ...* met een percentage erachter. Dat is de zekerheid. Probeer allebei je dingen een paar keer. Lukt het?

## De uitdagende test

Nu wordt het spannend. Het model herkent jouw dingen, op jouw plek, in dit licht. Maar hoe goed is het écht? We gaan het uitdagen.

Maak op papier een tabel met drie kolommen: **wat ik deed**, **wat de computer zei**, **zekerheid**. Doe daarna deze tien tests en vul de tabel in:

1. Ga ergens anders in de zaal staan, met een andere achtergrond.
2. Draai de laptop een halve slag.
3. Laat je buurman of buurvrouw hetzelfde doen als jij.
4. Hou het veel dichter bij de camera.
5. Hou het veel verder weg.
6. Ga met je rug naar het raam staan, zodat het donker wordt.
7. Doe een trui aan, of trek juist je mouwen op.
8. Hou het ondersteboven.
9. Hou iets ertussenin (bij duim omhoog en omlaag: duim opzij).
10. Laat helemaal niets zien: alleen de achtergrond.

Tel hoe vaak de uitkomst klopte. Dat is je **score**, bijvoorbeeld 6 van de 10.

Kijk naar de tabel. Bij welke tests ging het mis? Waarom, denk je?

{:class="note"}
Bij test 10 komt er tóch een van je twee labels uit, vaak zelfs met een hoog percentage. Er is geen uitkomst "weet ik niet". Het model kent alleen de labels die jij hebt gemaakt.

## Verbeter het

Het model maakt fouten omdat jouw voorbeelden nog niet goed genoeg waren. Dat kun je zelf repareren.

> Kijk in je tabel waar het misging. Ga precies op die plek staan, of doe precies dat wat misging.
>
> Ga terug naar **Train** en maak daar bij allebei de labels nog 5 tot 10 foto's bij.
>
> Ga naar **Leer & Test** en klik weer op **Train nieuw machine learning model**.

> Doe de tien tests nog een keer en tel opnieuw.

Is je score omhoog gegaan? Bij bijna iedereen wel. En je hebt niets aan de computer veranderd, alleen betere voorbeelden gegeven.

## Extra uitdagingen

- **Drie dingen.** Voeg een derde label toe, bijvoorbeeld *duim opzij*. Train opnieuw. Wordt het moeilijker? Welke twee labels worden door elkaar gehaald?
- **Expres scheef.** Maak bij het ene label 30 foto's en bij het andere maar 5. Train opnieuw en hou iets ertussenin voor de camera. Welk label wint? Waarom?
- **Alleen kleur.** Kies een rode en een blauwe pen. Train. Test daarna met een rode gum. Wat is de uitkomst? Wat heeft het model eigenlijk geleerd?
- **Jij of de muur?** Maak alle foto's van label 1 voor een witte muur en alle foto's van label 2 voor het raam. Train. Hou nu label 1 voor het raam. Wat gebeurt er?

## Wat heb je geleerd?

- Een computer leert van **voorbeelden**, niet van regels. Dat heet **trainen**.
- Het model leert alleen wat er in jouw voorbeelden zit: die plek, dat licht, die achtergrond.
- Gaat het mis? Dan ligt dat niet aan de computer. Jouw voorbeelden waren niet goed genoeg. **Meer en meer verschillende voorbeelden** maken het beter.
- De uitkomst is nooit "zeker weten" maar een **zekerheid** in procenten.

In [les 3](/materiaal/ai-les-3-steen-papier-schaar) gebruik je zo'n zelfgetraind model in Scratch.
