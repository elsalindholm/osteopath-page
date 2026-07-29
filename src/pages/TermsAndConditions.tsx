import "../assets/scss/legal-page.scss";
import BodyText from "../components/BodyText";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import type { Language } from "../App";
import LegalSectionBody from "../components/LegalSectionBody";

interface Props {
  activeLanguage: Language;
}

const TermsAndConditions = ({ activeLanguage }: Props) => {
  return (
    <div className="legal-page">
      <SectionHeading
        bgVariant="light"
        nonItalics={
          activeLanguage === "Suomi"
            ? "Yleiset varausehdot"
            : "Booking Terms and Conditions"
        }
      />
      {activeLanguage === "Suomi" && (
        <LegalSectionBody>
          <ul>
            <li>
              <p className="body-text body-text--light">
                Vastaanottoaika tulee peruuttaa tai siirtää viimeistään{" "}
                <strong>24 tuntia ennen varattua aikaa</strong>.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                Peruutukset voi tehdä puhelimitse, tekstiviestillä tai muulla
                sovitulla yhteydenottotavalla.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                Mikäli aikaa ei peruta määräaikaan mennessä tai asiakas jättää
                saapumatta vastaanotolle ilman ilmoitusta, yrityksellä on oikeus
                veloittaa <strong>käynnin täysi hinta</strong>.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                Myöhästyminen voi lyhentää vastaanottoaikaa, jotta seuraavien
                asiakkaiden aikataulut eivät viivästy. Käynnistä veloitetaan
                tällöin varatun ajan mukainen hinta.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                Mikäli asiakas saapuu vastaanotolle päihtyneenä tai käyttäytyy
                vastaanotolla aggressiivisesti tai epäasiallisesti, on
                palveluntarjoajalla oikeus lopettaa vastaanotto, pyytää
                asiakasta poistumaan tilasta sekä veloittaa asiakasta käynnistä.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                Käyntiä varten varataan 60 minuutin aika, johon kuuluu asiakkaan
                haastattelu, tutkiminen, hoito sekä kanta-kirjausten tekeminen.
                Tästä syystä hoitotilanne voi kestää vähemmän kuin 60 minuuttia,
                jotta kirjausten tekemiselle jää aikaa.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                Varaamalla ajan asiakas hyväksyy nämä varausehdot.
              </p>
            </li>
          </ul>
        </LegalSectionBody>
      )}
      {activeLanguage === "English" && (
        <LegalSectionBody>
          <ul>
            <li>
              <p className="body-text body-text--light">
                The appointment must be canceled or rescheduled{" "}
                <strong>at least 24 hours before the booked time</strong>.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                Cancellations can be made by phone, text message, or any other
                agreed contact method.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                If the appointment is not canceled on time or the client fails
                to show up without notice, the company has the right to charge{" "}
                <strong>the full price of the booking</strong>.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                Being late may shorten the appointment to prevent delays for
                following clients. In that case, you will be charged the price
                for the booked time.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                If a client arrives at the appointment intoxicated or behaves
                aggressively or inappropriately, the service provider has the
                right to end the appointment, ask the client to leave, and
                charge for the visit.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                For each visit, a 60-minute slot is booked, which includes the
                client interview, examination, treatment, and making notes in
                the records. For this reason, the treatment itself may take less
                than 60 minutes to allow time for the documentation.
              </p>
            </li>
            <li>
              <p className="body-text body-text--light">
                By booking an appointment, the client agrees to these booking
                terms.
              </p>
            </li>
          </ul>
        </LegalSectionBody>
      )}
    </div>
  );
};

export default TermsAndConditions;
