import '../App.css'
import Header from '../components/Header/Header'

const Home = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <h1>HOME</h1>
                <h1>Want to have the intro music from the presentation</h1>
                <h1>Mission statement for a Internation music entertainment company</h1>
            </div>
        </>
    )
}

export default Home