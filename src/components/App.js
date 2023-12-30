import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import InterestPage from "./pages/InterestPage";
import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<IntroPage />}></Route>
          <Route path="/interest" element={<InterestPage />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
