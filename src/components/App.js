import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ContactPage from "./pages/ContactPage";
import InterestPage from "./pages/InterestPage";
import IntroPage from "./pages/IntroPage";
import ProjectsPage from "./pages/ProjectsPage";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<IntroPage />}></Route>
          <Route path="/interest" element={<InterestPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
