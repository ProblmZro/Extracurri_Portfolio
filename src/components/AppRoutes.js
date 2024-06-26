import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import IntroPage from "./pages/IntroPage";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import ProjectsPage from "./pages/ProjectsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/1" element={<Project1 />} />
          <Route path="/2" element={<Project2 />} />
          <Route path="/3" element={<Project3 />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default AppRoutes;
