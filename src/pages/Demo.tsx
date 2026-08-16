
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";

const Demo = ({ setMainPage }: { setMainPage: (page: string) => void }) => {

    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="photo-container demo-photo"></div>
            <div className="page-content">
                <div className="video-embed">
                    <div className="tab-copy">
                        <p>
                        Every artist's success has a few things behind it that never make the liner notes. Take Dale and Brennan. Two guys with a shared vision, a shared house, and a shared belief that a career in music was one boat rental away. Prestige Worldwide helped them get there — a portfolio strategy that kept the lights on, security that kept the wrong people off the lawn, and equipment support that made sure "Huff 'N Doback" got recorded without a single dropped frame.
                        </p>
                        <p>
                            Here is a demo of one of our successful artists.
                        </p>
                    </div>
                    <h2>Boats 'N Hoes - Huff 'N Doback</h2>
                    <div className="youtube-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/yFiOGiT8zBQ"
                            title="Boats and Hoes - Huff 'N Doback"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
            <Footer setMainPage={setMainPage} />
        </>
    )
}

export default Demo;    