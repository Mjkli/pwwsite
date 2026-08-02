import "./footer.css";

function Footer({ setMainPage }: { setMainPage: (page: string) => void }) {
    return (
        <div className="footer">
            <footer className="footer-items"> 
                <button className="footer-button footer-management" onClick={() => setMainPage("Management")}>Management</button>
                <button className="footer-button footer-rnd" onClick={() => setMainPage("Research and Development")}>
                    RnD
                </button>
                <button className="footer-button footer-security" onClick={() => setMainPage("Security")}>Security</button>
                <button className="footer-button footer-arts" onClick={() => setMainPage("Demo")}> PWW Artists</button>
                <button className="footer-button footer-merch" onClick={() => setMainPage("Merch")}>Merch</button>
                <button className="footer-button footer-careers" onClick={() => setMainPage("Careers")}>Careers</button>
            </footer>
            <div className="footer-bottom">
                <p>© 2024 PWW. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;