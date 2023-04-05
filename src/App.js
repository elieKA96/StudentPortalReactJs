import AddStudent from "./component/AddStudent";
import ButtonAppBar from "./component/Appbar";
import DisplayStudent from "./component/DisplayStudent";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <AddStudent />
      <DisplayStudent />
      <Footer />
    </div>
  );
}

export default App;
