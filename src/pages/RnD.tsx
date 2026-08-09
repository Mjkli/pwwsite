import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";
import ResearchAndDevelopment from "./page-content/rnd_content";
import BeeResearch from "./page-content/bee";

const RnD = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'Research & Development', content: <ResearchAndDevelopment /> },
        { label: 'Bee Study', content: <BeeResearch /> },
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

export default RnD;