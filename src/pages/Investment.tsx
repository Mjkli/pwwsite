
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

const Investment = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
  return (
    <div>
      <Header setMainPage={setMainPage} />
      <h1>Investment Page</h1>
      <Footer />
    </div>
  );
}

export default Investment;