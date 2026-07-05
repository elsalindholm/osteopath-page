import "../assets/scss/footer.scss";
import type { Language } from "../App";
import type { ReactElement } from "react";
import BrandLogo from "./BrandLogo";

interface Props {
  activeLanguage: Language;
  setActiveLanguage: (lang: Language) => void;
}

const Footer = ({ activeLanguage, setActiveLanguage }: Props): ReactElement => {
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
      </div>
      <p className="footer__copyright">&copy; 2026 Elias Lindholm</p>
    </footer>
  );
};

export default Footer;
