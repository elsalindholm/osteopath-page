import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/about-me.scss";
import BodyText from "../components/BodyText";
import type { Language } from "../App";

interface Props {
  activeLanguage: Language;
}

const AboutMe = ({ activeLanguage }: Props): ReactElement => {
  return (
    <div id="minusta" className="about-me">
      <div className="flex-row mobile-reverse">
        <div className="about-me__image-column column">
          <div className="about-me__image-container"></div>
          <div className="info-box">
            <ul>
              <li>
                {activeLanguage === "Suomi"
                  ? "Osteopaatti, (AMK)"
                  : "Osteopath, (UAS)"}
              </li>
              <li>
                {activeLanguage === "Suomi"
                  ? "Sote-ammattihenkilöiden keskusrekisterinumero: 24010627099"
                  : "In the registry of health care professionals: 24010627099"}
              </li>
              <li>
                {activeLanguage === "Suomi"
                  ? "Osteopaattiliiton jäsen"
                  : "Member of the Finnish osteopathic union"}
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <SectionName
            bgVariant="light"
            text={activeLanguage === "Suomi" ? "Minusta" : "About me"}
          />
          <SectionHeading
            bgVariant="light"
            nonItalics={
              activeLanguage === "Suomi"
                ? "Kokonaisvaltainen lähestymistapa"
                : "Holistic approach"
            }
            italics={
              activeLanguage === "Suomi"
                ? "pysyvään helpotukseen"
                : "for a lasting effect"
            }
          />
          <BodyText bgVariant="light">
            {activeLanguage === "Suomi"
              ? "Olen Elias, osteopaatti Helsingistä. Hakeuduin terveydenhuollon alalle, koska loukkaannuttuani nuorena aikuisena, sain apua taitavalta ja ihmislähtöiseltä kuntoutuksen alan ammattilaiselta, mikä inspiroi minua pyrkimään samaan."
              : "I’m Elias, an osteopath from Helsinki. I ended up in the healthcare business because of an injury I had as a young adult. The manual therapist who helped me recover acted with such professionalism and made me feel seen in a way I wish to pass on to others. "}
          </BodyText>
          <BodyText bgVariant="light">
            {activeLanguage === "Suomi"
              ? "Haluan työlläni auttaa asiakkaitani voimaan paremmin ja pyrin siihen kokonaisvaltaisella ihmislähtöisellä lähestymistavalla. Pyrin kohtaamaan asiakkaan omana itsenään, keskustelemaan sekä hoitamaan kokonaisvaltaisesti ja monipuolisesti osteopaattisin keinoin."
              : "My goal is to help my clients feel better which I do by treating the body as a whole and by tailoring to the individual needs of the client. I treat all kinds of people and I’m especially interested in treating athletes and musicians. "}
          </BodyText>
          <BodyText bgVariant="light">
            {activeLanguage === "Suomi"
              ? "Hoidan mielelläni kaikkia ja olen erityisesti kiinnostunut urheilijoiden toimintakyvyn tukemisesta."
              : ""}
          </BodyText>
          <BodyText bgVariant="light">
            {activeLanguage === "Suomi"
              ? "Tavoitteena urallani on tehdä yksityisen vastaanottotyön lisäksi myös yhteistyötä urheilujoukkueiden ja -seurojen kanssa. Intohimojani ovat urheilu, hyvinvointi, musiikki ja osteopatia. Tällä hetkellä pelaan aktiivisesti muunmuassa tennistä sekä laulan kuorossa."
              : "My career goal is to also work with sports teams and organisations. My passions are sports, well-being, music and osteopathy. At the moment I play lots of tennis and sing in a choir."}
          </BodyText>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
