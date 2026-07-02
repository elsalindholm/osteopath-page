import "../assets/scss/research.scss";
import ResearchLink from "../components/ResearchLink";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import type { Language } from "../App";

interface Props {
  activeLanguage: Language;
}

const Research = ({ activeLanguage }: Props) => {
  return (
    <div className="research">
      <SectionName
        bgVariant="light"
        text={activeLanguage === "Suomi" ? "Linkkejä tutkimuksiin" : ""}
      />
      <SectionHeading
        bgVariant="light"
        nonItalics={activeLanguage === "Suomi" ? "Osteopatiaan liittyviä" : ""}
        italics={activeLanguage === "Suomi" ? "tutkimuksia" : ""}
      />
      <div className="research-list">
        <ResearchLink
          title="(2025) Osteopathic approach to injuries of the overhead thrower's shoulder. Journal of Osteopathic Medicine, Vol. 125 (Issue 6), pp. 285-298."
          authors="De Luigi, A., Raum, G., King, B. and Bowers, R."
          href="https://doi.org/10.1515/jom-2024-0031"
        />
        <ResearchLink
          title="(2024) Effect of manual osteopathic techniques on the autonomic nervous system, respiratory system function and head-cervical-shoulder complex—a systematic review. Front. Med. 11:1358529."
          authors="Stępnik J, Czaprowski D and Kędra A"
          href="https://doi.org/10.3389/fmed.2024.1358529"
        />
        <ResearchLink
          title="(2020) Osteopathic treatment of patients with shoulder pain. A pragmatic randomized controlled trial. Journal of Bodywork and Movement Therapies, Vol. 24, Issue 3, Pages 21-28."
          authors="Schwerla, F., Hinse, T., Klosterkamp, M., Schmitt, T., Rütz, M. and Resch, K-L."
          href="https://doi.org/10.1016/j.jbmt.2020.02.009"
        />
        <ResearchLink
          title="(2020) Preoperative Osteopathic Manipulative Therapy Improves Postoperative Pain and Reduces Opioid Consumption After Total Knee Arthroplasty: A Prospective Comparative Study. Journal of Osteopathic Medicine, Vol. 120 (Issue 7), pp. 436-445."
          authors="Barral, P., Klouche, S., Barral, N., Lemoulec, Y., Thés, A. and Bauer, T."
          href="https://doi.org/10.7556/jaoa.2020.071"
        />
        <ResearchLink
          title="(1998) A critical review of the current conservative therapies for tennis elbow (lateral epicondylitis). Australas Chiropr Osteopathy, 7(2):53-67."
          authors="Viola L."
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2050803/"
        />
        <ResearchLink
          title="(2006) A Comparison of Selected Osteopathic Treatment and Relaxation for Tension-Type Headaches. The Journal of Head and Face Pain."
          authors="Anderson, R. E. and Seniscal, C."
          href="https://doi.org/10.1111/j.1526-4610.2006.00535.x"
        />
        <ResearchLink
          title="(2024) Elite track and field athletes' perspective and experiences of osteopathic treatments: A descriptive phenomenological study. Journal of Bodywork and Movement Therapies, Vol. 40, 2105-2112."
          authors="Cella, M., Consorti, G., Odorisio, L. and Fard, R."
          href="https://doi.org/10.1016/j.jbmt.2024.10.039"
        />
        <ResearchLink
          title="(2025) Osteopaths' perspective and experiences of elite track and field athletes osteopathic treatments: A descriptive phenomenological study. Journal of Bodywork and Movement Therapies, Volume 42, Pages 596-605."
          authors="Consorti, G., Fard, R., Odorisio, L. and Cella, M."
          href="https://doi.org/10.1016/j.jbmt.2025.01.017"
        />
        <ResearchLink
          title="(2026) Osteopathic manipulative treatment as a complementary and integrative approach to mitigate stress, anxiety, and depression: A systematic review. EXPLORE, Volume 22, Issue 1, 103290."
          authors="Lorenz, N., Mathur, M., Saleem, N., Penn, A., Boesler, D. and Bishayee, A."
          href="https://doi.org/10.1016/j.explore.2025.103290"
        />
        <ResearchLink
          title="(2013) Osteopathic intervention in chronic non-specific low back pain: a systematic review. BMC Musculoskelet Disord 14, 129."
          authors="Orrock, P.J. and Myers, S.P."
          href="https://doi.org/10.1186/1471-2474-14-129"
        />
        <ResearchLink
          title="(2021) Effectiveness of osteopathic interventions in chronic non-specific low back pain: A systematic review and meta-analysis. Complementary Therapies in Medicine, Volume 56, 102616."
          authors="Dal Farra, F., Risio, R. G., Vismara, L. and Bergna, A."
          href="https://doi.org/10.1016/j.ctim.2020.102616"
        />
        <ResearchLink
          title="(2021) Surgical and Non-surgical Treatment Options for Piriformis Syndrome: A Literature Review. Anesth Pain Med, 11(1):e112825."
          authors="Vij N, Kiernan H, Bisht R, Singleton I, Cornett EM, Kaye AD, Imani F, Varrassi G, Pourbahri M, Viswanath O and Urits I."
          href="https://doi.org/10.5812/aapm.112825"
        />
      </div>
    </div>
  );
};

export default Research;
