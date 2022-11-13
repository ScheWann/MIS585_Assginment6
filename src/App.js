import TopBar from "./pages/Sidebar/topBar";
import Home from "./pages/Home/home";
import Product from "./pages/Products/product";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Home></Home>
      <Product></Product>
    </div>
  );
};

export default App;
