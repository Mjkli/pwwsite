
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

const Demo = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <h1>Demo Page</h1>
            <Footer />
        </>
    )
}

export default Demo;    