import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";
import Projects from "./pages/Projects";
import { LanguageProvider } from "./LanguageContext";
import SkillDetailPage from "./pages/SkillDetailPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="skills/:id" element={<SkillDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;