import Home from "../../pages/Home";
import Management from "../../pages/management";
import RnD from "../../pages/RnD";
import Security from "../../pages/security";
import Demo from "../../pages/Demo";
import Investors from "../../pages/Investment";
import Merch from "../../pages/Merch";
import ContactUs from "../../pages/contact";

const pageMap: { [key: string]: JSX.Element } = {
    "Home": <Home />,
    "Management": <Management />,
    "Research and Development": <RnD />,
    "Security": <Security />,
    "Demo": <Demo />,
    "Investors": <Investors />,
    "Merch": <Merch />,
    "Contact Us": <ContactUs />
};


function Core({ mainPage }: { mainPage: string }) {
    return (
        <>
            {pageMap[mainPage]}
        </>
    );
}

export default Core;    