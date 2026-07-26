import "../assets/scss/legal-page.scss";
import LegalSectionBody from "../components/LegalSectionBody";
import LegalSectionHeading from "../components/LegalSectionHeading";
import SectionHeading from "../components/SectionHeading";

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <SectionHeading bgVariant="light" nonItalics="Tietosuojaseloste" />
      <>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            <strong>
              Tämä tietosuojaseloste kuvaa, miten Tmi Elias Lindholm käsittelee
              henkilötietoja asiakas- ja ajanvarausjärjestelmässä EU:n yleisen
              tietosuoja-asetuksen (EU 2016/679) sekä soveltuvan kansallisen
              tietosuojalainsäädännön mukaisesti.
            </strong>
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={1}>Rekisterinpitäjä</LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Rekisterinpitäjä: Tmi Elias Lindholm
          </p>
          <p className="body-text body-text--light">Y-tunnus: 3627414-2</p>
          <p className="body-text body-text--light">
            Osoite: Merimiehenkatu 19
          </p>
          <p className="body-text body-text--light">
            Sähköpostiosoite: elias.lindholm@osteoelias.fi
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={2}>Rekisterin nimi</LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Tmi Elias Lindholm asiakastietojen, laskutuksen ja ajanvarausten
            rekisteri.
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={3}>
          Rekisterin käyttötarkoitus ja tietolähteet
        </LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Rekisterin käyttötarkoitus on asiakassuhteen parantaminen,
            ajanvarausten mahdollistaminen ja laskutustietojen ylläpito.
          </p>
          <p className="body-text body-text--light">
            Tietoja kerätään rekisteröidyiltä itseltään. Tiedot tallennetaan
            ajanvarauksen yhteydessä.
          </p>
          <p className="body-text body-text--light">
            Jos kyseessä on hoitoala, tietoja kerätään myös asiakasta
            palvelevalta hoitohenkilöstöltä. Kerättäviä henkilötietoja käytetään
            Rekisterinpitäjän ja asiakkaan asiakassuhteiden ylläpitoon,
            laskutukseen, sekä palvelun edellyttämien yhteydenottojen ja
            viestien mahdollistamiseen. Jos asiakkaan ja Rekisterinpitäjän
            välillä on hoitosuhde, järjestelmään tallennetaan myös hoitosuhteen
            kannalta asiakkaan tallennettavaksi hyväksymät tiedot. Hoitotietojen
            osalta ne tiedot viedään viranomaisten ylläpitämään Kanta-arkistoon,
            jotka laki edellyttää vietäväksi.
          </p>
          <p className="body-text body-text--light">
            Henkilötietoja ei luovuteta kolmansille osapuolille ilman
            lainmukaista perustetta.
          </p>
          <p className="body-text body-text--light">
            Rekisterinpitäjä voi myös lähettää markkinointi- ja muita
            tiedotusviestejä asiakkaalle, mikäli asiakas on sen sallinut.
            Asiakas voi kieltäytyä näistä tiedotteista ilmoittamalla siitä
            sähköpostitse osoitteeseen elias.lindholm@osteoelias.fi
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={4}>
          Henkilötietojen käsittelyn oikeusperusteet
        </LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Henkilötietojen käsittely perustuu seuraaviin oikeusperusteisiin:
          </p>
          <ul>
            <li>
              <p className="body-text body-text--light">
                <strong>Sopimus:</strong>
              </p>
              <p className="body-text body-text--light">
                Henkilötietoja käsitellään asiakassuhteen ja ajanvarauksen
                toteuttamiseksi.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                <strong>Rekisterinpitäjän lakisääteinen velvoite:</strong>
              </p>
              <p className="body-text body-text--light">
                Henkilötietoja käsitellään lakisääteisten velvoitteiden
                täyttämiseksi (esim. potilastiedot, kirjanpito).
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                <strong>Rekisteröidyn suostumus:</strong>
              </p>
              <p className="body-text body-text--light">
                Henkilötietoja käsitellään suostumuksen perusteella (esim.
                suoramarkkinointi), jos suostumus on annettu.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                <strong>Rekisterinpitäjän oikeutettu etu:</strong>
              </p>
              <p className="body-text body-text--light">
                Henkilötietoja voidaan käsitellä rekisterinpitäjän oikeutetun
                edun perusteella, kuten palvelun kehittämiseen ja tietoturvan
                varmistamiseen.
              </p>
            </li>
          </ul>
        </LegalSectionBody>
        <LegalSectionHeading number={5}>
          Rekisterin tietosisältö
        </LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Rekisteriin talletetaan tai voidaan tallettaa seuraavat tiedot:
            nimi, sähköpostiosoite, osoite (mahdollisesti), puhelinnumero
            (mahdollisesti), sukupuoli (mahdollisesti), syntymävuosi
            (mahdollisesti), syntymäaika tai henkilötunnus (jos laki edellyttää
            sitä hoitosuhteen perusteella), asiakkaan laskutustiedot, kuten etu-
            ja sukunimi, kieli, tieto asiakaskirjeiden vastaanotosta
            sähköpostitse ja tekstiviestitse, viimeisin sisäänkirjautuminen (jos
            kirjautuminen ajanvaraukseen käytössä), tiedot siitä kuka
            asiakastietoja on katsellut ja muokannut, tehdyt varaukset,
            asiakaskäynnit, maksut ja tieto siitä kuka niitä on katsellut tai
            muokannut.
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={6}>
          Tietojen luovuttaminen ja siirretäänkö tietoja EU:n tai Euroopan
          talousalueen ulkopuolelle
        </LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Henkilötietoja ei luovuteta kolmansille osapuolille ilman
            lainmukaista perustetta.
          </p>
          <p className="body-text body-text--light">
            Henkilötietoja voidaan käsitellä rekisterinpitäjän lukuun
            palveluntarjoajien toimesta (esim. asiakas- ja
            ajanvarausjärjestelmän palveluntarjoaja sekä palvelinpalveluiden
            tuottaja).
          </p>
          <p className="body-text body-text--light">
            Ajanvarausjärjestelmän palveluntarjoajalla voi olla rajattu pääsy
            henkilötietoihin silloin, kun se on tarpeen palvelun teknisen
            toteuttamisen, ylläpidon, ongelmatilanteiden selvittämisen tai
            järjestelmän käytön tukemisen yhteydessä.
          </p>
          <p className="body-text body-text--light">
            Palvelinympäristön tarjoajalla ei ole pääsyä henkilötietoihin
            selväkielisessä muodossa, vaan tiedot säilytetään suojattuina.
          </p>
          <p className="body-text body-text--light">
            Tietoja ei siirretä EU:n tai Euroopan talousalueen ulkopuolelle.
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={7}>Tietojen säilytys</LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Henkilötietoja säilytetään asiakassuhteen ajan sekä sen jälkeen niin
            kauan kuin se on tarpeen rekisterin käyttötarkoituksen
            toteuttamiseksi tai lakisääteisten velvoitteiden täyttämiseksi.
          </p>
          <p className="body-text body-text--light">
            Rekisteröidyllä on oikeus pyytää tietojensa poistamista. Tiedot
            poistetaan, mikäli käsittelylle ei ole enää laillista perustetta.
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={8}>
          Tietojen suojauksen periaatteita
        </LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Rekisterinpitäjän käyttämä palvelimen ylläpitäjä ja GDPR-asetuksen
            mukainen Tiedon käsittelijä on Ajas Oy.
          </p>
          <p className="body-text body-text--light">
            Ajas on A1 luokan potilastietojärjestelmäksi sertifioitu.
            Sertifiointiprosessissa on varmennettu tietoturvakäytännöt ulkoisen
            auditointitalon toimesta.
          </p>
          <p className="body-text body-text--light">
            Rekisteritiedon käsittelyyn käytettävä verkkopalvelu on suojattu
            salasanoin ja palvelin sekä muut palvelimet ovat suojattuja
            palomuurein, salasanoin ja muin teknisin keinoin. Salasanoja ei
            tallennetta palvelimelle selkokielisenä vaan ne säilytetään
            suolattuina ja kryptattuina "salt" kulloinkin turvallisena pidettynä
            menetelmää käyttäen. Palvelin sijaitsee lukitussa ja vartioidussa
            tilassa Upcloud Oy:n palvelinsalissa Helsingissä. Tietojen säilyvyys
            on varmistettu automaattisten varmuuskopioiden avulla.
          </p>
          <p className="body-text body-text--light">
            Ajas Oy:n henkilöstö on vaitiolovelvollinen ja jokainen on
            allekirjoittanut salassapitosopimukset, jossa sitoutuvat olemaan
            paljastamatta mitään asiakastietoihin liittyvää tietoa.
          </p>
          <p className="body-text body-text--light">
            Jos käyttämiimme järjestelmiin murtaudutaan niin, että se vaikuttaa
            sinuun, saamme siitä tiedon ja ilmoitamme siitä mahdollisimman
            nopeasti ja kerromme myöhemmin mitä vastatoimenpiteitä me teimme.
            Asiakkaan on pidettävä oma käyttäjätunnus ja salasana salassa
            kolmansilta osapuolilta, mikäli asiakkaalla on sellaiset.
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={9}>
          Tarkastus- ja kielto-oikeus
        </LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Rekisteröidyllä on EU:n yleisen tietosuoja-asetuksen mukaisesti
            oikeus:
          </p>
          <ul>
            <li>
              <p className="body-text body-text--light">
                saada pääsy omiin henkilötietoihinsa
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                vaatia virheellisten tai puutteellisten tietojen oikaisemista
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                vaatia tietojen poistamista, mikäli käsittelylle ei ole
                laillista perustetta
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                rajoittaa henkilötietojensa käsittelyä tietyissä tilanteissa
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                vastustaa henkilötietojensa käsittelyä siltä osin kuin käsittely
                perustuu rekisterinpitäjän oikeutettuun etuun
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                siirtää tiedot järjestelmästä toiseen siltä osin kuin käsittely
                perustuu suostumukseen tai sopimukseen ja se on teknisesti
                mahdollista
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                peruuttaa suostumus milloin tahansa, jos käsittely perustuu
                suostumukseen
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                tehdä valitus valvontaviranomaiselle (Tietosuojavaltuutetun
                toimisto)
              </p>
            </li>
          </ul>
          <p className="body-text body-text--light">
            Oikeuksien käyttäminen edellyttää riittävää tunnistautumista.
            Pyynnöt käsitellään kohtuullisessa ajassa.
          </p>
          <p className="body-text body-text--light">
            Edellä mainittuja oikeuksia voidaan rajoittaa, jos henkilötietojen
            käsittely perustuu lainsäädäntöön tai jos tietojen säilyttäminen on
            välttämätöntä lakisääteisten velvoitteiden täyttämiseksi.
            Rajoitukset perustuvat aina soveltuvaan lainsäädäntöön.
          </p>
          <p className="body-text body-text--light">
            Oikeuksien toteuttaminen arvioidaan tapauskohtaisesti soveltuvan
            lainsäädännön mukaisesti. Rekisterinpitäjällä on oikeus kieltäytyä
            pyynnön toteuttamisesta tai periä kohtuullinen maksu, jos pyyntö on
            ilmeisen perusteeton tai kohtuuton, erityisesti jos pyyntöjä
            esitetään toistuvasti.
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={10}>
          Evästeet ajanvarausjärjestelmän käyttäjille
        </LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Käytämme ajanvarausjärjestelmässä ns. cookie -toimintoa eli
            evästeitä. Eväste on pieni, käyttäjän selaimelle talletettava ja
            siellä säilytettävä merkintä, joka mahdollistaa sen, että
            käyttäjälle voidaan luoda turvallinen istunto (sessio), jonka ajan
            järjestelmä tietää kyseessä olevan saman käyttäjän. Ilman evästeitä
            ajanvarauspalveluun kirjautuminen ei onnistu. Evästeet eivät
            vahingoita käyttäjien tietokoneita tai tiedostoja. Mikäli
            ajanvarausjärjestelmässä vieraileva käyttäjä ei halua sallia
            evästeitä, se on mahdollista, mutta tällöin palveluiden sujuvaa
            toimintaa ei voida taata, sillä evästeet ovat tarpeellisia
            ylläpitämiemme sivujen ja tarjoamiemme palveluiden asianmukaiselle
            toimimiselle.
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={11}>IP-tiedot</LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Rekisterinpitäjän käyttämässä Ajas-ajanvarausjärjestelmässä
            vierailevien käyttäjien IP-osoitteet tallentuvat niille varattuun
            lokiin. Lokia käytetään mahdollisiin virheselvityksiin sekä
            tietoturvan ylläpitoon. Lokiin on pääsy rekisterinpitoon käytettävän
            Ajas-järjestelmän henkilöstöstä ennalta määrätyillä henkilöillä.
          </p>
        </LegalSectionBody>
        <LegalSectionHeading number={12}>Lainsäädäntö</LegalSectionHeading>
        <LegalSectionBody>
          <p className="body-text body-text--light">
            Rekisterinpitäjä noudattaa asiakastietojen säilytyksessä
            henkilötiedon käsittelyä koskevaa EU:n yleistä tietosuoja-asetusta
            sekä Suomen tietosuojalakia.
          </p>
          <p className="body-text body-text--light">
            Rekisterinpitäjä on laatinut organisaatiossa GDPR:n 30. artiklan
            mukaisen sisäisen Selosteen käsittelytoimista.
          </p>
        </LegalSectionBody>
      </>
    </div>
  );
};

export default PrivacyPolicy;
