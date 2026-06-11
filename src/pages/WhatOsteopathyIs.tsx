import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/what-osteopathy-is.scss";
import BodyText from "../components/BodyText";
import NoteCard from "../components/NoteCard";

const WhatOsteopathyIs = (): ReactElement => {
  return (
    <div className="what-osteopathy-is">
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
      <div className="note-card-container">
        <NoteCard>
          <>
            <h4>Käsin tehtävä hoito</h4>
            <p>
              Hoito on lähtökohtaisesti lempeää ja kivutonta. Osteopaattisessa
              hoidossa käytettävät tekniikat kohdistuvat esimerkiksi niveliin,
              lihaksiin, sidekudoksiin sekä luukudoksiin. Niveliin voidaan
              esimerkiksi tehdä passiivista liikettä, artikulaatiota, nivelen
              sisäisen aineenvaihdunnan edistämiseksi ja pehmytkudoksia, kuten
              lihaksia, voidaan käsitellä paikallisen aineenvaihdunnan
              edistämiseksi sekä jännittyneisyyden vähenemisen edistämiseksi.
              Osteopaatti pyrkii hoidollaan tukemaan kehon sisäistä tasapainoa
              sekä kehon luonnollista pyrkimystä paranemiseen.
            </p>
          </>
        </NoteCard>
        <NoteCard>
          <>
            <h4>Kokonaisvaltaista</h4>
            <p>
              Asiakkaan keho huomioidaan toiminnallisena kokonaisuutena.
              Osteopaatti pohtii eri kudosten vaikutusta laajemmalla alueella
              sekä esimerkiksi kivun aiheuttamia mahdollisia kompensaatioita
              kehossa tai muutoksia liikkeessä. Tämä voi ilmetä esimerkiksi
              siten, että hengityksen edistämisen yhteydessä osteopaatti
              käsittelee pallean lisäksi myös selän alueen kudoksia, koska
              pallealla on merkittäviä kiinnityskohtia etenkin lannerangan
              alueella. Täten selän alueen kudosten jännittyneisyys voisi
              mahdollisesti aiheuttaa pallean toiminnassa muutoksia ja
              päinvastoin
            </p>
          </>
        </NoteCard>
      </div>
    </div>
  );
};

export default WhatOsteopathyIs;
