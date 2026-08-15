import '../App.css'
import Header from '../components/Header/Header'

const Home = ({ setMainPage }: { setMainPage: (page: string) => void }) => {

    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="photo-container invest-photo"></div>
        </>
    )
}

export default Home