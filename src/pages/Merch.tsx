
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";

const Merch = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'Merch Page: Call to action to purchase our limited supply', content: <h1>Merch Page: Call to action to purchase our limited supply</h1> },
        { label: 'Show sold out on most items', content: <h1>Show sold out on most items</h1> },
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

export default Merch;