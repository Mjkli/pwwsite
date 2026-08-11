
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";


const Investment = ({ setMainPage }: { setMainPage: (page: string) => void }) => {

  return (
    <>
      <Header setMainPage={setMainPage} />
      <div className="photo-container invest-photo"></div>
      <h1>Invest in Prestige Worldwide</h1>
      <div className="page-content">
            <div className="tab-copy">
                <p>
                    Two words: Prestige. Worldwide. Now imagine those two words on your quarterly statement. Prestige Worldwide is expanding into financial portfolios, insurance, stage equipment, security, and a modest but growing black leather glove division — and we're looking for investors who believe in bold ideas, unconventional research methods, and the occasional bee experiment.
                </p>

                <div className="tab-copy__item">
                    <h4>Why Invest</h4>
                    <p>We serve a market that's growing faster than most portfolios can track: artists who need real financial infrastructure but don't want to talk to someone in a suit who's never been on a tour bus. We built our entire business model around that gap, and it's working.</p>
                </div>

                <div className="tab-copy__item">
                    <h4>A Track Record of Big Swings</h4>
                    <p>We don't wait for permission to try something new. Whether it's a diversified wealth strategy or putting Liquid Paper on a bee, Prestige Worldwide moves fast, documents everything, and isn't afraid to be wrong in the name of getting it right eventually.</p>
                </div>

                <div className="tab-copy__item">
                    <h4>Multiple Revenue Streams</h4>
                    <p>Financial portfolios. Insurance. Equipment and IT services. Security. Merch (coming soon). We've built a business that doesn't rely on just one thing going well — because if the gloves division has a slow quarter, the portfolios division is right there to pick up the slack.</p>
                </div>

                <div className="tab-copy__item">
                    <h4>Leadership That Shows Up</h4>
                    <p>Every deal we've closed, every client we've protected, every questionable prototype we've built — it's because our team shows up early, stays late, and genuinely believes in what we're building. That kind of commitment is hard to fake and even harder to find.</p>
                </div>

                <p>
                    This is your chance to get in early on a company that's not just talking about growth — we're out here putting in the man-hours. Prestige Worldwide isn't asking you to trust us blindly. We're asking you to trust the data, the results, and maybe just a little bit of gut instinct. Two words. Prestige. Worldwide.
                </p>

                <div className="tab-copy__cta">
                    <a href="mailto:invest@pww.mjkli.com" className="tab-copy__cta-button">
                        Invest in Prestige Worldwide
                    </a>
                </div>
            </div>
      </div>
      <Footer setMainPage={setMainPage} />
    </>
  );
}

export default Investment;