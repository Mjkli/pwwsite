
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";


const Management = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <h1>Management Page</h1>
            <Footer />
        </>
    )
}

export default Management;