import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
};

export default App;
