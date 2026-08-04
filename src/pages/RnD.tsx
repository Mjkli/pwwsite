import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";

const RnD = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <h1>R&D Page</h1>
                <h1>Puting in the man hours</h1>
                <h1>Experementation</h1>
                <h1>Rip Bee</h1>
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default RnD;