import React from "react";
import "./NavBar.css";

function NavBar({ setMainPage }: { setMainPage: (page: string) => void }) {
    let [isNavHidden, setIsNavHidden] = React.useState(true);

    return (
        <>  
            { isNavHidden ? null : (
                <div className="navbar">
                    <button className="navbutton" onClick={() => setMainPage("Home")}>
                        Home
                    </button>
                    <button className="navbutton" type="button" onClick={() => setMainPage("Management")}>
                        Management
                    </button>
                    <button className="navbutton" type="button" onClick={() => setMainPage("Research and Development")}>
                        Research and Development
                    </button>
                    <button className="navbutton" type="button" onClick={() => setMainPage("Security")}>
                        Security
                    </button>
                    <button className="navbutton" type="button" onClick={() => setMainPage("Demo")}>
                        Demo
                    </button>
                    <button className="navbutton" type="button" onClick={() => setMainPage("Investors")}>
                        Investors
                    </button>
                    <button className="navbutton" type="button" onClick={() => setMainPage("Merch")}>
                        Merch
                    </button>
                    <button className="navbutton" type="button" onClick={() => setMainPage("Contact Us")}>
                        Contact Us
                    </button>
                </div>
            )}
            <button className="hamburger" onClick={() => setIsNavHidden(!isNavHidden)}>
                {isNavHidden ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
            </button>
        </>
    );
}

export default NavBar;
