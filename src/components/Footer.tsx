import "../assets/scss/footer.scss";
import type { Language } from "../App";
import type { ReactElement } from "react";
import BrandLogo from "./BrandLogo";
import type { Page } from "./NavBar";

interface Props {
  activeLanguage: Language;
  setActiveLanguage: (lang: Language) => void;
  navigate: (page: Page, section?: string) => void;
}

const Footer = ({
  activeLanguage,
  setActiveLanguage,
  navigate,
}: Props): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <BrandLogo variant="dark" />
        <div className="footer__contact">
          <p className="footer__label">
            {activeLanguage === "Suomi" ? "Puhelin" : "Mobile"}
          </p>
          <p className="footer__value">
            <a href="tel:0503830767">050 383 0767</a>
          </p>
          <p className="footer__label">
            {activeLanguage === "Suomi" ? "Sähköposti" : "Email"}
          </p>
          <p className="footer__value">
            <a href="mailto:elias.lindholm@osteoelias.fi">
              elias.lindholm@osteoelias.fi
            </a>
          </p>
          <div className="footer__language">
            <label className="sr-only" htmlFor="language-toggle">
              Vaihda kieli / toggle language
            </label>
            <select
              id="language-toggle"
              className="footer__language-select"
              value={activeLanguage}
              onChange={(e) => setActiveLanguage(e.target.value as Language)}
            >
              <option value="Suomi">Suomi</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
        <div className="footer__legal">
          <button className="footer__legal-link" onClick={() => navigate("Privacy")}>
            {activeLanguage === "Suomi" ? "Tietosuojaseloste" : "Privacy Policy"}
          </button>
          <button className="footer__legal-link" onClick={() => navigate("Terms")}>
            {activeLanguage === "Suomi" ? "Yleiset varausehdot" : "Booking Terms and Conditions"}
          </button>
        </div>
      </div>
      <p className="footer__copyright">&copy; 2026 Elias Lindholm</p>
    </footer>
  );
};

export default Footer;
