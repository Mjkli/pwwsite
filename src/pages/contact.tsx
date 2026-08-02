import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import "../components/Core/core.css";

const Contact = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return (
        <div>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <h1>Contact Us</h1>
            </div>
            <Footer setMainPage={setMainPage} />
        </div>
    )
}

export default Contact;