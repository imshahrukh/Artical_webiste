import "./App.css";
import AddArtical from "./forms/addArtical";
import Artical from "./pages/artical";
import Articals from "./pages/articals";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Articals />} />
        <Route path="addArtical" element={<AddArtical />} />
        <Route path="artical" element={<Artical />} />

        {/* <Artical /> */}
        {/* <AddArtical /> */}
      </Routes>
    </div>
  );
}

export default App;
