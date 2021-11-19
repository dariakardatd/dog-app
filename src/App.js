// import logo from "./logo.svg";

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import DogDetails from "./pages/DogDetails";

function App() {
  return (
    <div className="App">
      <Header title="Dog catalogue"/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<DogDetails />} />
          
        </Routes>
      </BrowserRouter>

      <Footer
        links={[
          "Dog Trends",
          "Page 2",
          "Page 3",
          "Page 4",
          "Page 5",
          "Page 6",
          "Page 7",
        ]}
        subText="Lorem Ipsum"
      />
    </div>
  );
}

export default App;
