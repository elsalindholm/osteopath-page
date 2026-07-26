import "../assets/scss/legal-page.scss";
import "../assets/scss/pdf-viewer.scss";
import SectionHeading from "../components/SectionHeading";

const OmaValvontaSuunnitelma = () => {
  return (
    <div className="legal-page">
      <SectionHeading bgVariant="light" nonItalics="Omavalvontasuunnitelma" />
      <iframe
        className="pdf-viewer"
        src="/documents/Omavalvontasuunnitelma-TmiEliasLindholm.pdf"
        title="Omavalvontasuunnitelma"
      />
    </div>
  );
};

export default OmaValvontaSuunnitelma;
