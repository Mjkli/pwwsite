import '../App.css'
import Header from '../components/Header/Header'
import PageTabs from '../components/PageTabs/PageTabs'

const Home = ({ setMainPage }: { setMainPage: (page: string) => void }) => {

    return(
        <>
            <Header setMainPage={setMainPage} />
            <div className="page-content">
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home