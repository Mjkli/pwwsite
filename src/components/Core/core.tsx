import Home from "../../pages/Home";
import Management from "../../pages/management";
import RnD from "../../pages/RnD";
import Security from "../../pages/security";
import Demo from "../../pages/Demo";
import Investors from "../../pages/Investment";
import Merch from "../../pages/Merch";
import ContactUs from "../../pages/contact";
import "./core.css"

type PageProps = { setMainPage: (page: string) => void };


const pageMap: { [key: string]: React.ComponentType<PageProps> | React.ComponentType<{}> } = {
    "Home": Home,
    "Management": Management,
    "Research and Development": RnD,
    "Security": Security,
    "Demo": Demo,
    "Investors": Investors,
    "Merch": Merch,
    "Contact Us": ContactUs,
};

function Core({ mainPage, setMainPage }: { mainPage: string; setMainPage: (page: string) => void }) {
    const PageComponent = pageMap[mainPage] ?? Home;

    return (
        <div className="page">
            <PageComponent setMainPage={setMainPage} />
        </div>
    );
}

export default Core;    