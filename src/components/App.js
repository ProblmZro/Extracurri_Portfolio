import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ContactPage from "./pages/ContactPage";
import InterestPage from "./pages/InterestPage";
import IntroPage from "./pages/IntroPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <IntroPage />
      <InterestPage />
      <ProjectsPage />
      <ContactPage />
      {/* <Routes>
        <Route path="/introduce" element={<IntroPage />}></Route>
        <Route path="/interest" element={<InterestPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
