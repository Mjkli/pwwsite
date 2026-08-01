import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

const Security = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <h1>Security Page</h1>
            <Footer />
        </>
    )
}

export default Security;