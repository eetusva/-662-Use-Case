
Käyttötapauskuvaukset


Browse votes

- Käyttäjä: Vierailija/Ylläpitäjä
- Laukaisija: Kun sovellus avataan.
- Esiehto: Jos käyttäjä on vierailija --> Pystyy selaamaan äänestyksiä, näkee äänestystilanteen sekä pystyy         äänestämään.
           Jos ylläpitäjä kirjautuu sisään linkin kautta --> Pystyy selaamaan äänestyksiä sekä tekemään muutoksia äänestyksiin.
- Käyttötapauksen kulku: 
    Vierailija: 1. Avaa sovelluksen
                2. Vierailija valitsee Browse votes
                3. Sovellus näyttää listan äänestyksistä

    Ylläpito:   1. Avaa sovelluksen
                2. Kirjautuu sisään ylläpitäjänä
                3. Ylläpitäjä valitsee Browse votes
                4. Sovellus näyttää listan äänestyksistä


Select vote

- Käyttäjä: Vierailija/Ylläpitäjä
- Laukaisija: Vierailija/Ylläpitäjä valitsee äänestyslistasta äänestyksen
- Esiehto: Vierailija/Ylläpitäjä on valinnut äänestyksen
- Jälkiehto: Vierailija/Ylläpitäjä näkee äänestyksen
- Käyttötapauksen kulku: 1. Vierailija/Ylläpitäjä valitsee äänestyslistalta äänestyksen
                         2. Sovellus näyttää äänestyksen
                         3. Vierailija voi katsoa äänestyksen äänestystilanteen tai äänestää sitä ja ylläpitäjä voikatsoa äänestystilanteen tai poistaa äänestyksen


Vote

- Käyttäjä: Vierailija
- Laukaisija: Vierailija äänestää äänestystä
- Esiehto: Vierailija on valinnut äänestyksen
- Jälkiehto: Vierailija on äänestänyt
- Käyttötapauksen kulku: 1. Vierailija äänestää valitsemaansa äänestystä


Show voting status

- Käyttäjä: Vierailija/Ylläpitäjä
- Laukaisija: Vierailija/Ylläpitäjä on valitsee näytä äänestystilanne
- Esiehto: Vierailija/Ylläpitäjä on valinnut äänestyksen
- Jälkiehto: Vierailija/Ylläpitäjä näkee äänestystilanteen
- Käyttötapauksen kulku: 1. Vierailija/Ylläpitäjä valitsee äänestyksen
                         2. Vierailija/Ylläpitäjä valitsee äänestyksen tilanteen


Create vote

- Käyttäjä: Ylläpitäjä
- Laukaisija: Ylläpitäjä kirjautuu ylläpitäjänä ja valitsee "Create vote"
- Esiehto: Ylläpitäjä on kirjautunut sovellukseen
- Jälkiehto: Uusi äänestys lisätty
- Käyttötapauksen kulku: 1. Ylläpitäjä kirjautuu sovellukseen
                         2. Valitsee "Lisää äänestyksiä"
                         3. Syöttää äänestystiedot ja lisää äänestyksen


Delete vote

- Käyttäjä: Ylläpitäjä
- Laukaisija: Ylläpitäjä kirjautuu ylläpitäjänä ja valitsee äänestyksen ja sen jälkeen "Delete Vote"
- Esiehto: Ylläpitäjä on kirjautunut sovellukseen
- Jälkiehto: Valittu äänestys poistettu sovelluksesta
- Käyttötapauksen kulku: 1. Ylläpitäjä kirjautuu sovellukseen
                         2. Valitsee "Poista äänestys"
                         3. Valitsee poistettavan äänestyksen ja poistaa sen
