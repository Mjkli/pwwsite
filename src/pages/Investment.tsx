
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "../components/Core/core.css";
import PageTabs from "../components/PageTabs/PageTabs";


const Investment = ({ setMainPage }: { setMainPage: (page: string) => void }) => {
  const tabs = [
    { label: 'Investment Opertunity', content: <h1>Investment Opertunity</h1> },
    { label: 'Investment Call to action for reader', content: <h1>Investment Call to action for reader</h1> },
  ];

  return (
    <>
      <Header setMainPage={setMainPage} />
      <div className="photo-container"></div>
      <div className="page-content">
        <PageTabs items={tabs} />
      </div>
      <Footer setMainPage={setMainPage} />
    </>
  );
}

export default Investment;