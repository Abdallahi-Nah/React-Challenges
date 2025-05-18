import Header from "./components/Header";
import Content from "./components/Content";
import Laptops from "./components/Laptops";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/phones"
            element={
              <>
                <Content />
                <Content />
                <Content />
                <Content />
              </>
            }
          />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
