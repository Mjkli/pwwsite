import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";


const Security = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <h1>Security Page</h1>
                <h1>Top notch security personel</h1>
                <h1>Security dog Availability</h1>
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Security;