import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Company from "./components/pages/Company/Company";
import Contact from "./components/pages/Contact/Contact";
import Container from "./components/layout/Container/Container";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Projects from "./components/pages/Projets/Projects";
import NewProject from "./components/pages/NewProjects/NewProject";
import SingleProject from "./components/pages/SingleProject/SingleProject";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/singleProject/:id" element={<SingleProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
