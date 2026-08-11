
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";

const Merch = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="photo-container merch-photo"></div>
            <h1>Merch</h1>
            <div className="page-content">
                <div className="tab-copy tab-copy--centered">
                    <h4 className="tab-copy__coming-soon">Coming Soon!</h4>
                    <p>
                        We're putting the finishing touches on the Prestige Worldwide merch line — because nothing says "serious music financial/security/R&D services company" quite like a hat with our logo on it. Check back soon.
                    </p>
                </div>
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Merch;