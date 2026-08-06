import "../assets/scss/kiitos-varauksestasi.scss";
import BodyText from "../components/BodyText";
import SectionHeading from "../components/SectionHeading";

const KiitosVarauksestasi = () => {
  return (
    <div className="varaus-page">
      <div className="varaus-page-column">
        <SectionHeading bgVariant="light" nonItalics="Kiitos varauksestasi!" />
        <BodyText bgVariant="light">
          Sisäänkäynti ei ole esteetön, oven edessä on muutama porras. Soita
          ovikelloa saavuttuasi paikalle, avaan oven mahdollisimman pian.
        </BodyText>

        <SectionHeading
          bgVariant="light"
          nonItalics="Thank you for your reservation!"
        />
        <BodyText bgVariant="light">
          The entrance has a few small steps in front of it. Please ring the
          doorbell when you arrive, I will open the door as soon as possible.
        </BodyText>
      </div>
      <div className="varaus-page-column">
        <div className="varaus-page__image-container"></div>
      </div>
    </div>
  );
};

export default KiitosVarauksestasi;
