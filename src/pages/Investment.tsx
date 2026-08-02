
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";


const Investment = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
  return (
    <div>
      <Header setMainPage={setMainPage} />
      <div className="page-content">
        <h1>Investment Page</h1>
      </div>
      <Footer setMainPage={setMainPage} />
    </div>
  );
}

export default Investment;