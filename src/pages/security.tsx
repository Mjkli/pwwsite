import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";


const Security = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'Security Page', content: <h1>Security Page</h1> },
        { label: 'Top notch security personel', content: <h1>Top notch security personel</h1> },
        { label: 'Security dog Availability', content: <h1>Security dog Availability</h1> },
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

export default Security;