import React from "react";
import "./NavBar.css";

function NavBar({ setMainPage }: { setMainPage: (page: string) => void }) {
    let [isNavHidden, setIsNavHidden] = React.useState(false);

    return (
        <>  
            { isNavHidden ? null : (
                <div className="navbar">
                    <button onClick={() => setMainPage("Home")}>
                        Home
                    </button>
                    <button type="button" onClick={() => setMainPage("Management")}>
                        Management
                    </button>
                    <button type="button" onClick={() => setMainPage("Research and Development")}>
                        Research and Development
                    </button>
                    <button type="button" onClick={() => setMainPage("Security")}>
                        Security
                    </button>
                    <button type="button" onClick={() => setMainPage("Demo")}>
                        Demo
                    </button>
                    <button type="button" onClick={() => setMainPage("Investors")}>
                        Investors
                    </button>
                    <button type="button" onClick={() => setMainPage("Merch")}>
                        Merch
                    </button>
                    <button type="button" onClick={() => setMainPage("Contact Us")}>
                        Contact Us
                    </button>
                </div>
            )}
            { isNavHidden ? (
                <div className="nav-toggle">
                    <button onClick={() => setIsNavHidden(false)}>
                        ☰
                    </button>
                </div>
            ) : (
                <div className="nav-toggle">
                    <button onClick={() => setIsNavHidden(true)}>
                        ×
                    </button>
                </div>
            )}
        </>
    );
}

export default NavBar;
