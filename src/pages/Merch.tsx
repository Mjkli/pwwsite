
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";

const Merch = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <h1>Merch Page: Call to action to purchase our limited supply</h1>
                <h1>Show sold out on most items</h1>
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Merch;