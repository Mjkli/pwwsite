
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";

const Management = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <div className="photo-container">
                    <img src="../assets/signon_building.png" alt="Signon Building" className="signon-building" />
                </div>
                <h1>Management Page</h1>
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Management;