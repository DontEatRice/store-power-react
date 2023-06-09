import { Route, Routes } from "react-router-dom";
import Footer from "./components/fragments/Footer";
import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import LoginForm from "./components/other/LoginForm";
import MainContent from "./components/other/MainContent";
import PricebookForm from "./components/Pricebook/PricebookForm";
import PricebookList from "./components/Pricebook/PricebookList";
import PricebookDetails from "./components/Pricebook/PricebooksDetails";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import StoreDetails from "./components/Store/StoreDetails";
import StoreForm from "./components/Store/StoreForm";
import StoreList from "./components/Store/StoreList";

function App() {
  // const [user, setUser] = useState(null)

  const handleLogin = (user) => {
    localStorage.setItem('user', user)
    // setUser(user)
  }

  const handleLogout = (user) => {
    localStorage.removeItem('user')
    // setUser(null)
  }

  return (
    <>
      <Header></Header>
      <Navigation handleLogout={handleLogout}></Navigation>
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="login" element={<LoginForm handleLogin={handleLogin} />}></Route>
        <Route path="stores">
          <Route index={true} element={<StoreList />} />
          <Route path="details/:storeId" element={<StoreDetails />} />
          <Route path="add" element={<StoreForm />} />
          <Route path="edit/:storeId" element={<StoreForm />} />
        </Route>
        <Route path="pricebooks">
          <Route index={true} element={<PricebookList />} />
          <Route path="details/:pricebookId" element={<PricebookDetails />} />
          <Route path="add" element={<PricebookForm />} />
          <Route path="edit/:pricebookId" element={<PricebookForm />} />
        </Route>
        <Route path="products">
          <Route index={true} element={<ProductList />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="add" element={<ProductForm />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
