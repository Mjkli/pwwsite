import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";

const RnD = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'R&D Page', content: <h1>R&D Page</h1> },
        { label: 'Putting in the man hours', content: <h1>Puting in the man hours</h1> },
        { label: 'Experementation', content: <h1>Experementation</h1> },
        { label: 'Rip Bee', content: <h1>Rip Bee</h1> },
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