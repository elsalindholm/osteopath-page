import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/what-osteopathy-is.scss";
import BodyText from "../components/BodyText";
import type { Language } from "../App";

interface Props {
  activeLanguage: Language;
}

const WhatOsteopathyIs = ({ activeLanguage }: Props): ReactElement => {
  return (
    <div id="osteopatia" className="what-osteopathy-is">
      <SectionName
        bgVariant="dark"
        text={
          activeLanguage === "Suomi"
            ? "Mitä osteopatia on"
            : "What is osteopathy"
        }
      />
      <SectionHeading
        bgVariant="dark"
        nonItalics={
          activeLanguage === "Suomi" ? "Paljon muutakin" : "Much more than"
        }
        italics={
          activeLanguage === "Suomi"
            ? "kuin lihasten käsittelyä"
            : "treatment of muscles"
        }
      />
      <BodyText bgVariant="dark">
        {activeLanguage === "Suomi"
          ? "Osteopatia on käsin toteutettava hoitomuoto, jossa tavoitteena on asiakkaan toimintakyvyn sekä hyvinvoinnin edistäminen. Osteopaattisessa hoidossa eri elinjärjestelmiä sekä kudoksia käsitellään asiakaskohtaisten tarpeiden mukaisesti. Osteopatia on vanhin länsimainen manuaalinen hoitomuoto ja sitä on opetettu Suomessa ammattikorkeakoulussa vuodesta 2000 asti."
          : "Osteopathy is a hands-on form of therapy aimed at promoting the client’s functional capacity and overall wellbeing. In osteopathic treatment, different systems and tissues are addressed according to the client’s individual needs. Osteopathy is the oldest Western manual therapy, and it has been taught in Finnish universities of applied sciences since the year 2000."}
      </BodyText>
      <div className="what-osteopathy-is__text-box-container">
        <div className="what-osteopathy-is__text-box">
          <h4>
            {activeLanguage === "Suomi"
              ? "Käsin tehtävä hoito"
              : "Hands-on treatment"}
          </h4>
          <BodyText bgVariant="light">
            {activeLanguage === "Suomi"
              ? "Hoito on lähtökohtaisesti lempeää ja kivutonta. Osteopaattisessa hoidossa käytettävät tekniikat kohdistuvat niveliin, lihaksiin, sidekudoksiin sekä luukudoksiin. Osteopaatti pyrkii hoidollaan tukemaan kehon sisäistä tasapainoa sekä kehon luonnollista pyrkimystä paranemiseen."
              : "The treatment is by default gentle and painless. The techniques used in osteopathic care may target, for instance, joints, muscles, connective tissues, and bone tissue. Joints can be mobilized passively—articulated—to promote intra-articular metabolism, and soft tissues such as muscles can be treated to enhance local metabolic activity. Through treatment, the osteopath seeks to support the body’s internal balance and its natural aspiration to heal."}
          </BodyText>
          <BodyText bgVariant="light">
            {activeLanguage === "Suomi"
              ? "Niveliin voidaan tehdä passiivista liikettä, artikulaatiota, nivelen sisäisen aineenvaihdunnan edistämiseksi. Pehmytkudoksia, kuten lihaksia, voidaan käsitellä paikallisen aineenvaihdunnan edistämiseksi sekä jännittyneisyyden vähenemisen edistämiseksi."
              : ""}
          </BodyText>
        </div>
        <div className="what-osteopathy-is__text-box">
          <h4>
            {activeLanguage === "Suomi" ? "Kokonaisvaltaista" : "Holistic"}
          </h4>
          <BodyText bgVariant="light">
            {activeLanguage === "Suomi"
              ? "Asiakkaan keho huomioidaan toiminnallisena kokonaisuutena. Osteopaatti pohtii eri kudosten vaikutusta laajemmalla alueella sekä esimerkiksi kivun aiheuttamia mahdollisia kompensaatioita kehossa tai muutoksia liikkeessä."
              : "The client’s body is regarded as a functional whole, which means the osteopath considers the wider-area effects of different tissues and, for example, possible compensations in the body caused by pain or changes in movement. In practice, this may appear, for example, when supporting breathing: alongside the diaphragm, the osteopath also treats tissues of the back, because the diaphragm has significant attachment points particularly in the lumbar spine area. Thus, tension in the tissues of the back could potentially affect the function of the diaphragm, and vice versa."}
          </BodyText>
          <BodyText bgVariant="light">
            {activeLanguage === "Suomi"
              ? "Tämä voi ilmetä esimerkiksi siten, että hengityselimistöä hoidettaessa osteopaatti käsittelee pallean lisäksi myös selän alueen kudoksia, koska pallealla on merkittäviä kiinnityskohtia etenkin lannerangan alueella. Täten selän alueen kudosten jännittyneisyys voisi mahdollisesti aiheuttaa pallean toiminnassa muutoksia ja päinvastoin."
              : ""}
          </BodyText>
        </div>
      </div>
    </div>
  );
};

export default WhatOsteopathyIs;
