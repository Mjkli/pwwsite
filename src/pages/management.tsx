
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";

const Management = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <h1>Financial portfolios</h1>
                <h1>Insurance</h1>
                <h1>Computers</h1>
                <h1>Black Lether gloves</h1>
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Management;