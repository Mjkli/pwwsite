
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";
import Portfolios from "./page-content/portfolios";
import Insurance from "./page-content/insurance";
import Computers from "./page-content/computers";
import BlackLeatherGloves from "./page-content/blackgloves";

const Management = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'Financial portfolios', content: <Portfolios /> },
        { label: 'Insurance', content: <Insurance /> },
        { label: 'Computers', content: <Computers /> },
        { label: 'Black Lether gloves', content: <BlackLeatherGloves /> },
    ];

    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="photo-container management-photo"></div>
            <div className="page-content">
                <PageTabs items={tabs} />
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Management;