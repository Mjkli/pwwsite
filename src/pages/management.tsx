
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";

const Management = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'Financial portfolios', content: <h1>Financial portfolios</h1> },
        { label: 'Insurance', content: <h1>Insurance</h1> },
        { label: 'Computers', content: <h1>Computers</h1> },
        { label: 'Black Lether gloves', content: <h1>Black Lether gloves</h1> },
    ];

    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="photo-container"></div>
            <div className="page-content">
                <PageTabs items={tabs} />
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Management;