import Banner from "./components/Banner";
import Header from "./components/Header";
import Card from "./components/pages/Card";
import Content from "./components/pages/Content";
import Footer from "./components/pages/Footer";
import Services from "./components/pages/Services";
import TrustedCompanies from "./components/pages/TrustedCompanies";
import "./index.css";

// import Another from "./components/pages/Another";
// import Model from "./components/pages/Model";

export default function App() {
  return (
    <>
      {/* <Model />
      <Another /> */}

      <Header />
      <Banner />
      <Card />
      <TrustedCompanies />
      <Services />
      <Content />
      <Footer />
    </>
  );
}
