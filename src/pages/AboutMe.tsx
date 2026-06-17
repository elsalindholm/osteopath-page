import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/about-me.scss";
import BodyText from "../components/BodyText";

const AboutMe = (): ReactElement => {
  return (
    <div id="minusta" className="about-me">
      <div className="flex-row mobile-reverse">
        <div className="about-me__image-column column">
          <div className="about-me__image-container"></div>
          <div className="info-box">
            <ul>
              <li>Osteopaatti, (AMK)</li>
              <li>
                Sote-ammattihenkilöiden keskusrekisterinumero: 24010627099
              </li>
              <li>Osteopaattiliiton jäsen</li>
            </ul>
          </div>
        </div>
        <div className="column">
          <SectionName bgVariant="light" text="Minusta" />
          <SectionHeading
            bgVariant="light"
            nonItalics="Kokonaisvaltainen lähestymistapa
"
            italics="pysyvään helpotukseen"
          />
          <BodyText bgVariant="light">
            Olen Elias, osteopaatti Helsingistä. Hakeuduin terveydenhuollon
            alalle, koska loukkaannuttuani nuorena aikuisena, sain apua
            taitavalta ja ihmislähtöiseltä kuntoutuksen alan ammattilaiselta,
            mikä inspiroi minua pyrkimään samaan.
          </BodyText>
          <BodyText bgVariant="light">
            Haluan työlläni auttaa asiakkaitani voimaan paremmin ja pyrin siihen
            kokonaisvaltaisella ihmislähtöisellä lähestymistavalla. Pyrin
            kohtaamaan asiakkaan omana itsenään, keskustelemaan sekä hoitamaan
            kokonaisvaltaisesti ja monipuolisesti osteopaattisin keinoin.
          </BodyText>
          <BodyText bgVariant="light">
            Hoidan mielelläni kaikkia ja olen erityisesti kiinnostunut
            urheilijoiden toimintakyvyn tukemisesta.
          </BodyText>
          <BodyText bgVariant="light">
            Tavoitteena urallani on tehdä yksityisen vastaanottotyön lisäksi
            myös yhteistyötä urheilujoukkueiden ja -seurojen kanssa.
            Intohimojani ovat urheilu, hyvinvointi, musiikki ja osteopatia.
            Tällä hetkellä pelaan aktiivisesti muunmuassa tennistä sekä laulan
            kuorossa.
          </BodyText>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
