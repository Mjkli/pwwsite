import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import "../components/Core/core.css";

const Contact = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="photo-container"></div>
            <h1>Contact Us</h1>
            <div className="page-content">
                <div className="tab-copy">
                    <p>
                        Whether you're an artist looking to sign, a business partner looking to talk numbers, or someone who just watched our bee findings and has questions, Prestige Worldwide is here for you. Sort of. Below are the best ways to reach us, listed in order from "technically functional" to "we're working on it."
                    </p>

                    <div className="tab-copy__item">
                        <h4>Email & Mailing Address</h4>
                        <p>
                            For general inquiries, reach us at <strong>info@pww.mjkli.com</strong>. Please allow 3–5 business days for a response, and an additional 3–5 business days for us to remember we have an email inbox.
                        </p>
                        <p>
                            Mailing address: Prestige Worldwide LLC, Oceanwide Plaza, are located at 1142–1164 S Figueroa St, Los Angeles, CA 90015. Packages left on the lawn will be accepted, though we cannot guarantee they'll survive contact with the dog.
                        </p>
                    </div>

                    <div className="tab-copy__item">
                        <h4>Submit a Demo</h4>
                        <p>
                            Think you've got what it takes to be the next Dale and Brennan? Submit your demo below for a chance to get signed.
                        </p>
                        <p>
                            <a href="https://pww.mjkli.com/submit-demo" className="tab-copy__broken-link">
                                pww.mjkli.com/submit-demo
                            </a>
                        </p>
                    </div>

                    <p>
                        Still can't get through? That's on brand. Try again later, try someone else at the company, or just show up at the house. Someone's usually home.
                    </p>
                </div>
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Contact;