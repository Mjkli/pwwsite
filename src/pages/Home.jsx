import '../App.css'
import Demo from './Demo';
import Merch from './Merch';
import Management from './management';
import RnD from './RnD';
import Security from './security';
import { Link, Element } from 'react-scroll';


function Home(){ 
    return(
        <>
            <h1>Home Page</h1>
            <Link to="Management" smooth={true} duration={500}>
                Go to Management
            </Link>

            <Element name="Management">
                <Management />
            </Element>
            
            <Link to="RnD" smooth={true} duration={500}>
                Go to R&D
            </Link>
            <Element name="RnD">
                <RnD />
            </Element>
            
            <Link to="Security" smooth={true} duration={500}>
                Go to Security
            </Link>
            <Element name="Security">
                <Security />
            </Element>
            
            <Link to="demo" smooth={true} duration={500}>
                Go to Demo
            </Link>
            <Element name="demo">
                <Demo />
            </Element>
            
            <Link to="Merch" smooth={true} duration={500}>
                Go to Merch
            </Link>
            <Element name="Merch">
                <Merch />
            </Element>
        </>
    )
}

export default Home