import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";

const Contact = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    const tabs = [
        { label: 'Contact Us: Page explaining different ways to get in touch with company', content: <h1>Contact Us: Page explaining different ways to get in touch with company</h1> },
        { label: 'Typical email / (fake) address', content: <h1>Typical email / (fake) address</h1> },
        { label: 'Also broken weblink to submit demo for signing', content: <h1>Also broken weblink to submit demo for signing</h1> },
    ];

    return (
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

export default Contact;