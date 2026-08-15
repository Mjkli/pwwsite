import '../App.css';
import '../components/Core/core.css';
import '../components/Footer/footer.css'
import Header from '../components/Header/Header';
import SlideShow from '../components/SlideShow/slide';


const Home = ({ setMainPage }: { setMainPage: (page: string) => void }) => {

    return(
        <>
            <Header setMainPage={setMainPage} />
            <SlideShow />
            <div className="footer-bottom footer-fixed">
                <p>© 2024 PWW. All rights reserved.</p>
            </div>
        </>
    )
}

export default Home