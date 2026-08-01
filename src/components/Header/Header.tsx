import "./Header.css";
import { FaEarthAmericas } from "react-icons/fa6";


function Header({ setMainPage }: { setMainPage: (page: string) => void }) {
    return (
        <header className="header">
            <button className="header-button" onClick={() => setMainPage("Home")}>
                <FaEarthAmericas />
                <h1>PWW</h1>
            </button>
        </header>
    );
}

export default Header;