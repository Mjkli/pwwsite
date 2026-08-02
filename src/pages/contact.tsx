import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";

const Contact = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return (
        <div>
            <Header setMainPage={setMainPage} />
            <h1>Contact Us</h1>
            <Footer setMainPage={setMainPage} />
        </div>
    )
}

export default Contact;