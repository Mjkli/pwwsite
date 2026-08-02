import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

const RnD = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <h1>R&D Page</h1>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default RnD;