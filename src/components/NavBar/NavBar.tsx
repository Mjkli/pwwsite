import { useState } from "react";
import "./NavBar.css";

function NavBar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    };

    return (
        <nav className="NavBarItems">
            <h1 className="navbar-logo">Prestige WorldWide <i className="fas fa-globe-americas"></i></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul>
                <button type="button">
                    Home
                </button>
                <button type="button">
                    Management
                </button>
                <button type="button">
                    Research and Development
                </button>
                <button type="button">
                    Security
                </button>
                <button type="button">
                    Demo
                </button>
                <button type="button">
                    Investors?
                </button>
                <button type="button">
                    Merch
                </button>
                <button type="button">
                    Contact Us
                </button>
            </ul>
        </nav>
    )
}

export default NavBar;
