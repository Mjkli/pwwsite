import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";
import SecurityContent from "./page-content/security";


const Security = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'Security Page', content: <SecurityContent /> },
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

export default Security;