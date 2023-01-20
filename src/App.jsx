import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogLink from "./components/BlogLink";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<BlogLink />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
