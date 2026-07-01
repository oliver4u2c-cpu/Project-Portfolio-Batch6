import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./Pages/Home.jsx";
import Aboutpage from "./Pages/About.jsx";
import Contactpage from "./Pages/Contact.jsx";
import SignupPage from "./Pages/Signup.jsx";
import LoginPage from "./Pages/Login.jsx";
import Projects from "./Pages/Projects.jsx";
import ProjectDetail from "./Pages/ProjectDetail.jsx";
import { userStore } from "./store/userStore.js";

function App() {
  const { checkAuth } = userStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark text-white">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
