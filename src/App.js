import { Route, Routes } from "react-router-dom";
import Footer from "./components/fragments/Footer";
import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import MainContent from "./components/other/MainContent";
import StoreList from "./components/StoreList";

function App() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/stores" element={<StoreList />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
