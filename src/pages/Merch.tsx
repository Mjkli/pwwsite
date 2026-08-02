
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

const Merch = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <h1>Merch Page</h1>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Merch;