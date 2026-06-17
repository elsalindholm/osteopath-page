import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/what-osteopathy-is.scss";
import BodyText from "../components/BodyText";

const WhatOsteopathyIs = (): ReactElement => {
  return (
    <div id="osteopatia" className="what-osteopathy-is">
      <SectionName bgVariant="dark" text="Mitä osteopatia on" />
      <SectionHeading
        bgVariant="dark"
        nonItalics="Paljon muutakin"
        italics="kuin lihasten käsittelyä"
      />
      <BodyText bgVariant="dark">
        Osteopatia on käsin toteutettava hoitomuoto, jossa tavoitteena on
        asiakkaan toimintakyvyn sekä hyvinvoinnin edistäminen. Osteopaattisessa
        hoidossa eri elinjärjestelmiä sekä kudoksia käsitellään
        asiakaskohtaisten tarpeiden mukaisesti. Osteopatia on vanhin länsimainen
        manuaalinen hoitomuoto ja sitä on opetettu Suomessa
        ammattikorkeakoulussa vuodesta 2000 asti.
      </BodyText>
      <div className="what-osteopathy-is__text-box-container">
        <div className="what-osteopathy-is__text-box">
          <h4>Käsin tehtävä hoito</h4>
          <BodyText bgVariant="light">
            Hoito on lähtökohtaisesti lempeää ja kivutonta. Osteopaattisessa
            hoidossa käytettävät tekniikat kohdistuvat niveliin, lihaksiin,
            sidekudoksiin sekä luukudoksiin. Osteopaatti pyrkii hoidollaan
            tukemaan kehon sisäistä tasapainoa sekä kehon luonnollista
            pyrkimystä paranemiseen.
          </BodyText>
          <BodyText bgVariant="light">
            Niveliin voidaan tehdä passiivista liikettä, artikulaatiota, nivelen
            sisäisen aineenvaihdunnan edistämiseksi. Pehmytkudoksia, kuten
            lihaksia, voidaan käsitellä paikallisen aineenvaihdunnan
            edistämiseksi sekä jännittyneisyyden vähenemisen edistämiseksi.
          </BodyText>
        </div>
        <div className="what-osteopathy-is__text-box">
          <h4>Kokonaisvaltaista</h4>
          <BodyText bgVariant="light">
            Asiakkaan keho huomioidaan toiminnallisena kokonaisuutena.
            Osteopaatti pohtii eri kudosten vaikutusta laajemmalla alueella sekä
            esimerkiksi kivun aiheuttamia mahdollisia kompensaatioita kehossa
            tai muutoksia liikkeessä.
          </BodyText>
          <BodyText bgVariant="light">
            Tämä voi ilmetä esimerkiksi siten, että hengityselimistöä
            hoidettaessa osteopaatti käsittelee pallean lisäksi myös selän
            alueen kudoksia, koska pallealla on merkittäviä kiinnityskohtia
            etenkin lannerangan alueella. Täten selän alueen kudosten
            jännittyneisyys voisi mahdollisesti aiheuttaa pallean toiminnassa
            muutoksia ja päinvastoin.
          </BodyText>
        </div>
      </div>
    </div>
  );
};

export default WhatOsteopathyIs;
