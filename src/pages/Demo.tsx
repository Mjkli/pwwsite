
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";

const Demo = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'Demo Page: Flashy New release page showcasing the BnH music vid', content: <h1>Demo Page: Flashy New release page showcasing the BnH music vid</h1> },
        { label: 'Embedding link to BnH on youtube', content: <h1>Embedding link to BnH on youtube</h1> },
    ];

    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <PageTabs items={tabs} />
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Demo;    